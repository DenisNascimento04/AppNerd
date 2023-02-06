import React, { useState } from 'react';
import { View, Text, Dimensions, Image, Pressable, ImageBackground, ActivityIndicator, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'; 
import Icons from 'react-native-vector-icons/Ionicons';

import { stylesItensBack, styles, stylesItensQuadrinhos } from './styles';
import { PropsItem, PropsItemBack, PropsItensPersonagensPadrao, PropsItensQuadrinhos, propsStack } from '../../services/types';
import { theme } from '../../themes';

const { width } = Dimensions.get('screen')

export function ItemPersonagens(props: PropsItem){

    return(
        <View style={{ }}>
            <Pressable onPress={props.navig} style={{ paddingTop: 80, marginBottom: 14 }} key={props.data.id}>
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
                                    source={{ uri: props.data.imagens[0] }} 
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