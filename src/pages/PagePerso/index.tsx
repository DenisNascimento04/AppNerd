import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, Dimensions, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, {useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, interpolate, Extrapolate, BounceInRight, FadeInLeft} from 'react-native-reanimated';
import { HeaderPage } from '../../components/Header';
import { propsStack } from '../../services/types';

import data from '../../BDTeste/banco.json';
import { styles } from './styles';
import { StatusBar } from 'expo-status-bar';
import Carousel from 'react-native-snap-carousel';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native'; 
import { ItemPersonagensBack } from '../../components/Itens';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/index';
import { setFavoritos } from '../../store';
import { HabilidadeBar } from '../../components/HabilidadeBar';

const {width} = Dimensions.get('window')

export function PagePerso(){

    const navigation = useNavigation<propsStack>();
    const usuario = useSelector((state: RootState) => state.usuario)
    const route = useRoute()
    const dispatch = useDispatch();

    const [id, setId] = useState(route.params?.id);
    const [editora, setEditora] = useState(route.params?.edit);
    
    const [historia, setHistoria] = useState(true);
    const [poderes, setPoderes] = useState(false);
    const [relacionados, setRelacionados] = useState(false);
    const [active, setActive] = useState(true);
    const [stateFavoritos, setStateFavoritos] = useState(false);

    var datetat = {
        dataset: [
            {
                values: [5, 40, 77, 81, 43]
            }
        ]
    } 

    useEffect(() => {
       setTimeout(() => {
           setActive(false)
       }, 500); 
       usuario.favoritos.forEach((item) => {
            if (item.id === id.toString() && item.editora === editora) {
                setStateFavoritos(true);
            }
        })
    },[usuario.favoritos])

    function SetUniverso(){
        if (editora === "Marvel") {
            return data.personagensMarvel
        }
        // if (editora === "DC") {
        //     return data.personagensDC
        // }
        return []
    }


    function SetRelacionados() {
        const universo = SetUniverso();
        // const personagem = Persons();
        var data:any = []

        universo.forEach((uni) => {
            personagem.forEach((perso) => {
                perso.tags.forEach((tags, indexT) => {
                    uni.tags.forEach((tagsU, indexTU) => {
                        if (indexT > 1 && indexTU > 1 && uni.id != id) {
                            if (tags === tagsU) {
                                data.push({...uni})
                                // console.log(uni.nomeHeroi)
                            }
                        }
                    })
                })
            })
        })
        return data;

    }

    const universo = SetUniverso();
    const personagem = universo.filter((item) => item.id === id)
    const RelacionadoSetados = SetRelacionados();
    console.log(id)

    const scrollY = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y;
    });


    const headerStyle = useAnimatedStyle(() => {
        return {
            height: interpolate(
                scrollY.value,
                [0, 350],
                [440, 90],
                Extrapolate.CLAMP,
            ),
        };
    });

    const thambStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                scrollY.value,
                [0, 250],
                [1, 0],
                Extrapolate.CLAMP,
            ),
        };
    });
    const logoStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                scrollY.value,
                [100, 250],
                [1, 0],
                Extrapolate.CLAMP,
            ),
        };
    });

    return(
        <SafeAreaView style={{ backgroundColor: 'transparent' }} >
            {personagem?.map((item) => (
                <View key={item.id}>
                    <Animated.ScrollView 
                        entering={FadeInLeft.duration(900)}
                        onScroll={scrollHandler}
                        scrollEventThrottle={16}
                        contentContainerStyle={{  }}
                    >
                        <View style={[{backgroundColor: 'transparent', paddingTop: 420}]}>
                            <View style={{ backgroundColor: '#fff', paddingTop: 20, paddingBottom :50 }}>
                                <View style={{ paddingHorizontal: 30 }}>
                                    <Text style={ styles.titles }>Sinopse</Text>
                                    {item.sinopse?.map((item: any, index: number) => (
                                        <Text key={index} style={{ marginBottom: 10, lineHeight: 22, textAlign: 'justify', fontSize: 14 }}>{item}</Text>
                                    ))}
                                </View>
                                <View>
                                    <Text style={[styles.titles ,{marginLeft: 30} ]}>Imagens</Text>
                                    <Carousel 
                                        data={item.imagens}
                                        layout={'default'}
                                        sliderWidth={width}
                                        firstItem={2}
                                        itemWidth={300}
                                        renderItem={({ item }) => (
                                            <View>
                                                <Image source={{ uri: item }} style={{ width: 300, height: 200 }} />
                                            </View>
                                        )}
                                    />
                                </View>
                                
                                <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 20 }} >
                                    <TouchableOpacity style={{ borderBottomColor: historia ? item.corPri : "#fff" , borderBottomWidth: historia ? 1 : 0, marginRight: 10 }} onPress={() => {setHistoria(true), setPoderes(false), setRelacionados(false)}}>
                                        <Text style={ styles.titles }>História</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{ borderBottomColor: poderes ? item.corPri : "#fff", borderBottomWidth: poderes ? 1 : 0, marginRight: 10 }} onPress={() => {setHistoria(false), setPoderes(true), setRelacionados(false)}}>
                                        <Text style={ styles.titles }>Poderes</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{ borderBottomColor: relacionados ? item.corPri : "#fff", borderBottomWidth: relacionados ? 1 : 0 }} onPress={() => {setHistoria(false), setPoderes(false), setRelacionados(true)}}>
                                        <Text style={ styles.titles }>Relacionados</Text>
                                    </TouchableOpacity>
                                </View>

                                {historia ? 
                                    <View style={{ paddingHorizontal: 30, paddingTop: 20 }}>
                                        {item.historia?.map((item, index) => (
                                            <View key={index}>
                                                <Text style={{ marginBottom: 10, textAlign: 'justify', fontSize: 18, fontWeight: '700' }}>{item.title}</Text>
                                                {item.text?.map((item, index) => (
                                                    <Text key={index} style={{ marginBottom: 10, lineHeight: 22, textAlign: 'justify', fontSize: 14 }}>{item}</Text>
                                                ))}
                                            </View>
                                        ))}
                                    </View>
                                : null}

                                {poderes ? 
                                    <View style={{ paddingHorizontal: 30, paddingTop: 20 }}>
                                        {item.poderes?.map((item,index) => (
                                            <Text key={index} style={{ fontSize: 14, lineHeight: 22 }} >- {item}</Text>
                                        ))}
                                    </View>
                                : null}

                                {relacionados ?
                                    <View>
                                        <HabilidadeBar 
                                            hab={item.habilidades}
                                            color={item.corPri}
                                        />
                                    </View>
                                : null}
                            </View>
                        </View>
                    </Animated.ScrollView>
                    {/* {item.serie === 'Fables' &&
                        <Animated.View entering={BounceInRight.duration(700)} style={[headerStyle, styles.header, { width: width }]}>
                            <StatusBar style='light' backgroundColor={item.corPri} />
                            <LinearGradient colors={[item.corPri, item.corSec]} style={[styles.header]}>
                                <HeaderPage titulo={item.nome} />
                                <View style={{ width: '100%', alignItems: 'center'}}>
                                    <Animated.Image source={{ uri: item.thamb }} style={[thambStyle, { height: 200, width: 350, marginTop: 30, borderRadius: 20}]} /> 
                                </View>
                                <View style={styles.dadosHeader}>
                                    <View style={{ alignItems: 'center', width: 100}}>
                                        <Text style={styles.titledDados}>Outro Nome:</Text>
                                        <Text style={styles.textDados}>{item.nomeFic}</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', width: 100}}>
                                        <Text style={styles.titledDados}>Altura:</Text>
                                        <Text style={[styles.textDados, { textAlign: 'center' }]}>{item.altura}</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', width: 150 }}>
                                        <Text style={styles.titledDados}>Primeira Aparição:</Text>
                                        <Text style={[styles.textDados, { paddingLeft: 10 }]}>{item.PA}</Text>
                                    </View>
                                </View>
                            </LinearGradient>
                        </Animated.View>
                    }  */}
                    {item.estilo === 'misto' && 
                        <Animated.View entering={BounceInRight.duration(700)} style={[headerStyle, styles.header, { width: width }]}>
                            <StatusBar style='light' backgroundColor={item.corPri} />
                            <LinearGradient colors={[item.corPri, item.corSec]} style={[styles.header]}>
                                <HeaderPage stateFavorito={stateFavoritos} id={item.id.toString()} editora={item.editora} titulo={item.nomeHeroi} />
                                <View style={{ width: '100%', alignItems: 'center'}}>
                                {active ? 
                                    <ActivityIndicator 
                                        size={60}
                                        color='#9E9D9A'
                                        style={{ height: 220 }}
                                    />
                                :
                                    <>
                                        <Animated.Image  
                                            source={{ uri: item.thamb }} style={[styles.image, thambStyle, { zIndex: 2 }]} 
                                        /> 
                                        <Animated.Image  
                                            source={{ uri: item.logo }} style={[logoStyle, { position: 'absolute', width: 250, height: 250, zIndex: 1 }]} 
                                        /> 
                                    </>
                                }
                                </View>
                                <View style={styles.dadosHeader}>
                                    <View style={{ alignItems: 'center', width: 100}}>
                                        <Text style={styles.titledDados}>Nome:</Text>
                                        <Text style={styles.textDados}>{item.nome}</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', width: 100}}>
                                        <Text style={styles.titledDados}>Altura:</Text>
                                        <Text style={[styles.textDados, { textAlign: 'center' }]}>{item.altura}</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', width: 150 }}>
                                        <Text style={styles.titledDados}>Primeira Aparição:</Text>
                                        <Text style={[styles.textDados, { paddingLeft: 10 }]}>{item.PA}</Text>
                                    </View>
                                </View>
                            </LinearGradient>
                        </Animated.View>
                    }
                    {item.estilo === 'padrão' &&
                        <Animated.View entering={BounceInRight.duration(700)} style={[styles.header, headerStyle, { backgroundColor: item.corPri, width: width }]}>
                            <StatusBar style='light' backgroundColor={item.corPri} />
                            <HeaderPage stateFavorito={stateFavoritos} id={item.id.toString()} editora={item.editora} titulo={item.nomeHeroi} />
                            <View style={{ width: '100%', alignItems: 'center'}}>
                                {active ? 
                                    <ActivityIndicator 
                                        size={60}
                                        color='#9E9D9A'
                                        style={{ height: 220 }}
                                    />
                                :
                                    <>
                                        <Animated.Image 
                                            source={{ uri: item.thamb }} style={[styles.image, thambStyle]} 
                                        /> 
                                        <Animated.Image  
                                            source={{ uri: item.logo }} style={[logoStyle, { position: 'absolute', width: 270, height: 270, zIndex: -1 }]} 
                                        /> 
                                    </>
                                }
                            </View>
                            <View style={styles.dadosHeader}>
                                <View style={{ alignItems: 'center', width: 100}}>
                                    <Text style={styles.titledDados}>Nome:</Text>
                                    <Text style={styles.textDados}>{item.nome}</Text>
                                </View>
                                <View style={{ alignItems: 'center', width: 100}}>
                                    <Text style={styles.titledDados}>Altura:</Text>
                                    <Text style={styles.textDados}>{item.altura}</Text>
                                </View>
                                <View style={{ alignItems: 'center', width: 150 }}>
                                    <Text style={styles.titledDados}>Primeira Aparição:</Text>
                                    <Text style={[styles.textDados, { paddingLeft: 10 }]}>{item.PA}</Text>
                                </View>
                            </View>
                        </Animated.View>
                    }
                </View>
            ))}
        </SafeAreaView>
    );
}