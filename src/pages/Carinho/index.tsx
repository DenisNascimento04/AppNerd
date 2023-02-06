import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, FlatList, Image, Pressable, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { PropsProdutos } from '../../services/types';
import data1 from '../../BDTeste/banco.json';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/index';
import { theme } from '../../themes';

const { width, height } = Dimensions.get("window")

export function Carrinho(){

    const cart = useSelector((state: RootState) => state.cart);

    const setData: PropsProdutos[] = data1.produtos.filter((item) => {
        return cart.cart.find((item1) => item.id === item1.id);
    })
    var total = () => {
        var soma = 0.00;
        for (let i = 0; i < setData.length; i++) {
            soma += parseFloat(setData[i].preco);
        }
        return soma.toString().replace('.',',');
    }

    return(
        <View style={{ paddingTop: 30 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: theme.colors.destaque, paddingVertical: 10, paddingLeft: 20, alignItems: 'center' }}>
                <Text style={{ color: "#F2F2F2", fontSize: 22, fontFamily: theme.title }}>Carrinho</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: "#f2f2f2", marginRight: 18 }}>Preço</Text>
                    <Text style={{ color: "#f2f2f2", marginRight: 18 }}>Unidade</Text>
                </View>
            </View>
            <FlatList 
                data={setData}
                keyExtractor={(_,i) => i.toString()}
                ItemSeparatorComponent={() => <View style={{ height: 1, width: "100%", backgroundColor: '#585858' }} />}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginBottom: 5 }}>
                        <Image 
                            source={{ uri: item.img }}
                            style={{ width: 50, height: 50 }}
                            resizeMode='contain' 
                        />
                        <Text style={{ maxWidth: 150 }} numberOfLines={2}>{item.titulo}</Text>
                        <Text>{item.preco.toString().replace('.',',')}</Text>
                        <View style={{ alignItems: 'center' }}>
                            <Pressable>
                                <Feather name='chevron-up' size={20} color={theme.colors.fundo} />
                            </Pressable>
                            <Text>1</Text>
                            <Pressable>
                                <Feather name='chevron-down' size={20} color={theme.colors.fundo} />
                            </Pressable>
                        </View>
                    </View>
                )}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width, paddingHorizontal: 20, alignItems: 'center', position: 'absolute', top: height-35, paddingVertical: 10 }}>
                <Text>R$ {total()}</Text>
                <View style={{  backgroundColor: theme.colors.destaque,  borderRadius: 80, width: 200, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: theme.colors.contraste, fontSize: 20 }}>Comprar</Text>
                </View>
            </View>
        </View>
    );
}