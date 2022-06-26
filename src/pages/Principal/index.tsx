import React, { useRef, useState } from 'react';
import { View, Text, ImageBackground, Dimensions, FlatList, Pressable, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Modalize } from 'react-native-modalize';
import Carousel from 'react-native-snap-carousel';
import Icons from 'react-native-vector-icons/Ionicons';
// @ts-ignore
import Vector from '../../assets/vector1.png' 

import data from '../../BDTeste/banco.json';

import { styles } from './styles';
import { CompPesquisa } from '../../components/CompPesquisa';
import {  ItemPersonagensBack, ItensNoticias } from '../../components/Itens';
import {  PropsPerso, propsStack } from '../../services/types';
import { PageBase } from '../../components/PageBase';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/index';
import { Flexbox121 } from '../../components/FlexboxN';


const { width, height } = Dimensions.get('window');

export function Principal(){

    const navigationStack = useNavigation<propsStack>()
    const usuario = useSelector((state: RootState) => state.usuario)
    const modalTeste = useRef<Modalize>(null); 
    const [dataItem, setDataItem] = useState<PropsPerso>(); 
    const category = [
        {
            icon: 'newspaper',
            text: 'NOTICIAS',
            color: ['#BDB6B6', "#878484"]
        },
        {
            icon: 'flame',
            text: 'DESTAQUES',
            color: ['#F79023', "#E66A1F"]
        },
        {
            icon: 'planet',
            text: 'EXPLORAR',
            color: ['#011C40', "#020659"]
        },
        {
            icon: 'skull',
            text: 'VILÕES',
            color: ['#B224EF', "#7579FF"]
        },
        {
            icon: 'game-controller',
            text: 'JOGOS',
            color: ['#0D4373', "#1462A6"]
        }
    ]

    const dataHerois: any = [];
    const dataNoticias1: any = [];

    data.personagensMarvel.map((item) => {
        if (item.tipoP === "Heroi" ) {
            dataHerois.push({ ...item })
        }
    })

    const dataViloes: any = []

    data.personagensMarvel.map((item) => {
        if (item.tipoP === "Vilão" ) {
            dataViloes.push({ ...item })
        }
    })
    const dataAnti: any = []

    data.personagensMarvel.map((item) => {
        if (item.tipoP === "Anti-Heroi" ) {
            dataAnti.push({ ...item })
        }
    })

    data.notiicias.map((item) => {
        dataNoticias1.push({ ...item });
    })

    function OpenModal(data: PropsPerso) {
        modalTeste.current?.open()
        setDataItem(data)
    }
    console.log(dataNoticias1)


    return(
        <PageBase backgroudColor="#353935" dataModal={dataItem} modalProps={modalTeste} frase={usuario.frase} image={usuario.imagePerfil} title='Mundo Nerd'>
            <View style={{ zIndex: 0, flex: 1 }}>

                <View style={{ width: width, height: 250, marginBottom: 30, marginTop: 10 }}>
                    <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#FFF', fontSize: 20, textAlign: 'center', marginHorizontal: 20, marginBottom: 10 }} >
                            Explore o Mundo das Revistas em Quadrinhos 
                        </Text>
                        <Text style={{ color: '#FFF', fontSize: 18, textAlign: 'center', marginHorizontal: 20 }} >
                            Muitas historias, guerras, tragédias, reviravoltas mas acima de tudo, muita aventura 
                        </Text>
                        <Pressable onPress={() => navigationStack.navigate('Explorar')} style={{ backgroundColor: "#fff", paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15, borderRadius: 50, elevation: 20, shadowColor: "#fff" }}>
                            <Text style={{ fontSize: 16, marginVertical: 5 }}>
                                Explore
                            </Text>
                            <Icons name='arrow-forward' color="#000" style={{ marginHorizontal: 4 }} size={18} />
                            <Icons name='planet' color="#000" size={18} />
                        </Pressable>
                    </View>
                    <Image 
                        source={{ uri: "https://thenexus.one/storage/2022/05/Injustice-3-Marvel-vs-DC-Characters-Fighting-Game.jpg" }} 
                        style={{ zIndex: -1, position: 'absolute', width: '100%', height: '100%' }} 
                    />
                </View>

                {/* <LinearGradient colors={["#03eaff","#6d4fe7"]} style={{ width: 50, height: 50, marginLeft: 40 }} /> */}

                <CompPesquisa />
                
                <View style={{ marginVertical: 10 }} >
                    <View style={styles.flatList}>
                        <Text style={styles.title}>Categorias</Text>
                    </View>
                    <FlatList 
                        data={category}
                        horizontal
                        contentContainerStyle={{ paddingLeft: 20, marginBottom: 10 }}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item,index) => index.toString()}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', padding: 10, marginRight: 10 }}>
                                <LinearGradient colors={item.color} style={{ padding: 10, borderRadius: 30 }}>
                                    <Icons name={ item.icon } size={22} color='#fff' />
                                </LinearGradient>
                                <Text style={{ marginTop: 5, fontSize: 12, color: item.color[1] }}>{ item.text }</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <View style={{ backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30, flex: 1, paddingTop: 30 }}>
                    <Carousel
                        layout={'default'}
                        data={data.notiicias}
                        firstItem={0}
                        sliderWidth={width}
                        itemWidth={width}
                        renderItem={({ item, index }) => {
                            return(
                                <ItensNoticias 
                                    index={index}
                                    data={item}
                                />
                            );
                        }}
                    />

                    <Flexbox121 
                        data={dataNoticias1}
                    />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#880808', alignItems: 'center', marginHorizontal: 30, marginVertical: 20, elevation: 10, shadowColor: "#fff", borderWidth: 1, borderColor: "#585858", borderRadius: 20, }}>
                        <Image 
                            source={{ uri: 'https://referencianerd.com/wp-content/uploads/2020/02/resizer.png' }} 
                            style={{ width: 110, height: 120 }}
                            borderRadius={20}
                        />
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ marginHorizontal: 20, marginBottom: 10 }}>
                                <Text style={{ fontSize: 18, maxWidth: 250, fontFamily: 'Oswald_700Bold', color: '#fff' }}>SuperBoy Prime no cinema ?</Text>
                                <Text style={{ maxWidth: 230, marginTop: 5, color: '#fff' }}>
                                    Prime pode parecer futuramente nos cinemas, mas será menos poderoso.
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#880808', alignItems: 'center', marginHorizontal: 30, marginVertical: 20, elevation: 7, shadowColor: "#fff", borderWidth: 1, borderColor: "#585858", borderRadius: 20,  }}>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ marginHorizontal: 20, marginBottom: 10 }}>
                                <Text style={{ fontSize: 18, maxWidth: 250, fontFamily: 'Oswald_700Bold', color: '#fff' }}>Falcão é o novo Capitão !</Text>
                                <Text style={{ maxWidth: 230, marginTop: 5, color: '#fff' }}>
                                    Após a série falcão assume o manto e o escudo fazendo por merecer.
                                </Text>
                            </View>
                        </View>
                        <Image 
                            source={{ uri: 'https://images.universohq.com/2014/07/captainamericasamwilson_destaque.jpg' }} 
                            style={{ width: 110, height: 120 }}
                            borderRadius={20}
                        />
                    </View>
                    <Pressable style={{ marginBottom: 50, marginTop: 30 }}>
                        <View style={{ width: width, height: 200, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ backgroundColor: '#fff', width: "90%", height: "100%", borderTopLeftRadius: 40, elevation: 3 }}>
                                <Image 
                                    source={{ uri: 'https://cabanadoleitor.com.br/wp-content/uploads/2022/02/Illuminati-originais.webp' }} 
                                    style={{ width: '100%', height: '100%' }}
                                    borderTopLeftRadius={40}
                                    borderBottomRightRadius={40} 
                                />
                            </View>
                            <View style={{ position: 'absolute', top: 139, left: 0, flexDirection: 'row', elevation: 4 }}>
                                <View style={{ backgroundColor: '#fff', left: 20, paddingBottom: 0, paddingTop: 10, paddingLeft: 20 }}>
                                    <Text style={{ fontSize: 24 }}>Os Iluminates</Text>
                                </View>
                                <Image 
                                    source={Vector} 
                                    resizeMode='contain'
                                    style={{ width: 88, height: "auto", left: 8, top: 0 }} 
                                />
                            </View>
                            <View style={{ backgroundColor: '#fff', width: "90%", borderBottomRightRadius: 20, borderBottomLeftRadius: 20, elevation: 3 }}>
                                <Text style={{ paddingHorizontal: 10, paddingVertical: 10 }}>Grupo formado pelos super-herois mais influentes do mundo</Text>
                            </View>
                        </View>
                    </Pressable>
                    <Pressable style={{ marginBottom: 50, marginTop: 30 }}>
                        <View style={{ width: width, height: 200, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ backgroundColor: '#fff', width: "90%", height: "100%", borderTopLeftRadius: 40, elevation: 3 }}>
                                <Image 
                                    source={{ uri: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/07/avengers-vingadores-hqs.jpg' }} 
                                    style={{ width: '100%', height: '100%' }}
                                    borderTopLeftRadius={40}
                                    borderBottomRightRadius={40} 
                                />
                            </View>
                            <View style={{ position: 'absolute', top: 139, left: 0, flexDirection: 'row', elevation: 4 }}>
                                <View style={{ backgroundColor: '#fff', left: 20, paddingBottom: 0, paddingTop: 10, paddingLeft: 20 }}>
                                    <Text style={{ fontSize: 24 }}>Os Vingadores</Text>
                                </View>
                                <Image 
                                    source={Vector} 
                                    resizeMode='contain'
                                    style={{ width: 88, height: "auto", left: 8, top: 0 }} 
                                />
                            </View>
                            <View style={{ backgroundColor: '#fff', width: "90%", borderBottomRightRadius: 20, borderBottomLeftRadius: 20, elevation: 3 }}>
                                <Text style={{ paddingHorizontal: 10, paddingVertical: 10 }}>São o grupo dos maiores super-heroís da terra.</Text>
                            </View>
                        </View>
                    </Pressable>
                </View>
            </View>
        </PageBase>
    );
}