import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { PropsNoticias, PropsPerso } from '../../services/types';

import { styles121 } from './styles';

interface Props121 {
    data: PropsNoticias[]
}

export function Flexbox121(props: Props121) {
    return(
        <ScrollView horizontal contentContainerStyle={{ paddingRight: 10, paddingLeft: 10 }} showsHorizontalScrollIndicator={false}>
            <View style={{ height: 260, flexDirection: 'row' }}>
                <View style={styles121.viewVertical}>
                    <Image source={{ uri: props.data[0].thamb}} borderRadius={10} style={styles121.image} />
                    <Text style={styles121.selo}>Filmes</Text>
                    <LinearGradient colors={["transparent","#000"]} style={styles121.viewGradient}>
                        <Text style={styles121.tituloV}>{props.data[0].titulo}</Text>
                        <Text style={styles121.horas}>7 horas atrás</Text>
                    </LinearGradient>
                </View>
                <View>
                    <View style={{ height: 125, width: 300, marginBottom: 10 }}>
                        <Image source={{ uri: props.data[1].thamb }} borderRadius={10} style={styles121.image} />
                        <Text style={styles121.selo}>Filmes</Text>
                        <LinearGradient colors={["transparent","#000"]} style={styles121.viewGradient}>
                            <Text style={styles121.tituloH}>{props.data[1].titulo}</Text>
                            <Text style={styles121.horas}>7 horas atrás</Text>
                        </LinearGradient>
                    </View>
                    <View style={{ height: 125, width: 300 }}>
                        <Image source={{ uri: props.data[2].thamb }} borderRadius={10} style={styles121.image} />
                        <Text style={styles121.selo}>Filmes</Text>
                        <LinearGradient colors={["transparent","#000"]} style={styles121.viewGradient}>
                            <Text style={styles121.tituloH}>{props.data[2].titulo}</Text>
                            <Text style={styles121.horas}>7 horas atrás</Text>
                        </LinearGradient>
                    </View>
                </View>
                <View style={{ height: "100%", width: 155, marginLeft: 10}}>
                    <Image source={{ uri: props.data[0].thamb }} borderRadius={10} style={styles121.image} />
                    <Text style={styles121.selo}>Filmes</Text>
                    <LinearGradient colors={["transparent","#000"]} style={styles121.viewGradient}>
                        <Text style={styles121.tituloV}>{props.data[0].titulo}</Text>
                        <Text style={styles121.horas}>7 horas atrás</Text>
                    </LinearGradient>
                </View>
            </View>
        </ScrollView>
    );
}