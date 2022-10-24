import React, { useState } from 'react';
import { View, Text, Dimensions, Image, Pressable, ImageBackground, ActivityIndicator, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'; 
import Icons from 'react-native-vector-icons/Ionicons';

import { stylesItensBack, styles, stylesItensNoticias2, stylesItensQuadrinhos } from './styles';
import { PropsItem, PropsItemBack, PropsItensNoticias, PropsItensPersonagensPadrao, PropsItensQuadrinhos, propsStack } from '../../services/types';
import { theme } from '../../themes';

const { width } = Dimensions.get('screen')

export function ItemPersonagens(props: PropsItem){

    return(
        <View style={{ }}>
            <Pressable onPress={props.navig} style={{ paddingTop: 100, marginBottom: 50 }} key={props.data.id}>
                {props.data.estilo === "padrão" ? 
                    <View style={[styles.itens, {backgroundColor: props.data.corPri, shadowColor: props.data.corPri}]}>
                        {props.data.logo != "" ? 
                            <>
                                <View style={{ width: '100%'}}>
                                    <Image source={{ uri: props.data.thamb }} style={styles.image} resizeMode='contain' />
                                </View>
                                <Image source={{ uri: props.data.logo }} style={styles.logo} resizeMode='contain' />
                            </>
                        :
                            <View style={{ width: 280}}>
                                <Image source={{ uri: props.data.thamb }} style={styles.image} borderRadius={50} resizeMode='contain' />
                            </View>
                        }

                        <View style={{ marginBottom: 10 }}>
                            <Text style={[ styles.text ,{ fontSize: 22, fontWeight: '700' }]}>{props.data.nomePerso}</Text>
                            <Text style={[ styles.text ,{ fontSize: 18 }]}>{props.data.nome}</Text>
                        </View>
                        <View style={{  }}>
                            <Text style={[ styles.text ,{ fontSize: 14 }]}>{props.data.desc}</Text>
                        </View>
                    </View>
                :
                    <LinearGradient colors={[props.data.corPri, props.data.corSec]} end={{ x: 0.0, y: 0.4 }} style={[styles.itens, {backgroundColor: props.data.corPri, shadowColor: props.data.corSec}]}>
                        {props.data.logo != "" ? 
                            <>
                                <View style={{ width: '100%'}}>
                                    <Image source={{ uri: props.data.thamb }} style={styles.image} resizeMode='contain' />
                                </View>
                                <Image source={{ uri: props.data.logo }} style={styles.logo} resizeMode='contain' />
                            </>
                        :
                            <View style={{ width: '100%', marginBottom: 10}}>
                                <Image source={{ uri: props.data.thamb }} borderRadius={50} style={styles.image} resizeMode='contain' />
                            </View>
                        }
                        <View style={{ marginBottom: 10 }}>
                            <Text style={[ styles.text ,{ fontSize: 22, fontWeight: '700' }]}>{props.data.nomePerso}</Text>
                            <Text style={[ styles.text ,{ fontSize: 18 }]}>{props.data.nome}</Text>
                        </View>
                        <View style={{  }}>
                            <Text style={[ styles.text ,{ fontSize: 14 }]}>{props.data.desc}</Text>
                        </View>
                    </LinearGradient>
                }
            </Pressable>
        </View>
    );
}

export function ItemPersonagensBack(props: PropsItemBack){

    const [status, setStatus] = useState(false);

    return(
        <>
            {props.vertical && 
                <>
                    {status ? 
                        <View style={stylesItensBack.styleImageBackLoading}>
                            <ActivityIndicator 
                                color='#D3D2CF'
                                size='large'
                            />
                        </View>
                    : 
                        <Pressable key={props.data.id} onPress={props.navig} style={stylesItensBack.container} >
                            <View style={[stylesItensBack.content, { shadowColor: props.data.corPri === "#000" ? "#B0AEB1" : props.data.corPri }]}>
                                <Image 
                                    onLoadEnd={() => setStatus(false)} 
                                    source={{ uri: props.data.imagens[2] }} 
                                    borderRadius={20} 
                                    style={stylesItensBack.styleImageBack} 
                                />
                                <LinearGradient colors={[ 'transparent', '#000' ]}  style={stylesItensBack.viewGradient}>
                                    <View style={{ alignItems: 'center', flexDirection: 'row', paddingRight: 20 }}>
                                        <View style={{ marginLeft: 10 }}>
                                            <Text style={stylesItensBack.textNome} >{props.data.nome}</Text>
                                            <Text style={stylesItensBack.textNomeH} >{props.data.nomePerso}</Text>
                                        </View>
                                    </View>
                                </LinearGradient>
                            </View>
                        </Pressable>
                    }
                </>
            }
        </>
    );
}

export function ItensPersonagensPadrao(props:PropsItensPersonagensPadrao) {
    return(
        <TouchableOpacity onPress={props.navig} style={styles.itenPadrao}>
            <View style={{ width: 90, height: 150, alignItems: 'center' }}>
                <Image source={{ uri: props.data.imagens[2] }} style={{ width: '100%', height: '100%' }} borderBottomLeftRadius={40} borderTopLeftRadius={40} />
            </View>
            <View style={styles.itenPadraoCard}>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: '700' }}>{props.data.nomePerso}</Text>
                    <View style={{ flexDirection: 'row', width: 190, justifyContent: 'space-between' }}>
                        <Text style={{ color: "#BEBDB9" }}>{props.data.nome}</Text>
                        <Text style={{ color: "#BEBDB9" }}>{props.data.tipoP}</Text>
                    </View>
                </View>
                <Text style={{ paddingRight: 20, fontSize: 13 }}>{props.data.desc}</Text>
            </View>
        </TouchableOpacity>
    );
}

