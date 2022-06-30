import React, { useState } from 'react';
import { View, Text, Dimensions, Image, Pressable, ImageBackground, ActivityIndicator, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'; 
import Icons from 'react-native-vector-icons/Ionicons';

import { stylesItensBack, styles } from './styles';
import { PropsNoticias, PropsPerso, propsStack } from '../../services/types';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../themes';

const { width } = Dimensions.get('screen')

type PropsItem = {
    data: PropsPerso
    navig: () => void,
    estilo: string
}

type PropsItemBack = {
    data: PropsPerso
    navig: () => void, 
    small?: any, 
    vertical?: any, 
    horizontal?: any
}

type PropsItensPersonagensPadrao = {
    data: PropsPerso,
    navig: () => void
}

type PropsItensNoticias = {
    index: number
    data: PropsNoticias
}

type PropsItensQuadrinhos = {
    data: {
        id: number,
        editora: string,
        titulo: string,
        nota: number,
        data: string,
        capa: string,
        equipe: {
            image: string;
            text: string;
        }[],
        personDestaque: string,
        sinopse: string[]
    }
}

export function ItemPersonagens(props: PropsItem){

    return(
        <View style={{ }}>
            {/* {props.serie === 'Fables' && 
                <Pressable onPress={props.navig} style={{ paddingTop: 200, marginBottom: 50 }} key={props.id}>
                <LinearGradient colors={['#290612', '#3f0259']} style={[styles.itens, {backgroundColor: props.corPri}]}>
                    <View style={{ width: '100%'}}>
                        <Image source={{ uri: props.thamb}} style={{ borderRadius: 20, width: 250, height: 150, position: 'absolute', left: -20, top: -150 }} />
                    </View>

                    <View style={{ marginBottom: 15, marginTop: 10 }}>
                        <Text style={[ styles.text ,{ fontSize: 22, fontWeight: '700' }]}>{props.nome}</Text>
                    </View>
                    <View style={{  }}>
                        <Text style={[ styles.text ,{ fontSize: 14 }]}>{props.desc}</Text>
                    </View>
                </LinearGradient>
            </Pressable>
            } */}
            {props.estilo === 'padrão' && 
                <Pressable onPress={props.navig} style={{ paddingTop: 100, marginBottom: 50 }} key={props.data.id}>
                    <View style={[styles.itens, {backgroundColor: props.data.corPri, shadowColor: props.data.corPri}]}>
                        <View style={{ width: '100%'}}>
                            <Image source={{ uri: props.data.thamb }} style={styles.image} />
                        </View>

                        <Image source={{ uri: props.data.logo }} style={styles.logo} />
                        <View style={{ marginBottom: 30 }}>
                            <Text style={[ styles.text ,{ fontSize: 22, fontWeight: '700' }]}>{props.data.nomeHeroi}</Text>
                            <Text style={[ styles.text ,{ fontSize: 18 }]}>{props.data.nome}</Text>
                        </View>
                        <View style={{  }}>
                            <Text style={[ styles.text ,{ fontSize: 14 }]}>{props.data.desc}</Text>
                        </View>
                    </View>
                </Pressable>
            }
            {props.estilo === 'misto' && 
                <Pressable onPress={props.navig} style={{ paddingTop: 100, marginBottom: 50 }} key={props.data.id}>
                    <LinearGradient colors={[props.data.corPri, props.data.corSec]} end={{ x: 0.0, y: 0.4 }} style={[styles.itens, {backgroundColor: props.data.corPri, shadowColor: props.data.corSec}]}>
                        <View style={{ width: '100%'}}>
                            <Image source={{ uri: props.data.thamb }} style={styles.image} />
                        </View>

                        <Image source={{ uri: props.data.logo }} style={styles.logo} />
                        <View style={{ marginBottom: 30 }}>
                            <Text style={[ styles.text ,{ fontSize: 22, fontWeight: '700' }]}>{props.data.nomeHeroi}</Text>
                            <Text style={[ styles.text ,{ fontSize: 18 }]}>{props.data.nome}</Text>
                        </View>
                        <View style={{  }}>
                            <Text style={[ styles.text ,{ fontSize: 14 }]}>{props.data.desc}</Text>
                        </View>
                    </LinearGradient>
                </Pressable>
            }
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
                                            <Text style={stylesItensBack.textNomeH} >{props.data.nomeHeroi}</Text>
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

// export function ItensPersonagensPesquisa(props:PropsItensPersonagensPadrao) {
//     return(
//         <View style={styles.itenPesquisa}>
//             <View style={{ width: 180, height: 250, alignItems: 'center' }}>
//                 <Image source={{ uri: props.data.imagens[2] }} style={{ width: '100%', height: '100%' }} borderBottomLeftRadius={40} borderTopLeftRadius={40} />
//             </View>
//             <View style={styles.itenPesquisaCard}>
//                 <View>
//                     <Text style={{ fontSize: 20, fontWeight: '700' }}>{props.data.nomeHeroi}</Text>
//                     <Text>{props.data.nome}</Text>
//                 </View>
//                 <Text style={{ width: 150 }}>
//                     Um personagem fictício que aparece nos quadrinhos americanos publicados pela {props.data.editora} ...
//                 </Text>
//                 <RectButton style={{ backgroundColor: '#585858', borderRadius: 20, paddingVertical: 8, alignItems: 'center', marginRight: 10 }}>
//                     <Text style={{ color: '#fff' }}>Mais Infomações</Text>
//                 </RectButton>
//             </View>
//         </View>
//     );
// }

export function ItensPersonagensPadrao(props:PropsItensPersonagensPadrao) {
    return(
        <RectButton onPress={props.navig} style={styles.itenPadrao}>
            <View style={{ width: 90, height: 150, alignItems: 'center' }}>
                <Image source={{ uri: props.data.imagens[2] }} style={{ width: '100%', height: '100%' }} borderBottomLeftRadius={40} borderTopLeftRadius={40} />
            </View>
            <View style={styles.itenPadraoCard}>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: '700' }}>{props.data.nomeHeroi}</Text>
                    <View style={{ flexDirection: 'row', width: 190, justifyContent: 'space-between' }}>
                        <Text style={{ color: "#BEBDB9" }}>{props.data.nome}</Text>
                        <Text style={{ color: "#BEBDB9" }}>{props.data.tipoP}</Text>
                    </View>
                </View>
                <Text style={{ paddingRight: 20, fontSize: 13 }}>{props.data.desc}</Text>
            </View>
        </RectButton>
    );
}

export function ItensQuadrinhos({ data }: PropsItensQuadrinhos) {

    const navigation = useNavigation<propsStack>();

    return(
        <RectButton onPress={() => navigation.navigate("PageQuadrinhos", {data: data})} style={{ width: 150, marginRight: 30}}>
            <View style={styles.ItensQuadrinhostImage}>
                <Image 
                    source={{ uri: data.capa }}
                    style={{ width: '100%', height: 225, borderRadius: 20 }}
                />
            </View>
            <View style={{ paddingLeft: 5 }}>
                <Text style={styles.ItensQuadrinhostTitle}>{data.titulo}</Text>
                <Text style={styles.ItensQuadrinhostText}>{data.data}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection:'row', alignItems: 'center' }}>
                        <Icons name="flash" size={15} color="#F1D60F" />
                        <Text style={{ marginLeft: 5, color: "#000" }}>{data.nota}</Text>
                    </View>
                    <Image 
                        source={{ 
                            uri: data.editora === "Marvel" ?  'https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-1-1.png': 
                            data.editora === "DC" ?  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1024px-DC_Comics_logo.svg.png': ""
                        }} 
                        style={{ 
                            width: data.editora === "Marvel" ? 40 : data.editora === "DC" ? 30 : 0, 
                            height: data.editora === "Marvel" ? 20 : data.editora === "DC" ? 30 : 0
                        }}
                        resizeMode='stretch'
                    />
                </View>
            </View>
        </RectButton>
    );
}

export function ItensNoticias(props: PropsItensNoticias) {
    return (
        <Pressable onPress={() => {}} style={{ marginBottom: 10, elevation: 8}}>
            <ImageBackground 
                source={{ uri: props.data.thamb }} 
                style={{ width: width, height: 300, justifyContent: 'flex-end' }}
            >
                <Text style={{ color: '#fff', backgroundColor: '#880808', padding: 5, top: 15, left: 20, borderRadius: 5, fontSize: 13, position: 'absolute' }}>Filmes</Text>
                <LinearGradient colors={['transparent','#000']} style={{ width: width, height: 120, justifyContent: 'flex-end', paddingBottom: 10 }}>
                    <View style={{ width: width, paddingHorizontal: 30, marginBottom: 10, }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Oswald_700Bold', color: '#fff'  }}>{ props.data.titulo }</Text>
                        <Text style={{ color: '#585858' }}>7 horas atrás</Text>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </Pressable>
    );
}