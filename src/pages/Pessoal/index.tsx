import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View, Dimensions, KeyboardAvoidingView, Image, Pressable, Text, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import data from '../../BDTeste/banco.json';
import firebase from '../../serverData/connect';
import { FlatList } from 'react-native-gesture-handler';
import { RootState } from '../../store/index';
import { setNewFrase, setNewImage, setNewImageFundo, setLogin, setIsLogin, resetLogin } from '../../store';
import { stylesPerfil, stylesLogin } from './styles';
import { propsStack } from '../../services/types';
import { Header } from '../../components/Header';
import { ModalLogin } from '../../components/ModalLogin';
import { theme } from '../../themes';
import { ModalAvatarPerfil } from '../../components/ModalAvatarPerfil';
 
const { width, height } = Dimensions.get('window');
const iconsHerois = require('../../assets/Icon-Herois.png')
const iconsViloes = require('../../assets/Icon-Viloes.png')
const iconsAnti = require('../../assets/Icon-Anti.png')

type PropsPerfil = {
    id?: number,
    uid?: string | undefined,
    nome: string,
    email: string,
    senha: string,
    imagePerfil: string,
    favoritos: [],
    // isLogin: boolean
}

export function Pessoal(){

    const navigation = useNavigation<propsStack>();
    const dispatch = useDispatch();
    const usuario = useSelector((state: RootState) => state.usuario)

    const [ statusLogin, setStatusLogin ] = useState(usuario.isLogin);
    const [ email, setEmail ] = useState("");
    const [ senha, setSenha ] = useState("");
    const [ confSenha, setConfSenha ] = useState("");
    const [ nome, setNome ] = useState("");
    const [ sobrenome, setSobrenome ] = useState("");
    const [ imageP, setImageP ] = useState(usuario.imagePerfil);
    const [ logando, setLogando ] = useState(false);

    const [ error, setError ] = useState(false);
    const [ textErro, setTextErro ] = useState("");
    const [ sign, setSing ] = useState(Boolean);
    const [ statusModal, setStatusModal ] = useState(false);
    const [ setarPerfilModal, setSetarPerfilModal ] = useState(false);

    function SetImage(urlPerfil: string, urlFundo: string, frase: string) {
        dispatch(setNewImage(urlPerfil))
        dispatch(setNewFrase(frase))
        dispatch(setNewImageFundo(urlFundo))
        setStatusModal(false)
    }
    
    async function SetUser(uid: string | undefined) {
        await firebase.firestore().collection('Users').where('uid', '==', uid)
        .get().then((query) => {
            query.forEach((doc) => {
                dispatch(setLogin({
                    ...doc.data()
                }))
            })
        }).then(() => {
            dispatch(setIsLogin(true));
            setStatusModal(false)
            setLogando(false);
            setStatusLogin(true);
        });
    }

    async function Verificar({email,nome,senha,imagePerfil, favoritos}: PropsPerfil, 
        sobrenome: string,
        estado: string, 
        confSenha: string
    ) {

        if (estado === "login") {
            if(email != '' && senha != ''){
                if(email.includes('@') === true && email.includes('.com') === true && senha.length >= 6){
                    setLogando(true);
                    await firebase.auth().signInWithEmailAndPassword(email,senha)
                    .then((userCredential) => {
                        const uid = userCredential.user?.uid;
                        SetUser(uid);
                    }).catch((error) => {
                        setTextErro("Email ja registrado");
                        setError(true)
                        setLogando(false);
                    })
                }else{
                    setTextErro("Email ou senha não seguem os padrões. Verifique e tente de novo");
                    setError(true)
                    setLogando(false);
                }
            }else{
                setTextErro("Email ou senha estâo fora dos padrões. Verifiuque e tente de novo");
                setError(true)
                setLogando(false);
            }
        }else{
            if(nome != '' && email != '' && senha != '' && confSenha != ''){
                if (senha === confSenha) {
                    if(email.includes('@') === true && email.includes('.com') === true && senha.length >= 6){
                        setLogando(true);
                        const size = (await firebase.firestore().collection('Users').get()).size
                        await firebase.auth().signInWithEmailAndPassword(email,senha)
                        .then((userCredential) => {
                            setError(true)
                            setLogando(false);
                        }).catch((error) => {
                            var perfil: PropsPerfil | any = {}
                            firebase.auth().createUserWithEmailAndPassword(email,senha)
                            .then((userCredential) => {
                                perfil = {
                                    id: size + 1,
                                    uid: userCredential.user?.uid,
                                    nome: `${nome} ${sobrenome}`, 
                                    email: email,
                                    senha: senha,
                                    imagePerfil: imagePerfil,
                                    favoritos: favoritos
                                }; 
                                
                                console.log(perfil)
                                firebase.firestore().collection('Users')
                                .add({...perfil})
                            }).finally(() => {
                                dispatch(setLogin({
                                    ...perfil
                                }));
                                dispatch(setIsLogin(true));
                                setLogando(false)
                                setStatusLogin(true);
                            })
                        })
                    }else{
                        setTextErro("Email ou senha não seguem os padrões. Verifique e tente de novo");
                        setError(true)
                        setLogando(false);
                    }
                }else{
                    setTextErro("Senhas não batem. Vertifque e tente de novo");
                    setError(true)
                    setLogando(false);
                }
            }else{
                setTextErro("Nome, email ou senha estâo fora dos padrões. Verifiuque e tente de novo");
                setError(true)
                setLogando(false);
            }
        }

    }

    async function Logout() {
        await firebase.auth().signOut().then(() => {
            dispatch(resetLogin());
            setStatusLogin(false);
        })
    }


    const avatares = [
        {
            perfil: "https://firebasestorage.googleapis.com/v0/b/appnerd-9e189.appspot.com/o/perfis%2Fspider-man%2Fperfil-spider_man.jpg?alt=media&token=15d58d7f-9496-4b17-9be3-91cea0b9b011",
        },
        {
            perfil: "https://firebasestorage.googleapis.com/v0/b/appnerd-9e189.appspot.com/o/perfis%2Fironman%2Fperfil-iron_man.jpg?alt=media&token=e0e3e8fb-8544-47a4-8750-7ba4146542b8",
        },
        {
            perfil: "https://uploads.jovemnerd.com.br/wp-content/uploads/2019/02/hulk-nova-origem.jpg",
        },
    ]

    if (statusLogin) { 
        return(
            <View style={{ flex: 1, backgroundColor: theme.colors.fundo }}>
                <View style={{ 
                    backgroundColor: theme.colors.destaque, 
                    paddingTop: 40, 
                    paddingBottom: 10, 
                    width: width,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20 
                }}>
                    <Avatar
                        size={110}
                        rounded
                        source={{ uri: usuario.imagePerfil }}
                        containerStyle={{ backgroundColor: theme.colors.contraste, padding: 2 }}
                    />
                    <View style={stylesPerfil.viewNome}>
                        <Text style={stylesPerfil.textHeaderOpacity}>Bem-Vindo</Text>
                        <Text style={stylesPerfil.textHeader}>{usuario.nome}</Text>
                    </View>
                    
                </View>    
                <View style={{ flex: 1, paddingTop: 10 }}>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate("PageLista")} 
                        style={stylesPerfil.buttons}
                    >
                        <Icons name='list-circle' size={26} color={theme.colors.fundo} />
                        <Text style={stylesPerfil.textButtons} >Minha Lista</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={stylesPerfil.buttons}>
                        <Icons name='person' size={26} color={theme.colors.fundo} />
                        <Text style={stylesPerfil.textButtons} >Pessoal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesPerfil.buttons}>
                        <Icons name='settings' size={26} color={theme.colors.fundo} />
                        <Text style={stylesPerfil.textButtons} >Configurações</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesPerfil.buttons}>
                        <Icons name='alert-circle' size={26} color={theme.colors.fundo} />
                        <Text style={stylesPerfil.textButtons} >Sobre</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Logout()} style={stylesPerfil.buttons}>
                        <Icons name='log-out' size={26} color={theme.colors.fundo} />
                        <Text style={stylesPerfil.textButtons} >Sair</Text>
                    </TouchableOpacity>
                </View>
            </View>  
        )
    }else{

        return(
            <KeyboardAvoidingView behavior='height' style={stylesLogin.container}>
                <StatusBar style='light' backgroundColor={theme.colors.fundo}/>
                <View style={{ width: "100%", height: "100%" }}>
                    <Image 
                        source={{ uri: "https://cdn.shopify.com/s/files/1/0275/4432/2125/products/GFC-QUADRINHO-01_1024x1024.jpg?v=1628103659" }}
                        style={{ width: "100%", height: "100%", position: 'absolute', zIndex: -999 }}
                    />
                    <View style={{ width: "100%", height: "100%", alignItems: 'center', justifyContent: 'center', backgroundColor: "rgba(0, 0, 0,.6)" }}>
                        <Pressable onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 40, left: 10 }}>
                            <Icons name="chevron-back" size={32} color="#fff" />
                        </Pressable>
                        <Text style={stylesLogin.title}>Mundo {'\n'} Nerd</Text>
                        <TouchableOpacity onPress={() => {setStatusModal(true), setSing(true)}} style={[stylesLogin.botoes,{ backgroundColor: theme.colors.lightBold }]}>
                            <Text style={{ color: "#fff", fontSize: 18 }} >Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {setStatusModal(true), setSing(false)}} style={[stylesLogin.botoes,{ backgroundColor: theme.colors.bold }]}>
                            <Text style={{ color: "#fff", fontSize: 18 }} >Sign Up</Text>
                        </TouchableOpacity>                              
                    </View>
                </View>
                {logando ? 
                    <View style={{ position: 'absolute', zIndex: 999, backgroundColor: 'rgba(58,58,58,0.5)', width: width, height: height+100, alignItems: 'center', justifyContent: 'center' }}>
                        <ActivityIndicator 
                            size='large'
                            color="red"
                        />
                    </View>
                : null}
                {/* <KeyboardAvoidingView></KeyboardAvoidingView> */}
                <ModalLogin 
                    show={statusModal} 
                    sign={sign} 
                    signIn={() => setSing(true)}
                    signUp={() => setSing(false)}
                >
                    <View style={{ flex: 1, paddingTop: 20, paddingBottom: 40 }}>
                        {sign ? 
                            <>
                                <View>
                                    <Text style={stylesLogin.labels}>Email:</Text>
                                    <TextInput 
                                        style={stylesLogin.inputs} 
                                        placeholder=''
                                        placeholderTextColor='#858383'
                                        onChangeText={(text) => setEmail(text)}
                                    />
                                    <Text style={[stylesLogin.labels,{ marginTop: 20 }]}>Senha:</Text>
                                    <TextInput 
                                        style={stylesLogin.inputs}
                                        secureTextEntry
                                        placeholder=''
                                        placeholderTextColor='#858383'
                                        onChangeText={(text) => setSenha(text)}
                                    />
                                </View>
                                {error ? <Text style={{ color: 'red' }}>{textErro}</Text> : null}
                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 30 }}>
                                    <Pressable onPress={() => setStatusModal(false)} style={[ stylesLogin.buttons, { backgroundColor: theme.colors.fundo }]}>
                                        <Text style={{ color: "#fff" }}>Cancelar</Text>
                                    </Pressable>
                                    <Pressable 
                                        onPress={() => Verificar({ 
                                            email: email, 
                                            senha: senha, 
                                            imagePerfil: imageP, 
                                            nome: nome, 
                                            favoritos: [] 
                                        }, sobrenome, "login", confSenha)} 
                                        style={[ stylesLogin.buttons, { backgroundColor: theme.colors.destaque }]}
                                    >
                                        <Text style={{ color: "#fff" }}>Login</Text>
                                    </Pressable>
                                </View>
                            </>
                        :
                            <>
                                <View>
                                    <View style={{ width: "100%", alignItems: 'center' }}>
                                        <Avatar
                                            size={100}
                                            rounded
                                            source={{ uri: imageP }}
                                            containerStyle={{ backgroundColor: '#ffff', padding: 2 }}
                                        >
                                            <Avatar.Accessory 
                                                style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: 'red' }}
                                                size={25}
                                                onPress={() => setSetarPerfilModal(true)}
                                            />
                                        </Avatar>
                                    </View>
                                    <Text style={stylesLogin.labels}>Nome:</Text>
                                    <TextInput 
                                        style={stylesLogin.inputs} 
                                        placeholder=''
                                        placeholderTextColor='#858383'
                                        onChangeText={(text) => setNome(text)}
                                    />
                                    <Text style={[stylesLogin.labels,{ marginTop: 20 }]}>Sobrenome:</Text>
                                    <TextInput 
                                        style={stylesLogin.inputs}
                                        placeholder=''
                                        placeholderTextColor='#858383'
                                        onChangeText={(text) => setSobrenome(text)}
                                    />
                                    <Text style={[stylesLogin.labels,{ marginTop: 20 }]}>Email:</Text>
                                    <TextInput 
                                        style={stylesLogin.inputs}
                                        placeholder=''
                                        placeholderTextColor='#858383'
                                        onChangeText={(text) => setEmail(text)}
                                    />
                                    <Text style={[stylesLogin.labels,{ marginTop: 20 }]}>Senha:</Text>
                                    <TextInput 
                                        style={stylesLogin.inputs}
                                        secureTextEntry
                                        placeholder=''
                                        placeholderTextColor='#858383'
                                        onChangeText={(text) => setSenha(text)}
                                    />
                                    <Text style={[stylesLogin.labels,{ marginTop: 20 }]}>Confirmar Senha:</Text>
                                    <TextInput 
                                        style={stylesLogin.inputs}
                                        secureTextEntry
                                        placeholder=''
                                        placeholderTextColor='#858383'
                                        onChangeText={(text) => setConfSenha(text)}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 30 }}>
                                    <Pressable onPress={() => setStatusModal(false)} style={[ stylesLogin.buttons, { backgroundColor: theme.colors.fundo } ]}>
                                        <Text style={{ color: "#fff" }}>Cancelar</Text>
                                    </Pressable>
                                    <Pressable onPress={() => Verificar({ 
                                                email: email, 
                                                senha: senha, 
                                                imagePerfil: imageP, 
                                                nome: nome, 
                                                favoritos: [] 
                                            }, sobrenome, "cadastro", confSenha )} style={[ stylesLogin.buttons, { backgroundColor: theme.colors.destaque } ]}>
                                        <Text style={{ color: "#fff" }}>Cadastrar</Text>
                                    </Pressable>
                                </View>
                            </>
                        }
                    </View>
                </ModalLogin>
                <ModalAvatarPerfil show={setarPerfilModal} close={() => setSetarPerfilModal(!setarPerfilModal)}>
                    <View>
                        <FlatList 
                            data={avatares}
                            keyExtractor={(_,i) => i.toString()}
                            horizontal
                            renderItem={({ item }) => (
                                <Pressable onPress={() => setImageP(item.perfil)} style={{ marginRight: 10 }}>
                                    <Image 
                                        source={{ uri: item.perfil }} 
                                        style={{ width: 60, height: 60, borderRadius: 30 }} 
                                    />
                                </Pressable>
                            )}
                        />
                    </View>
                </ModalAvatarPerfil>
            </KeyboardAvoidingView>
        );
    }

    
}