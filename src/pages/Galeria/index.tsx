import React from "react";
import { View, Image, Text, PixelRatio, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useQuery } from "react-query";

import data from '../../BDTeste/banco.json';
import { ImagemAdap } from "../../components/ImagemAdap";
import { theme } from "../../themes";
import { styles } from "./styles";
import { Pin } from "../../components/Pin";

export function Galeria() {

    return(
        <ScrollView style={{ flex: 1, backgroundColor: theme.colors.fundo }} contentContainerStyle={{ paddingBottom: 70 }}>
            <View style={styles.container}>
                <View style={[styles.coluna, { paddingRight: 10 }]}>
                    {data.galeria
                        .filter((_, index) => index % 2 === 0)
                        .map((item, index) => (
                            <Pin pin={item} key={index} />
                        ))
                    }
                </View>
                <View style={styles.coluna}>
                    {data.galeria
                        .filter((_, index) => index % 2 === 1)
                        .map((item, index) => (
                            <Pin pin={item} key={index} />
                        ))
                    }
                </View>
            </View>
        </ScrollView>
    );
}