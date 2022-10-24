import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Dimensions, FlatList, Image, ScrollView } from 'react-native';
import api from '../../BDTeste/api';
import data from '../../BDTeste/banco.json';
import { ItemPersonagens } from '../../components/Itens';
import { BHerois } from '../../mente';
// import { setPersons } from '../../mente';
import { PropsPerso } from '../../services/types';

const { width } = Dimensions.get("screen");

export function Testes() {

    // const [teste, setTeste] = useState<PropsPerso[]>([]);

    // async function response (){
    //     const res = await api.get("/personagem/10");
    //     setTeste(res.data);
    // };

    // useEffect(() => {
    //     response()
    // },[])

    // console.log(teste[0]);
    // .then().catch((error) => console.log(error))

    const datas1 = data.teste;
    const datas2 = BHerois();

    return(
        <ScrollView style={{ paddingTop: 40 }} contentContainerStyle={{ paddingBottom: 100 }}>
            <Text>Olá Mundo</Text>
            <FlatList 
                data={datas1}
                keyExtractor={(_,i) => i.toString()}
                horizontal
                contentContainerStyle={{ alignItems: 'center' }}
                snapToInterval={width-100}
                // initialScrollIndex={5}
                renderItem={({item, index}) => (
                    <View style={{ width: width-100, alignItems: 'center', marginLeft: index === 0 ? 40 : 0 , marginRight: index === datas1.length-1 ? 40 : 0}}>
                        <ItemPersonagens 
                            data={item}
                        />
                    </View>
                )}
            />
            <FlatList 
                data={datas2}
                keyExtractor={(_,i) => i.toString()}
                horizontal
                contentContainerStyle={{ alignItems: 'center' }}
                snapToInterval={width-100}
                // initialScrollIndex={5}
                renderItem={({item, index}) => (
                    <View style={{ width: width-100, alignItems: 'center', marginLeft: index === 0 ? 40 : 0, marginRight: index === datas2.length-1 ? 40 : 0 }}>
                        <ItemPersonagens 
                            data={item}
                        />
                    </View>
                )}
            />
            <View>
                <LinearGradient 
                    style={{ marginHorizontal: 20, paddingLeft: 20, paddingRight: 10, paddingTop: 20, borderRadius: 20 }} 
                    colors={["#3A393A", "#2A3E66", "#1445A3", "#0A48C0"]} 
                    end={[ 1, 0 ]}
                >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ color: "#F4BD46", fontSize: 24, fontFamily: 'Roboto_100Thin_Italic' }}>Promoção{'\n'}Comics</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                                    <Text style={{ color: "#fff", fontSize: 22, fontWeight: '700' }}>30%</Text>
                                    <Text style={{ color: "#fff", fontSize: 14, fontWeight: '700' }}>Desconto</Text>
                                </View>
                                <Text style={{ color: "#fff",  }}>em Comics</Text>
                                <View style={{ backgroundColor: "#fff", padding: 4, borderRadius: 20, maxWidth: 90, alignItems: 'center', marginTop: 10 }}>
                                    <Text style={{ color: "#FF5500", fontSize: 10 }}>FRETE GRÁTIS</Text>
                                </View>
                                <View></View>
                            </View>
                            <View style={{ flexDirection: 'row', top: -60, left: 120, position: 'absolute' }}>
                                <Image 
                                    source={{ uri: "https://http2.mlstatic.com/D_NQ_NP_768423-MLB43703504777_102020-O.jpg" }} 
                                    style={{ width: 110, height: 210 }}
                                    resizeMode='contain'
                                />
                                <Image 
                                    source={{ uri: "https://i.pinimg.com/236x/68/f1/74/68f1748a650ce000c61157f85c58805a.jpg" }} 
                                    style={{ width: 110, height: 210 }}
                                    resizeMode='contain'
                                />
                            </View>
                        </View>
                        <View style={{ alignItems: 'center',  }}>
                            <Text style={{ color: "#fff", fontSize: 9 }}>*Valido de 27/03 até 01/04 2022.</Text>
                        </View>
                </LinearGradient>
            </View>
        </ScrollView>
    );

}