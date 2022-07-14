import React, { useEffect, useRef, useState } from 'react';
import { View, Text, ImageBackground, Dimensions, FlatList, Pressable, TouchableOpacity, ScrollView, ActivityIndicator, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import { Modalize } from 'react-native-modalize';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icons from 'react-native-vector-icons/Ionicons';

import data from '../../BDTeste/banco.json';
// @ts-ignore
import Vector from '../../assets/vector1.png'

import { styles } from './styles';
import {  ItemPersonagens, ItemPersonagensBack, ItensQuadrinhos } from '../../components/Itens';
import {  propsDrawer, PropsPerso, propsStack } from '../../services/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/index';
import { ModalPerso } from '../../components/ModalPerso';
import { BAntiHerois, BHerois, BViloes } from '../../mente';
import { StatusBar } from 'expo-status-bar';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { PageBase } from '../../components/PageBase';


const { width, height } = Dimensions.get('window');

export function Explorar(){

    const navigationStack = useNavigation<propsStack>()
    const navigationDrawer = useNavigation<propsDrawer>()
    const usuario = useSelector((state: RootState) => state.usuario)
    const modalTeste = useRef<Modalize>(null); 
    const [dataItem, setDataItem] = useState<PropsPerso>(); 
    const [activy, setActivy] = useState(true); 
    const [activeIndex, setActiveIndex] = useState(2);
    const [dataHerois, setDataHerois] = useState([]);
    const [dataViloes, setDataViloes] = useState([]);
    const [dataAnti, setDataAnti] = useState([]);
    const [imageIndex, setImageIndex] = useState(2); 

    useEffect(() => {
        setandoData();
    },[])

    function setandoData() {
        setDataHerois(BHerois()),
        setDataViloes(BViloes()),
        setDataAnti(BAntiHerois()),
        setActivy(false)
    }

    function OpenModal(data: PropsPerso) {
        modalTeste.current?.open()
        setDataItem(data)
    }
    // console.log(imageBack)


    return(
        <>
            <View style={{ flex: 1, backgroundColor: "#353935"}}>
                {activy ? 
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <ActivityIndicator color='red' size='large' />
                    </View>
                :
                    <ScrollView contentContainerStyle={{ }} scrollEventThrottle={16}>
                        <StatusBar style='light' backgroundColor='rgba(0,0,0,.4)' />
                        <View style={{ width: width, height: "auto" }}>
                            {/* <Image source={{ uri: dataHerois[imageIndex].wallpaper }} style={{ width: "100%", height: "100%", position: 'absolute' }} /> */}
                            <View style={{ width: width, height: "auto", backgroundColor: 'rgba(0,0,0,.4)', paddingTop: 50 }}>
                                <View style={styles.header}>
                                    <Pressable onPress={() => navigationDrawer.openDrawer()}>
                                        <Icons name='menu-outline' size={30} color='#fff' />
                                    </Pressable>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={styles.titleHeader}>Explorar</Text>
                                    </View>
                                    <View style={{ width: 20, height: 20 }}></View>
                                </View>
                                <Carousel
                                    layout={'default'}
                                    data={dataHerois.slice(0,5)}
                                    firstItem={2}
                                    inactiveSlideOpacity={0.9}
                                    sliderWidth={width}
                                    itemWidth={300}
                                    onSnapToItem={(index) => {
                                        setImageIndex(index)
                                        setActiveIndex(index)
                                    }}
                                    renderItem={({ item }) => {
                                        return(
                                            <ItemPersonagens 
                                                // @ts-ignore 
                                                data={item}
                                                // @ts-ignore 
                                                estilo={item.estilo}
                                                // @ts-ignore 
                                                navig={() => OpenModal(item)}
                                            />
                                        );
                                    }}
                                />
                                <Pagination 
                                    dotsLength={dataHerois.slice(0,5).length}
                                    activeDotIndex={activeIndex}
                                    containerStyle={{ position: 'absolute', top: 530 }}
                                    dotStyle={{
                                        width: 20,
                                        height: 10,
                                        borderRadius: 5,
                                        marginHorizontal: 2,
                                        backgroundColor: '#880808'
                                    }}

                                    inactiveDotStyle={{
                                        width: 10,
                                        height: 10,
                                        borderRadius: 5,
                                        backgroundColor: "#fff"
                                    }}
                                    inactiveDotOpacity={0.5}
                                    inactiveDotScale={0.6}
                                    animatedFriction={2}
                                    animatedTension={300}
                                />
                            </View>
                        </View>

                        <View style={{ backgroundColor: '#fff', marginTop: 0, borderTopLeftRadius: 20, borderTopRightRadius: 20, flex: 1, paddingTop: 30 }}>

                            <View style={{ marginBottom: 10}} >
                                <View style={styles.flatList}>
                                    <Text style={styles.title}>Quadrinhos</Text>
                                    <Pressable onPress={() => navigationStack.navigate("PageVerTudo", { text: "Heroi" })}>
                                        <Text style={styles.buttonTudo}>Ver Tudo</Text>
                                    </Pressable>
                                </View>
                                <FlatList 
                                    data={data.quadrinhos} 
                                    keyExtractor={(item,index) => index.toString()}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={{ paddingLeft: 20, paddingBottom: 10}}
                                    renderItem={(item) => (
                                        <ItensQuadrinhos 
                                            data={item.item}
                                        />
                                    )}
                                />
                            </View>
                            {/* <View style={{ marginBottom: 10}} >
                                <View style={styles.flatList}>
                                    <Text style={styles.title}>Heroís</Text>
                                    <Pressable onPress={() => navigationStack.navigate("PageVerTudo", { text: "Heroi" })}>
                                        <Text style={styles.buttonTudo}>Ver Tudo</Text>
                                    </Pressable>
                                </View>
                                <FlatList 
                                    data={dataHerois.slice(0,5)} 
                                    keyExtractor={(item,index) => index.toString()}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={{ paddingLeft: 20, paddingBottom: 30}}
                                    renderItem={({ item }) => (
                                        <ItemPersonagensBack 
                                            data={item}
                                            vertical
                                            navig={() => OpenModal(item)} 
                                        />
                                    )}
                                />
                            </View> */}
                            <View style={{ marginBottom: 10}} >
                                <View style={styles.flatList}>
                                    <Text style={styles.title}>Vilões</Text>
                                    <Pressable onPress={() => navigationStack.navigate("PageVerTudo", { text: "Vilão" })}>
                                        <Text style={styles.buttonTudo}>Ver Tudo</Text>
                                    </Pressable>
                                </View>
                                <FlatList 
                                    data={dataViloes} 
                                    keyExtractor={(item,index) => index.toString()}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={{ paddingLeft: 20, paddingBottom: 30}}
                                    renderItem={({ item }) => (
                                        <ItemPersonagensBack 
                                            data={item}
                                            vertical
                                            navig={() => OpenModal(item)} 
                                        />
                                    )}
                                />
                            </View>
                            <View style={{ marginBottom: 10}} >
                                <View style={styles.flatList}>
                                    <Text style={styles.title}>Anti-Heroís</Text>
                                    <Pressable onPress={() => navigationStack.navigate("PageVerTudo", { text: "Anti-Heroi" })}>
                                        <Text style={styles.buttonTudo}>Ver Tudo</Text>
                                    </Pressable>
                                </View>
                                <FlatList 
                                    data={dataAnti} 
                                    keyExtractor={(item,index) => index.toString()}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={{ paddingLeft: 20, paddingBottom: 30}}
                                    renderItem={({ item }) => (
                                        <ItemPersonagensBack 
                                            data={item}
                                            vertical
                                            navig={() => OpenModal(item)} 
                                        />
                                    )}
                                />
                            </View>

                            {/* <Pressable style={{ marginBottom: 50, marginTop: 30 }}>
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
                                            <Text style={{ fontSize: 24 }}>Os Iluminati</Text>
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
                            </Pressable> */}
                        </View>

                    </ScrollView>
                }
            </View>
            <Modalize
                ref={modalTeste}
                modalHeight={height}
                useNativeDriver={true}
                disableScrollIfPossible={false}
                scrollViewProps={{
                    scrollEnabled: undefined,
                    showsVerticalScrollIndicator: false,
                }}
                handlePosition='inside'
            >
                <ModalPerso
                    // @ts-ignore
                    data={dataItem}
                    close={() => {}}
                />
            </Modalize>
        </>
    );
}