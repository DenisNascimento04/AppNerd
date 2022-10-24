import React from "react";
import { View, Image, Text, PixelRatio, ScrollView, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useQuery } from "react-query";

import data from '../../BDTeste/banco.json';
import { ImagemAdap } from "../../components/ImagemAdap";
import { theme } from "../../themes";
// import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../services/types";

type Props = {
    pin: {
        id: number,
        desc: string,
        url: string,
        tags: string[]
    }
}

export function Pin({ pin }: Props) {

    const navigation = useNavigation<propsStack>();

    return(
        <Pressable onPress={() => navigation.navigate("PageImagem", { data: pin })} key={pin.id} style={{ marginBottom: 10 }}>
            <ImagemAdap imagem={pin.url} />
            <View style={{ flexDirection: 'row', width: "100%", paddingHorizontal: 10, paddingTop: 5, alignItems: 'center', justifyContent: pin.desc === "" ? "flex-end": "space-between" }}>
                <Text style={{ color: theme.colors.contraste, fontSize: 13 }}  numberOfLines={2}>{pin.desc}</Text>
                <AntDesign name="staro" size={20} color={theme.colors.contraste} />
            </View>
        </Pressable>
                
    );
}