import React from 'react';
import { Dimensions, Image, Pressable, Text, View } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import { theme } from '../../themes';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RootState } from '../../store/index';
import { useSelector } from 'react-redux';
import { styles } from './styles';
import { propsStack } from '../../services/types';

const { width, height } = Dimensions.get('window');

export function Produto() {

    const route = useRoute()
    const usuario = useSelector((state: RootState) => state.usuario);
    // @ts-ignore
    const data = route.params?.data;
    const navigation = useNavigation<propsStack>();

    return(
        <View style={{ flex: 1, backgroundColor: theme.colors.contraste }}>
            <View style={styles.heades}>
                <Pressable onPress={() => navigation.goBack()} style={styles.buttons}>
                    <Ionicons name='chevron-back' size={30} color={theme.colors.fundo} />
                </Pressable>
                <Pressable style={styles.buttons}>
                    <Ionicons name='cart' size={30} color={theme.colors.fundo} />
                </Pressable>
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
                    <View style={styles.buttonAdd}>
                        <AntDesign name='plus' size={25} color={theme.colors.contraste} />
                    </View>
                    <Text style={styles.titulo}>{data.titulo}</Text>
                    <Text style={[styles.text, { marginVertical: 10 }]}>R$ {data.preco}</Text>
                    <View style={{ backgroundColor: theme.colors.destaque, width: 85, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20 }}>
                        <Text style={{ color: theme.colors.contraste, fontSize: 12 }}>Frete Grátis</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}