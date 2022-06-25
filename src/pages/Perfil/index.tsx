import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Dimensions, ImageBackground, Image, Pressable, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import data from '../../BDTeste/banco.json';
import firebase from '../../serverData/connect';
import { Modal } from '../../components/Modal';
import { FlatList } from 'react-native-gesture-handler';
import { RootState } from '../../store/index';
import { setNewFrase, setNewImage, setNewImageFundo, setLogin, setIsLogin } from '../../store';
import { styles } from './styles';
import { propsStack } from '../../services/types';
import { Header } from '../../components/Header';
 
const { width, height } = Dimensions.get('window');
const iconsHerois = require('../../assets/Icon-Herois.png')
const iconsViloes = require('../../assets/Icon-Viloes.png')
const iconsAnti = require('../../assets/Icon-Anti.png')

export function Perfil(){

    const navigation = useNavigation<propsStack>();
    const dispatch = useDispatch();
    const usuario = useSelector((state: RootState) => state.usuario)
    const [ statusModal, setStatusModal ] = useState(false);
    const [ logando, setLogando ] = useState(false);

    function filterFavoritos() {
        const filter: any = [];
        usuario.favoritos.map((item) => {
            if (item.editora === "Marvel") {
                data.personagensMarvel.forEach((item_) => {
                    if (item_.id.toString() === item.id) {
                        filter.push({...item_})
                    }
                })
            }
            if (item.editora === "DC") {
                data.personagensDC.forEach((item_) => {
                    if (item_.id.toString() === item.id) {
                        filter.push({...item_})
                    }
                })
            }
        })
        return filter;
    }

    const avatares = [
        {
            fundo: 'https://firebasestorage.googleapis.com/v0/b/appnerd-9e189.appspot.com/o/perfis%2Fspider-man%2Fthamb-spider_man.jpg?alt=media&token=ef94e332-3bc6-49c0-ba14-3a004bf583d6',
            frase: 'Que Estranho ?!',
            perfil: "https://firebasestorage.googleapis.com/v0/b/appnerd-9e189.appspot.com/o/perfis%2Fspider-man%2Fperfil-spider_man.jpg?alt=media&token=15d58d7f-9496-4b17-9be3-91cea0b9b011",
        },
        {
            fundo: 'https://firebasestorage.googleapis.com/v0/b/appnerd-9e189.appspot.com/o/perfis%2Fironman%2Fthamb-iron_man.jpg?alt=media&token=9f9e4db3-af7d-4630-9c49-48565f4a16f5',
            frase: 'Tudo certo?!',
            perfil: "https://firebasestorage.googleapis.com/v0/b/appnerd-9e189.appspot.com/o/perfis%2Fironman%2Fperfil-iron_man.jpg?alt=media&token=e0e3e8fb-8544-47a4-8750-7ba4146542b8",
        },
        {
            fundo: 'https://geeksaw.com.br/wp-content/uploads/2017/08/thor-hulk-001-cvr-1016582-e1503512961268.jpg',
            frase: 'Mim com Raiva!!!',
            perfil: "https://uploads.jovemnerd.com.br/wp-content/uploads/2019/02/hulk-nova-origem.jpg",
        },
    ]

    function SetImage(urlPerfil: string, urlFundo: string, frase: string) {
        dispatch(setNewImage(urlPerfil))
        dispatch(setNewFrase(frase))
        dispatch(setNewImageFundo(urlFundo))
        setStatusModal(false)
    }

    async function SetUser() {
        setLogando(true);
        firebase.firestore().collection("Users").doc("QQTKsetclUD5PtlNHpVB")
        .get().then((query) => {
            dispatch(setLogin({
                ...query.data()
            }));
        }).then(() => {
            dispatch(setIsLogin(true));
            setLogando(false);
        });
    }

    return(
        <View style={{ flex: 1 }}>
            {usuario.isLogin ?   
                <>
                    <StatusBar style='light' />
                    <ImageBackground 
                        source={{ uri: usuario.imageFundo }} 
                        style={{ width: '100%', height: 395 }}
                    >
                        <View style={{ flex: 1, backgroundColor: 'rgba(58,58,58,0.6)', paddingTop: 25}}>

                            <Header perfil title=''/>
                                <View 
                                    style={{ width: 150, height: 100, position: 'absolute', top: 160, left: 22, alignItems: 'center', justifyContent: 'center'}}  
                                >
                                    <Image 
                                        source={{ uri: "https://firebasestorage.googleapis.com/v0/b/appnerd-9e189.appspot.com/o/ferramentas_quadrihos%2Fcomic-talk.png?alt=media&token=383304d8-638e-4849-92f1-add14dfb6edf" }}
                                        style={{ width: '100%', height: '100%', transform:[{ rotateY: '180deg' }], position: 'absolute', resizeMode: 'contain' }}
                                    />
                                    <Text style={{ fontFamily: 'ComicNeue_700Bold' }} >{usuario.frase}</Text>
                                </View>

                            <View style={styles.viewImage}>
                                <Avatar
                                    size={110}
                                    rounded
                                    source={{ uri: usuario.imagePerfil }}
                                    containerStyle={{ backgroundColor: '#ffff', padding: 2 }}
                                >
                                    <Avatar.Accessory 
                                        style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: 'red' }}
                                        size={25}
                                        onPress={() => setStatusModal(true)}
                                    />
                                </Avatar>
                            </View>


                            <View style={styles.viewNome}>
                                <Text style={styles.textHeaderOpacity}>Bem-Vindo</Text>
                                <Text style={styles.textHeader}>{usuario.nome}</Text>
                            </View>

                            <View style={styles.info}>
                                <View style={{ alignItems: 'center' }}>
                                    <Image source={iconsHerois} style={{ width: 32, height: 24 }} /> 
                                    <Text style={[styles.textHeader, { marginTop: 2, marginBottom: 7 }]}>0</Text>
                                    <Text style={styles.textHeaderOpacity}>Herois</Text>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Image source={iconsViloes} style={{ width: 24, height: 26 }} />
                                    <Text style={[styles.textHeader, { marginTop: 2, marginBottom: 7 }]}>0</Text>
                                    <Text style={styles.textHeaderOpacity}>Vilões</Text> 
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Image source={iconsAnti} style={{ width: 26, height: 26 }} />
                                    <Text style={[styles.textHeader, { marginTop: 2, marginBottom: 7 }]}>0</Text>
                                    <Text style={[styles.textHeaderOpacity, {maxWidth: 50, textAlign: 'center'}]}>Anti- Herois</Text> 
                                </View>
                            </View>
                            
                        </View>    
                    </ImageBackground>
                    <View style={{ flex: 1, marginTop: 25, }}>
                        <View style={{ flexDirection: 'row', marginLeft: 15, marginRight: 35, justifyContent: 'space-between', marginBottom: 10 }}>
                            <Text style={{ fontSize: 18 }}>Seus Persoangens Favoritos</Text>
                            <Icons name='arrow-forward' size={20} color='#fff' style={{ backgroundColor: '#585858', paddingVertical: 2, paddingHorizontal: 10, borderRadius: 5 }} /> 
                        </View>
                        <View>
                            <FlatList 
                                data={filterFavoritos()}
                                keyExtractor={(item, index) => index.toString()}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{ alignItems: 'center', paddingTop: 5, paddingBottom: 20, paddingLeft: 15}}
                                renderItem={({ item }) => (
                                    <View style={{ backgroundColor: item.corPri, width: 80, height: 80, borderRadius: 40, alignItems: 'center', marginHorizontal: 10 }}>
                                        <Image 
                                            source={{ uri: item.thamb }}
                                            style={{ width: 100, height: 100 }}
                                        />
                                    </View>
                                )}
                            />
                        </View>
                    </View>
                </>      
            :
                <>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <StatusBar style='dark' />
                        <Image 
                            source={{ uri: usuario.imagePerfil }}
                            style={{ width: 110, height: 110, borderRadius: 110 }}
                        />
                        <TouchableOpacity onPress={() => SetUser()} style={{ backgroundColor: "#585858", padding: 10, width: 150, alignItems: 'center', borderRadius: 4, marginTop: 30, marginBottom: 10 }}>
                            <Text>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "#585858", padding: 10, width: 150, alignItems: 'center', borderRadius: 4 }}>
                            <Text>Cadastre-se</Text>
                        </TouchableOpacity>
                    </View>
                    {logando ? 
                        <View style={{ position: 'absolute', zIndex: 999, backgroundColor: 'rgba(58,58,58,0.5)', width: width, height: height+100, alignItems: 'center', justifyContent: 'center' }}>
                            <ActivityIndicator 
                                size='large'
                                color="red"
                            />
                        </View>
                    : null}
                </>
            }
            <Modal show={statusModal} close={() => setStatusModal(false)} >
                <View style={{ flex: 1 }}>
                    <Text style={{ left: 10 }}>Escolha Um Icone</Text>
                    <View style={{ borderRadius: 20, flex: 1, marginTop: 10, paddingHorizontal: 15, paddingVertical: 10 }}>
                        <FlatList 
                            data={avatares}
                            numColumns={4}
                            contentContainerStyle={{ }}
                            keyExtractor={(item,index) => index.toString()}
                            renderItem={({ item }) => (
                                <Pressable onPress={() => SetImage(item.perfil, item.fundo, item.frase)}>
                                    <Image source={{ uri: item.perfil }} style={{ width: 60, height: 60, borderRadius: 30, marginRight: 15, marginBottom: 10 }} />
                                </Pressable>
                            )}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
}