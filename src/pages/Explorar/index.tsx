import React, { useEffect, useRef, useState } from 'react';
import { View, Text, ImageBackground, Dimensions, FlatList, Pressable, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Modalize } from 'react-native-modalize';
import Carousel from 'react-native-snap-carousel';
import Icons from 'react-native-vector-icons/Ionicons';

import data from '../../BDTeste/banco.json';

import { styles } from './styles';
import {  ItemPersonagens, ItemPersonagensBack, ItensQuadrinhos } from '../../components/Itens';
import {  PropsPerso, propsStack } from '../../services/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/index';
import { ModalPerso } from '../../components/ModalPerso';
import { BAntiHerois, BHerois, BViloes } from '../../mente';
import { StatusBar } from 'expo-status-bar';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';


const { width, height } = Dimensions.get('window');

export function Explorar(){

    const navigationStack = useNavigation<propsStack>()
    const usuario = useSelector((state: RootState) => state.usuario)
    const scrollY = useSharedValue(0);
    const modalTeste = useRef<Modalize>(null); 
    const [dataItem, setDataItem] = useState<PropsPerso>(); 
    const [activy, setActivy] = useState(true); 
    const [bar, setBar] = useState(false);
    const [activeIndex, setActiveIndex] = useState(2);
    
    const dataHerois = BHerois();
    const dataViloes = BViloes();
    const dataAnti = BAntiHerois();

    const [imageIndex, setImageIndex] = useState(2); 

    useEffect(() => {
        if (scrollY.value > 200) {
            setBar(true);
        }
    },[scrollY])

    setTimeout(() => {
        setActivy(false)
    }, 2000);

    const scrollHandler = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y;
    });

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
                        <ImageBackground source={{ uri: dataHerois[imageIndex].imagens[2] }} style={{ width: width, height: "auto" }}>
                            <View style={{ width: width, height: "auto", backgroundColor: 'rgba(0,0,0,.2)', paddingTop: 50 }}>
                                <View style={{ backgroundColor: "transparent", flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, paddingBottom: 20 }}>
                                    <Pressable onPress={() => navigationStack.goBack()}>
                                        <Icons name='chevron-back' size={25} color='#fff' />
                                    </Pressable>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: '#fff', fontSize: 20 }}>Explorar</Text>
                                    </View>
                                    <View style={{ width: 20, height: 20 }}></View>
                                </View>
                                <Carousel
                                    layout={'default'}
                                    data={dataHerois}
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
                                {
                                    dataHerois.length > 1 ?
                                        <View style={{ position: 'absolute', top: 555, width: width, marginBottom: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                            {
                                                // @ts-ignore 
                                                dataHerois.map((_,i) => (
                                                    <View 
                                                        key={i.toString()}
                                                        style={{ width: 8, height: 8, borderRadius: 10, marginHorizontal: 1, backgroundColor: i === activeIndex ? "#880808" : "#585858" }}
                                                    />
                                                ))
                                            }
                                        </View>
                                    : null
                                }
                            </View>
                        </ImageBackground>

                        <View style={{ backgroundColor: '#fff', marginTop: -20, borderTopLeftRadius: 30, borderTopRightRadius: 30, flex: 1, paddingTop: 30 }}>

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

                            <View style={{ marginBottom: 10}} >
                                <View style={styles.flatList}>
                                    <Text style={styles.title}>Heroís</Text>
                                    <Pressable onPress={() => navigationStack.navigate("PageVerTudo", { text: "Heroi" })}>
                                        <Text style={styles.buttonTudo}>Ver Tudo</Text>
                                    </Pressable>
                                </View>
                                <FlatList 
                                    data={dataHerois} 
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
                        </View>

                    </ScrollView>
                }
            </View>
            <Modalize
                ref={modalTeste}
                modalHeight={height}
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