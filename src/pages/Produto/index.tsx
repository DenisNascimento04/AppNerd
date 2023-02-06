import React, { useState } from 'react';
import { Dimensions, Image, Pressable, Text, View } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import { theme } from '../../themes';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RootState } from '../../store/index';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './styles';
import { PropsProdutos, propsStack } from '../../services/types';
import { pushProduto, deleteProduto } from '../../store/cart';

const { width, height } = Dimensions.get('window');

export function Produto() {

    const route = useRoute()
    const usuario = useSelector((state: RootState) => state.usuario);
    const cart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    // @ts-ignore
    const data:PropsProdutos = route.params?.data;
    const navigation = useNavigation<propsStack>();
    const [ref, setRef] = useState(false);

    console.log(cart.cart);

    function addProduto(id: number) {
        dispatch(pushProduto({id: id, num: 1}));
        setRef(true);
    }

    return(
        <View style={{ flex: 1, backgroundColor: theme.colors.contraste }}>
            <View style={styles.heades}>
                <Pressable onPress={() => navigation.goBack()} style={styles.buttons}>
                    <Ionicons name='chevron-back' size={30} color={theme.colors.fundo} />
                </Pressable>
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

            <View>
                <View style={{ width: width, height: 200, marginTop: 20, alignItems: 'center' }}>
                    <Image 
                        source={{ uri: data.img }} 
                        style={{ width: "70%", height: "100%" }} 
                        resizeMode="contain"
                    />
                </View>
                <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
                    {cart.cart.some((item) => item.id === data.id) || ref ? 
                        <Pressable onPress={() => dispatch(deleteProduto(data.id))} style={styles.buttonAddTrue}>
                            <Ionicons name='cart' size={30} color={theme.colors.contraste} />
                            <Text style={{ marginLeft: 5, color: theme.colors.contraste }}>No carinho</Text>
                        </Pressable>
                    :
                        <Pressable onPress={() => addProduto(data.id)} style={styles.buttonAdd}>
                            <AntDesign name='plus' size={30} color={theme.colors.contraste} />
                        </Pressable>
                    }
                    <Text style={styles.titulo}>{data.titulo}</Text>
                    <Text style={[styles.text, { marginVertical: 10 }]}>R$ {data.preco.replace(".", ",0")}</Text>
                    <View style={{ backgroundColor: theme.colors.destaque, width: 85, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20 }}>
                        <Text style={{ color: theme.colors.contraste, fontSize: 12 }}>Frete Grátis</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}