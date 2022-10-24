import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import { PropsNoticias, PropsPerso, propsStack } from '../../services/types';

import { styles11G, styles121 } from './styles';

interface Props121 {
    data: PropsNoticias[]
}

export function Flexbox121(props: Props121) {
    const navigationStack = useNavigation<propsStack>();
    return(
        <ScrollView horizontal contentContainerStyle={{ paddingRight: 10, paddingLeft: 10 }} showsHorizontalScrollIndicator={false}>
            <View style={{ height: 260, flexDirection: 'row' }}>
                <Pressable onPress={() => navigationStack.navigate("PageNoticia",{data: props.data[0]})} style={styles121.viewVertical}>
                    <Image source={{ uri: props.data[0].thamb}} borderRadius={10} style={styles121.image} />
                    <Text style={styles121.selo}>Filmes</Text>
                    <LinearGradient colors={["transparent","#000"]} style={styles121.viewGradient}>
                        <Text style={styles121.tituloV}>{props.data[0].titulo}</Text>
                        <Text style={styles121.horas}>7 horas atrás</Text>
                    </LinearGradient>
                </Pressable>
                <View>
                    <Pressable onPress={() => navigationStack.navigate("PageNoticia",{data: props.data[1]})} style={{ height: 125, width: 300, marginBottom: 10 }}>
                        <Image source={{ uri: props.data[1].thamb }} borderRadius={10} style={styles121.image} />
                        <Text style={styles121.selo}>Filmes</Text>
                        <LinearGradient colors={["transparent","#000"]} style={styles121.viewGradient}>
                            <Text style={styles121.tituloH}>{props.data[1].titulo}</Text>
                            <Text style={styles121.horas}>7 horas atrás</Text>
                        </LinearGradient>
                    </Pressable>
                    <Pressable onPress={() => navigationStack.navigate("PageNoticia",{data: props.data[2]})} style={{ height: 125, width: 300 }}>
                        <Image source={{ uri: props.data[2].thamb }} borderRadius={10} style={styles121.image} />
                        <Text style={styles121.selo}>Filmes</Text>
                        <LinearGradient colors={["transparent","#000"]} style={styles121.viewGradient}>
                            <Text style={styles121.tituloH}>{props.data[2].titulo}</Text>
                            <Text style={styles121.horas}>7 horas atrás</Text>
                        </LinearGradient>
                    </Pressable>
                </View>
                <Pressable onPress={() => navigationStack.navigate("PageNoticia",{data: props.data[0]})} style={{ height: "100%", width: 155, marginLeft: 10}}>
                    <Image source={{ uri: props.data[0].thamb }} borderRadius={10} style={styles121.image} />
                    <Text style={styles121.selo}>Filmes</Text>
                    <LinearGradient colors={["transparent","#000"]} style={styles121.viewGradient}>
                        <Text style={styles121.tituloV}>{props.data[0].titulo}</Text>
                        <Text style={styles121.horas}>7 horas atrás</Text>
                    </LinearGradient>
                </Pressable>
            </View>
        </ScrollView>
    );
}
export function Flexbox11G(props: Props121) {
    const navigationStack = useNavigation<propsStack>();
    return(
        <ScrollView horizontal contentContainerStyle={{ paddingRight: 10, paddingLeft: 10 }} showsHorizontalScrollIndicator={false}>
            <View style={{ height: 260, flexDirection: 'row' }}>
                <Pressable onPress={() => navigationStack.navigate("PageNoticia",{data: props.data[0]})} style={styles11G.viewVertical}>
                    <Image source={{ uri: props.data[0].thamb}} borderRadius={10} style={styles11G.image} />
                    <Text style={styles11G.selo}>Filmes</Text>
                    <LinearGradient colors={["transparent","#000"]} style={styles11G.viewGradient}>
                        <Text style={styles11G.tituloV}>{props.data[0].titulo}</Text>
                        <Text style={styles11G.horas}>7 horas atrás</Text>
                    </LinearGradient>
                </Pressable>
                <Pressable onPress={() => navigationStack.navigate("PageNoticia",{data: props.data[0]})} style={{ height: "100%", width: 155}}>
                    <Image source={{ uri: props.data[0].thamb }} borderRadius={10} style={styles11G.image} />
                    <Text style={styles11G.selo}>Filmes</Text>
                    <LinearGradient colors={["transparent","#000"]} style={styles11G.viewGradient}>
                        <Text style={styles11G.tituloV}>{props.data[0].titulo}</Text>
                        <Text style={styles11G.horas}>7 horas atrás</Text>
                    </LinearGradient>
                </Pressable>
                <View style={{ marginLeft: 10 }}>
                    <Pressable onPress={() => navigationStack.navigate("PageNoticia",{data: props.data[1]})} style={{ height: 260, width: 390, marginBottom: 10 }}>
                        <Image source={{ uri: props.data[1].thamb }} borderRadius={10} style={styles11G.image} />
                        <Text style={styles11G.selo}>Filmes</Text>
                        <LinearGradient colors={["transparent","#000"]} style={styles11G.viewGradient}>
                            <Text style={styles11G.tituloH}>{props.data[1].titulo}</Text>
                            <Text style={styles11G.horas}>7 horas atrás</Text>
                        </LinearGradient>
                    </Pressable>
                    {/* <View style={{ height: 125, width: 300 }}>
                        <Image source={{ uri: props.data[2].thamb }} borderRadius={10} style={styles121.image} />
                        <Text style={styles121.selo}>Filmes</Text>
                        <LinearGradient colors={["transparent","#000"]} style={styles121.viewGradient}>
                            <Text style={styles121.tituloH}>{props.data[2].titulo}</Text>
                            <Text style={styles121.horas}>7 horas atrás</Text>
                        </LinearGradient>
                    </View> */}
                </View>
            </View>
        </ScrollView>
    );
}