export function ItensQuadrinhos({ data, navig }: PropsItensQuadrinhos) {

    const navigation = useNavigation<propsStack>();

    return(
        <Pressable onPress={navig} 
            style={{ marginRight: 30, backgroundColor: theme.colors.contraste, borderRadius: 20, elevation: 8, shadowColor: theme.colors.destaque, alignItems: 'center'}}
        >
            <View  style={{ borderRadius: 20, paddingHorizontal: 10, paddingVertical: 20, alignItems: 'center'}}>
                <View style={stylesItensQuadrinhos.image}>
                    <Image 
                        source={{ uri: data.capa }}
                        style={{ width: '100%', height: 225, borderRadius: 10 }}
                    />
                </View>
                <View style={{ paddingHorizontal: 10,  }}>
                    <Text style={stylesItensQuadrinhos.title}>{data.titulo}</Text>
                    <Text style={stylesItensQuadrinhos.text}>{data.data}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: theme.colors.bold, fontSize: 14 }}>R${data.preco}</Text>
                        <View style={{ flexDirection:'row', alignItems: 'center' }}>
                            <Icons name="heart" size={16} color="#C0392B" />
                            <Text style={{ marginLeft: 5, color: theme.colors.bold, }}>{data.nota}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Pressable>
    );
}

export function ItensNoticias(props: PropsItensNoticias) {
    return (
        <>
            {props.small ? 
                <Pressable onPress={() => {}} style={{ marginBottom: 10, elevation: 8}}>
                    <ImageBackground 
                        source={{ uri: props.data.thamb }} 
                        style={{ width: 340, height: 220, justifyContent: 'flex-end', overflow: 'hidden' }}
                        borderRadius={8}
                    >
                        <Text style={{ color: '#fff', backgroundColor: '#880808', padding: 5, top: 15, left: 20, borderRadius: 5, fontSize: 13, position: 'absolute' }}>Filmes</Text>
                        <LinearGradient colors={['transparent','#000']} style={{ width: 340, height: 120, justifyContent: 'flex-end', paddingBottom: 10, borderRadius: 8 }}>
                            <View style={{ width: 340, paddingHorizontal: 30, marginBottom: 10, }}>
                                <Text style={{ fontSize: 16, fontFamily: theme.title, color: '#fff'  }}>{ props.data.titulo }</Text>
                                <Text style={{ color: '#585858' }}>7 horas atrás</Text>
                            </View>
                        </LinearGradient>
                    </ImageBackground>
                </Pressable>
            :
                <Pressable onPress={() => {}} style={{ marginBottom: 10, elevation: 8}}>
                    <ImageBackground 
                        source={{ uri: props.data.thamb }} 
                        style={{ width: width, height: 300, justifyContent: 'flex-end' }}
                    >
                        <Text style={{ color: '#fff', backgroundColor: '#880808', padding: 5, top: 15, left: 20, borderRadius: 5, fontSize: 13, position: 'absolute' }}>Filmes</Text>
                        <LinearGradient colors={['transparent','#000']} style={{ width: width, height: 120, justifyContent: 'flex-end', paddingBottom: 10 }}>
                            <View style={{ width: width, paddingHorizontal: 30, marginBottom: 10, }}>
                                <Text style={{ fontSize: 18, fontFamily: theme.title, color: '#fff'  }}>{ props.data.titulo }</Text>
                                <Text style={{ color: '#585858' }}>7 horas atrás</Text>
                            </View>
                        </LinearGradient>
                    </ImageBackground>
                </Pressable>
            }
        </>
    );
}

