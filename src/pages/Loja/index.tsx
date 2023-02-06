import React, { useEffect, useState } from 'react';
import { View, Dimensions, Image, Pressable, Text, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import data from '../../BDTeste/banco.json';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../themes';
import { RootState } from '../../store/index';
import { propsStack } from '../../services/types';
import { ItensQuadrinhos } from '../../components/Itens';
 
const { width, height } = Dimensions.get('window');

export function Loja(){
    const usuario = useSelector((state: RootState) => state.usuario)
    const cart = useSelector((state: RootState) => state.cart)
    const navigation = useNavigation<propsStack>();

    const [text, setText] = useState("");

    return(
        <ScrollView 
            style={{ flex: 1, backgroundColor: theme.colors.fundo, paddingTop: 30 }}
            contentContainerStyle={{ paddingBottom: 150 }}
        >

            <View style={{ height: 150, width: width }}>
                <View style={styles.header}>
                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.viewInput}>
                            <TouchableOpacity onPress={() => {}} style={styles.buttonInput}>
                                <Ionicons name='search' size={25} color={theme.colors.destaque} />
                            </TouchableOpacity>
                            <TextInput  
                                style={{ flex: 1 }}
                                onChangeText={(text) => setText(text)}
                                placeholder='Pesquisa...'
                                placeholderTextColor={theme.colors.destaque}
                                onSubmitEditing={() => {}}
                            />
                        </View>
                    </View>
                    <View>
                        {cart.cart.length-1 != 0 ? 
                            <View style={{ width: 20, height: 20, top: 20, left: 7, position: 'absolute', zIndex: 999, backgroundColor: theme.colors.destaque, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: theme.colors.contraste }}>{cart.cart.length-1}</Text>
                            </View>
                        : null}
                        <Pressable 
                            style={{ backgroundColor: theme.colors.contraste, width: 42, height: 42, marginLeft: 15, padding: 3, justifyContent: 'center', alignItems: 'center', borderRadius: 50 }} 
                            onPress={() => navigation.navigate("Carrinho")}
                        >
                            <Ionicons name='cart' size={25} color={theme.colors.fundo} />
                        </Pressable>
                    </View>
                </View>
            </View>

            <View style={{ marginBottom: 30, marginTop: -20 }}>
                <LinearGradient 
                    style={{ marginHorizontal: 20, paddingLeft: 20, paddingRight: 10, borderRadius: 30 }} 
                    colors={["#3A393A", "#2A3E66", "#1445A3", "#0A48C0"]} 
                    end={[ 1, 0 ]}
                >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ color: theme.colors.contraste, fontSize: 24, fontFamily: 'Roboto_100Thin_Italic' }}>Promoção{'\n'}Comics</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                                    <Text style={{ color: "#fff", fontSize: 22, fontWeight: '700' }}>30%</Text>
                                    <Text style={{ color: "#fff", fontSize: 14, fontWeight: '700' }}>Desconto</Text>
                                </View>
                                <Text style={{ color: "#fff",  }}>em Comics</Text>
                                <View style={{ backgroundColor: "#fff", padding: 4, borderRadius: 20, maxWidth: 90, alignItems: 'center', marginTop: 10 }}>
                                    <Text style={{ color: theme.colors.destaque, fontSize: 10 }}>FRETE GRÁTIS</Text>
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

            <ScrollView contentContainerStyle={{ height: 40, paddingHorizontal: 20, marginVertical: 10 }} horizontal>
                <Pressable style={styles.buttons}>
                    <Text style={{ color: theme.colors.contraste }}>Tecnologia</Text>
                </Pressable>
                <Pressable style={styles.buttons}>
                    <Text style={{ color: theme.colors.contraste }}>Acessorios</Text>
                </Pressable>
                <Pressable style={styles.buttons}>
                    <Text style={{ color: theme.colors.contraste }}>Comics</Text>
                </Pressable>
            </ScrollView>

            <View>
                <Text style={{ color: theme.colors.contraste, fontFamily: theme.titleItalic, fontSize: 18, marginVertical: 10, marginLeft: 20 }}>Destaques</Text>
                <FlatList 
                    data={data.produtos}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(_,i) => i.toString()}
                    contentContainerStyle={{ paddingBottom: 20, paddingLeft: 20 }}
                    renderItem={({ item, index }) => (
                        <Pressable key={index} onPress={() => navigation.navigate("Produto", { data: item })} style={{ backgroundColor: theme.colors.contraste, borderRadius: 10, elevation: 15, shadowColor: theme.colors.destaque, paddingVertical: 10, paddingHorizontal: 20, marginRight: 10 }}>
                            <View style={{ position: 'absolute', backgroundColor: theme.colors.destaque, borderRadius: 20, paddingHorizontal: 8, paddingVertical: 5, top: 10, left: 10 }}>
                                <Text style={{ color: theme.colors.contraste, fontSize: 10 }}>Frete Grátis</Text>
                            </View>
                            <Image 
                                source={{ uri: item.img }} 
                                style={{ width: '100%', height: 80, marginTop: 20, marginBottom: 10 }} 
                                resizeMode='contain'
                            />
                            <Text style={{ maxWidth: 150, fontFamily: theme.title, fontSize: 14 }} numberOfLines={2}>{item.titulo}</Text>
                            <Text style={{ fontFamily: theme.text, fontSize: 14 }}>R$ {item.preco}</Text>
                        </Pressable>
                    )}
                />
            </View>

            <View style={{ marginBottom: 20 }}>
                <Text style={{ color: theme.colors.contraste, fontFamily: theme.titleItalic, fontSize: 18, marginVertical: 10, marginLeft: 20 }}>Vistos Recentemente</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                    {data.produtos.slice(0,2).map((item, index) => (
                        <Pressable key={index} onPress={() => navigation.navigate("Produto", { data: item })} style={{ backgroundColor: index%2 === 0 ? theme.colors.destaque: theme.colors.complementar , borderRadius: 10, padding: 21, marginRight: 10, alignItems: 'center' }}>
                            <Image 
                                source={{ uri: item.img }} 
                                style={{ width: '100%', height: 100, marginBottom: 10 }} 
                                resizeMode='contain'
                            />
                            <Text style={{ maxWidth: 150, fontFamily: theme.text, color: theme.colors.contraste, fontSize: 14, textAlign: 'center'  }} numberOfLines={2}>{item.titulo}</Text>
                            <Text style={{ fontFamily: theme.text, color: theme.colors.contraste, fontSize: 14 }}>R$ {item.preco}</Text>
                        </Pressable>
                    ))}
                </View>
            </View>

            <View style={{ marginBottom: 5 }} >
                <Text style={{ color: theme.colors.contraste, fontFamily: theme.titleItalic, fontSize: 18, marginVertical: 10, marginLeft: 20 }}>Comics Destaque</Text>
                <FlatList 
                    data={data.quadrinhos} 
                    keyExtractor={(item,index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingLeft: 20, paddingBottom: 20}}
                    renderItem={(item) => (
                        <ItensQuadrinhos 
                            navig={() => navigation.navigate("PageQuadrinhos", {data: item.item})}
                            data={item.item}
                        />
                    )}
                />
            </View>
        </ScrollView>
    );
    
}