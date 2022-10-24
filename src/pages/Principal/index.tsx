import React, { useEffect, useRef, useState } from 'react';
import { View, Text, ImageBackground, Dimensions, FlatList, Pressable, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Modalize } from 'react-native-modalize';
import Icons from 'react-native-vector-icons/Ionicons';
// @ts-ignore
import Vector from '../../assets/vector1.png' 

import data from '../../BDTeste/banco.json';
import { BAntiHerois, BHerois, BViloes } from '../../mente';

import { styles } from './styles';
import {  ItemPersonagensBack, ItensNoticias, ItensNoticias2 } from '../../components/Itens';
import {  propsDrawer, PropsPerso, propsStack, propsTab } from '../../services/types';
import { PageBase } from '../../components/PageBase';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/index';
import { Flexbox11G, Flexbox121 } from '../../components/FlexboxN';
import { theme } from '../../themes';
import { StatusBar } from 'expo-status-bar';


const { width, height } = Dimensions.get('window');

export function Principal(){

    const navigationStack = useNavigation<propsStack>()
    const usuario = useSelector((state: RootState) => state.usuario)
    const dispatch = useDispatch()
    const modalTeste = useRef<Modalize>(null); 

    const [dataItem, setDataItem] = useState<PropsPerso>(); 
    const [dataPerf, setDataPerf] = useState(data.personagens); 
    const [activeIndex, setActiveIndex] = useState(0); 
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
        // {
        //     icon: 'planet',
        //     text: 'EXPLORAR',
        //     color: ['#011C40', "#020659"]
        // },
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

    const dataNoticias1: any = [];
    // const data1 = async () => {
    //     const res = await api.get("/allpersonagens");
    //     setDataPerf(res.data);
    // }

    // useEffect(() => {
    //     data1();
    // },[])

    data.notiicias.map((item) => {
        dataNoticias1.push({ ...item })
    })

    function OpenModal(data: PropsPerso) {
        modalTeste.current?.open()
        setDataItem(data)
    }
    // console.log(dataNoticias1)


    return(
        <PageBase backHeader={theme.colors.regularLight} backgroudColor={theme.colors.bold} image={usuario.imagePerfil} title='Home'>
            <StatusBar style='light' backgroundColor="transparent"/>
            <View style={{ position: 'absolute', top: 0, left: 0, width: width, height: 400, backgroundColor: theme.colors.bold, zIndex: -1, borderBottomRightRadius: 150 }}>
                <View style={{ width: '100%', height: '100%', borderBottomLeftRadius: 500, borderBottomRightRadius: 150, backgroundColor: theme.colors.regularLight }} />
            </View>
            <View style={{ zIndex: 0, flex: 1 }}>

                <View style={{ backgroundColor: 'transparent', borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingTop: 10, flex: 1, }}>
                    <Text style={[styles.title, { color: theme.colors.fundo, marginLeft: 20, marginBottom: 10 }]}>Destaques</Text>                    
                    <Flexbox121 
                        data={dataNoticias1}
                    />

                    <FlatList 
                        data={dataNoticias1}
                        keyExtractor={(_,i) => i.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingLeft: 10, marginTop: 30 }}
                        renderItem={({ item }) => (
                            <ItensNoticias2 data={item} />
                        )}
                    />

                    <Text style={[styles.title, { color: theme.colors.fundo, marginLeft: 20, marginBottom: 10, marginTop: 20 }]}>Novidades</Text>                    
                    <Flexbox11G 
                        data={dataNoticias1}
                    />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: theme.colors.bold, alignItems: 'center', marginHorizontal: 30, marginVertical: 20, elevation: 10, shadowColor: "#fff", borderWidth: 1, borderColor: "#585858", borderRadius: 20, }}>
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
                    
                </View>
            </View>
        </PageBase>
    );
}