export function ItensNoticias2(props: PropsItensNoticias) {

    const data = props.data.data;
    const DH = new Date(data);

    const definirTempoData = () => {
        const atual = new Date();
        if ((atual.getDate() - DH.getDate() === 0)) {
            const t = atual.getHours().valueOf() - DH.getHours().valueOf();
            return "Publicado a " + t.toString() + " horas";
        }else{
            if (DH.getMonth().valueOf()+1 === atual.getMonth().valueOf()+1) {
                const t = atual.getDate() - DH.getDate();
                return "Publicado a " + t.toString() + " dias";
            }
        }
        switch (DH.getMonth().valueOf()+1) {
            case 1:
                return "Publicado em " + DH.getDate() + " janeiro, " + DH.getFullYear()
            case 2:
                return "Publicado em " + DH.getDate() + " fevereiro, " + DH.getFullYear()
            case 3:
                return "Publicado em " + DH.getDate() + " março, " + DH.getFullYear()
            case 4:
                return "Publicado em " + DH.getDate() + " Aabril, " + DH.getFullYear()
            case 5:
                return "Publicado em " + DH.getDate() + " maio, " + DH.getFullYear()
            case 6:
                return "Publicado em " + DH.getDate() + " junho, " + DH.getFullYear()
            case 7:
                return "Publicado em " + DH.getDate() + " julho, " + DH.getFullYear()
            case 8:
                return "Publicado em " + DH.getDate() + " agosto, " + DH.getFullYear()
            case 9:
                return "Publicado em " + DH.getDate() + " setembro, " + DH.getFullYear()
            case 10:
                return "Publicado em " + DH.getDate() + " outubro, " + DH.getFullYear()
            case 11:
                return "Publicado em " + DH.getDate() + " novembro, " + DH.getFullYear()
            case 12:
                return "Publicado em " + DH.getDate() + " dezembro, " + DH.getFullYear()
        
            default:
                break;
        }
        
    }

    const date = definirTempoData();

    const navigation = useNavigation<propsStack>();

    return(
        <Pressable onPress={() => navigation.navigate("PageNoticia", {data: props.data})} style={stylesItensNoticias2.container}>
            <Image source={{ uri: props.data.thamb }} style={{ width: '100%', height: 200 }} borderRadius={8} />
            <View style={{ padding: 5 }}>
                <Text style={stylesItensNoticias2.titulo}>{props.data.titulo}</Text>
                <Text style={stylesItensNoticias2.data}>{date}</Text>
            </View>
        </Pressable>
    );
}