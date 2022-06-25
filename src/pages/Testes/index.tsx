import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, ImageBackground, Image, ScrollView, Dimensions, FlatList } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { HabilidadeBar } from '../../components/HabilidadeBar';

const { width } = Dimensions.get('screen')


export function Testes() {

    const Hulk = [
        {
            titulo: 'Força',
            number: 10
        },
        {
            titulo: 'Agilidade',
            number: 4
        },
        {
            titulo: 'Resistência',
            number: 8
        },
        {
            titulo: 'Inteligência',
            number: 9
        },
        {
            titulo: 'Velocidade',
            number: 4
        },
    ];

    const keys = [
        0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
    ]

    return(

        <ImageBackground source={require("../../assets/base-Page.png")} style={{ flex: 1, paddingTop: 40 }} >
            <Text>Testes</Text>
        </ImageBackground>

        // <View style={{ flex: 1 }}>
        //     <StatusBar style='light' backgroundColor='rgba(58,58,58,0.1)' />
        //     <ScrollView>
        //         <ImageBackground 
        //             source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/91k51Kz1P-L.jpg' }} 
        //             style={{ width: '100%', height: 450, justifyContent: 'center', paddingTop: 10 }}
        //             borderBottomRightRadius={40}
        //             borderBottomLeftRadius={40}
        //             resizeMode='cover'
        //             blurRadius={10}
        //         >
        //             <Image 
        //                 source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/91k51Kz1P-L.jpg' }}
        //                 resizeMode='center'
        //                 style={{ width: '100%', height: 325 }}
        //             />
        //         </ImageBackground>
        //         <View style={{ width: 250, height: 50, borderRadius: 20, backgroundColor: '#585858', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, position: 'absolute', top: 420, left: width/4.6 }}>
        //             <Text style={{ color: '#fff' }}>
        //                 #Julho de 2007
        //             </Text>
        //             <Text style={{ color: '#fff' }}>
        //                 <Icons name='flash' size={16} color='#F39C12'  />
        //                 9.2
        //             </Text>
        //         </View>
        //         <View style={{ paddingHorizontal: 20, paddingTop: 40 }}>
        //             <Text style={{ fontSize: 26, fontFamily: 'ComicNeue_700Bold', marginBottom: 10 }} >Hulk Contra o Mundo</Text>
        //             <Text style={{ fontFamily: 'ComicNeue_400Regular', fontSize: 16, marginBottom: 10 }} >
        //                 Um dos maiores classicos da editora, esta historia mostra o quanto o hulk pode ser realmnete perigoso e imparaval.
        //             </Text>
        //             <Text style={{ fontFamily: 'ComicNeue_400Regular', fontSize: 16, marginBottom: 10 }} >
        //                 World War Hulk é um crossover dos quadrinhos publicado em título próprio e em diversos outros 
        //                 títulos da Marvel Comics em 2007. A história é consequência dos eventos ocorridos na saga Planeta Hulk. 
        //                 A história foi escrita por Greg Pak com arte de John Romita Jr. e capas por David Finch.
        //             </Text>
        //         </View>
        //         <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 45, alignItems: 'center', paddingHorizontal: 20, paddingTop: 40 }}>
                    
        //         </View>
                
        //     </ScrollView>
        // </View>
    );

}