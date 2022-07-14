import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Dimensions, Image, Pressable, Text, View } from "react-native";
import Animated, {useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, interpolate, Extrapolate} from 'react-native-reanimated';
import Icons from "react-native-vector-icons/Ionicons";
import { styles } from "./styles";
import { propsStack } from "../../services/types";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index";
import Carousel from "react-native-snap-carousel";

const { width } = Dimensions.get('window')

export function PageQuadrinhos() {

    const route = useRoute()
    const usuario = useSelector((state: RootState) => state.usuario);
    // @ts-ignore
    const data = route.params?.data;
    const scrollY = useSharedValue(0);
    const navigation = useNavigation<propsStack>();
    const scrollHandler = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y;
    });

    
    const CardStyle = useAnimatedStyle(() => {
        return {
            top: interpolate(
                scrollY.value,
                [0, 270],
                [160, 30],
                Extrapolate.CLAMP,
            ),
        };
    });
    const headerStyle = useAnimatedStyle(() => {
        return {
            height: interpolate(
                scrollY.value,
                [0, 270],
                [275, 120],
                Extrapolate.CLAMP,
            ),
        };
    });

    const titleStyle = useAnimatedStyle(() => {
        return {
            left: interpolate(
                scrollY.value,
                [0, 270],
                [0, -30],
                Extrapolate.CLAMP,
            ),
        };
    });

    
    const dadosOpacityStyle = useAnimatedStyle(() => {
        return {
            transform:[
                {
                    scale: interpolate(
                        scrollY.value,
                        [0, 50],
                        [1, 0],
                        Extrapolate.CLAMP,
                    ), 
                }
            ] 
        };
    });
    const imageFade = useAnimatedStyle(() => {
        return {
            transform:[
                {
                    scale: interpolate(
                        scrollY.value,
                        [0, 50],
                        [1, 0],
                        Extrapolate.CLAMP,
                    ), 
                }
            ] 
        };
    });
    const buttonBack = useAnimatedStyle(() => {
        return {
            top: interpolate(
                scrollY.value,
                [0, 280],
                [40, 50],
                Extrapolate.CLAMP
            )
        };
    });
    const buttoLike = useAnimatedStyle(() => {
        return {
            top: interpolate(
                scrollY.value,
                [0, 280],
                [245, 50],
                Extrapolate.CLAMP
            ),
            marginRight: interpolate(
                scrollY.value,
                [0, 280],
                [30, 20],
                Extrapolate.CLAMP
            ),
        };
    });


    return(
        <View>
            <Animated.View style={[ headerStyle, styles.header]}>
                <View style={{ width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,.3)" }}>
                    <Animated.View style={[buttonBack, { position: 'absolute', left: 20,}]}>
                        <Pressable onPress={() => navigation.goBack()} style={styles.buttonBack}>
                            <Icons name='chevron-back' size={28} color="#000" />
                        </Pressable>
                    </Animated.View>
                </View>
                <Image 
                    source={{ uri: data.thamb }} 
                    style={styles.imageHeader}
                    fadeDuration={500}  
                />
            </Animated.View>

            <Animated.View style={[ CardStyle, styles.card]}>
                <View style={{ width: 130, height: 200 }}>
                    <Animated.Image 
                        source={{ uri: data.capa }} 
                        fadeDuration={500} 
                        style={[ imageFade, { width: "100%", height: "100%" }]} borderRadius={5} 
                    />
                </View>
                <View style={{ paddingVertical: 10, marginLeft: 10 }}>
                    <View style={{ marginBottom: 20 }}>
                        <Animated.Text style={[ titleStyle, styles.cardTitulo]}>{data.titulo}</Animated.Text>
                        <Animated.View style={[ dadosOpacityStyle, { flexDirection: 'row', alignItems: 'center' }]}>
                            <View style={{ marginRight: 5, flexDirection: 'row' }}>
                                { data.nota-5 > 1 ? <Icons name='heart' size={13} color="red" /> : <Icons name='heart' size={13} color="#585858" /> }
                                { data.nota-5 > 2 ? <Icons name='heart' size={13} color="red" /> : <Icons name='heart' size={13} color="#585858" /> }
                                { data.nota-5 > 3 ? <Icons name='heart' size={13} color="red" /> : <Icons name='heart' size={13} color="#585858" /> }
                                { data.nota-5 > 4 ? <Icons name='heart' size={13} color="red" /> : <Icons name='heart' size={13} color="#585858" /> }
                                { data.nota-5 > 5 ? <Icons name='heart' size={13} color="red" /> : <Icons name='heart' size={13} color="#585858" /> }
                            </View>
                            <Text style={styles.cardNota}>
                                {data.nota}
                            </Text>
                        </Animated.View>
                    </View>
                    <Animated.View style={[ dadosOpacityStyle ]}>
                        <Text style={[ styles.cardTexto, { marginBottom: 10 }]}>
                            {`Destaque: \n${data.personDestaque}`}
                        </Text>
                        <Text style={styles.cardTexto}>
                            Gênero: Ação, Aventura, Guerra, Violencia
                        </Text>
                    </Animated.View>
                </View>
            </Animated.View>

            <Animated.View style={[ buttoLike, { position: 'absolute', right: 0, marginRight: 10, zIndex: 5 }]}>
                <Pressable style={styles.buttonLike}>
                    <Icons name='heart' size={32} color="red" />
                </Pressable>
            </Animated.View> 


            <View>
                <Animated.ScrollView 
                    onScroll={scrollHandler} 
                    scrollEventThrottle={16}
                    contentContainerStyle={{ paddingTop: 280 }}
                >
                    <StatusBar style='light' />
                    <View style={{ backgroundColor: 'transparent', paddingTop: 80, paddingHorizontal: 20 }}>
                        <Text style={styles.contentTitulo}>Sinopse</Text>
                        {data.sinopse.map((item: string, index: number) => (
                            <Text key={index} style={styles.contentText} >
                                {item}
                            </Text>
                        ))}
                        <Text style={styles.contentTitulo}>Equipe</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            {data.equipe.map((item: {image: string, text: string}, index: number) => (
                                <View key={index} style={{ marginBottom: 10, marginRight: 10 }}>
                                    <Image 
                                        source={{ uri: item.image }}
                                        style={styles.imagemEquipes}
                                    />
                                    <Text style={styles.imagemDesc} >
                                        {item.text}
                                    </Text>
                                </View>
                            ))}
                        </View>
                        <View style={{ marginVertical: 5 }}>
                            <Text style={styles.contentTitulo}>Fotos</Text>
                            <Carousel 
                                data={data.imagens}
                                layout={'stack'}
                                sliderWidth={width-20}
                                firstItem={2}
                                inactiveSlideOpacity={1}
                                itemWidth={width-100}
                                renderItem={({ item }) => (
                                    <View>
                                        <Image 
                                            // @ts-ignore
                                            source={{ uri: item }} 
                                            borderRadius={10} 
                                            style={{ width: 320, height: 220 }} 
                                        />
                                    </View>
                                )}
                            />
                        </View>
                        <View style={{ marginBottom: 50, marginTop: 20, alignItems: 'center'}}>
                            <Pressable style={{ backgroundColor: '#000', width: 120, borderRadius: 5, padding: 10, alignItems: 'center' }}>
                                <Text style={{ color: '#fff' }}>Ler</Text>
                            </Pressable>
                        </View>
                    </View>
                </Animated.ScrollView>
            </View>
        </View>
    );
}