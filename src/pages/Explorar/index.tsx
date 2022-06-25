import React, { useEffect, useRef, useState } from 'react';
import { View, Text, ImageBackground, Dimensions, FlatList, Pressable, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Modalize } from 'react-native-modalize';
import Carousel from 'react-native-snap-carousel';
import Icons from 'react-native-vector-icons/Ionicons';
 import Svg, { Path } from 'react-native-svg';

import data from '../../BDTeste/banco.json';

import { styles } from './styles';
import { CompPesquisa } from '../../components/CompPesquisa';
import {  ItemPersonagens, ItemPersonagensBack, ItensNoticias, ItensQuadrinhos } from '../../components/Itens';
import {  PropsPerso, propsStack } from '../../services/types';
import { PageBase } from '../../components/PageBase';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/index';
import { ModalPerso } from '../../components/ModalPerso';
import { HeaderPage } from '../../components/Header';


const { width, height } = Dimensions.get('window');

export function Explorar(){

    const navigationStack = useNavigation<propsStack>()
    const usuario = useSelector((state: RootState) => state.usuario)
    const modalTeste = useRef<Modalize>(null); 
    const [dataItem, setDataItem] = useState<PropsPerso>(); 
    const [activy, setActivy] = useState(true); 
    
    const dataHerois: any = [];
    const dataViloes: any = [];
    const dataAnti: any = [];

    data.personagensMarvel.map((item) => {
        if (item.tipoP === "Heroi" ) {
            dataHerois.push({ ...item })
        }
    })
    data.personagensDC.map((item) => {
        if (item.tipoP === "Heroi" ) {
            dataHerois.push({ ...item })
        }
    })
    data.personagensMarvel.map((item) => {
        if (item.tipoP === "Vilão" ) {
            dataViloes.push({ ...item })
        }
    })
    data.personagensDC.map((item) => {
        if (item.tipoP === "Vilão" ) {
            dataViloes.push({ ...item })
        }
    })
    data.personagensMarvel.map((item) => {
        if (item.tipoP === "Anti-Heroi" ) {
            dataAnti.push({ ...item })
        }
    })

    setTimeout(() => {
        setActivy(false)
    }, 2000);

    function OpenModal(data: PropsPerso) {
        modalTeste.current?.open()
        setDataItem(data)
    }


    return(
        <>
            <View style={{ flex: 1, backgroundColor: "#353935", paddingTop: 40 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, paddingBottom: 20 }}>
                    <Pressable onPress={() => navigationStack.goBack()}>
                        <Icons name='chevron-back' size={25} color='#fff' />
                    </Pressable>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#fff', fontSize: 20 }}>Explorar</Text>
                    </View>
                    <View style={{ width: 20, height: 20 }}></View>
                </View>
                {activy ? 
                    <View>
                        <ActivityIndicator color='red' size='large' />
                    </View>
                : 
                
                    <ScrollView contentContainerStyle={{  }} scrollEventThrottle={16}>
                        <View>
                            <Carousel
                                layout={'default'}
                                data={dataHerois}
                                firstItem={2}
                                sliderWidth={width}
                                itemWidth={300}
                                renderItem={({item}) => {
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
                        </View>

                        <View style={{ backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30, flex: 1, paddingTop: 30 }}>

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