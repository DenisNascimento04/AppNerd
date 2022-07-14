import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { View, Text, ImageBackground, Image, ScrollView, Dimensions, FlatList, TextProps, Pressable } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { theme } from '../../themes';

import data from '../../BDTeste/banco.json';
import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { propsStack } from '../../services/types';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('screen')
const flameIcon = require("../../assets/flame.svg");

export function Testes() {

    const teste = useRef<TextProps>(null);

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
            )
        };
    });


    return(
        <View>
            <Animated.View style={[ headerStyle, { width: width, height: 300, position: 'absolute', top: 0, left: 0, zIndex: 1, borderRadius: 20, overflow: 'hidden' }]}>
                <View style={{ width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,.3)" }}>
                    <Animated.View style={[buttonBack, { position: 'absolute', left: 20,}]}>
                        <Pressable style={{ 
                            backgroundColor: "#fff", 
                            elevation: 10,  
                            alignItems: 'center', 
                            justifyContent: 'center',
                            marginRight: 30,
                            width: 42, 
                            height: 42, 
                            borderRadius: 24 
                        }}>
                            <Icons name='chevron-back' size={28} color="#000" />
                        </Pressable>
                    </Animated.View>
                </View>
                <Image source={{ uri: "https://www.planocritico.com/wp-content/uploads/2014/12/hulk-contra-o-mundo.jpg" }} style={{ width: "100%", height: "100%", position: 'absolute', zIndex: -1 }} />
            </Animated.View>

            <Animated.View style={[ CardStyle, { position: 'absolute', left: 20, zIndex: 5, flexDirection: 'row' }]}>
                <View style={{ width: 130, height: 200 }}>
                    <Animated.Image source={{ uri: data.quadrinhos[0].capa }} fadeDuration={500} style={[ imageFade, { width: "100%", height: "100%" }]} borderRadius={5} />
                </View>
                <View style={{ paddingVertical: 10, marginLeft: 10 }}>
                    <View style={{ marginBottom: 20 }}>
                        <Animated.Text style={[ titleStyle ,{ fontFamily: theme.titleRoboto, fontSize: 26, color: "#fff", maxWidth: 250, height: 70 }]}>{data.quadrinhos[0].titulo}</Animated.Text>
                        <Animated.View style={[ dadosOpacityStyle, { flexDirection: 'row', alignItems: 'center' }]}>
                            <View style={{ marginRight: 5, flexDirection: 'row' }}>
                                { data.quadrinhos[0].nota-5 > 1 ? <Icons name='heart' size={14} color="red" /> : <Icons name='heart' size={14} color="#585858" /> }
                                { data.quadrinhos[0].nota-5 > 2 ? <Icons name='heart' size={14} color="red" /> : <Icons name='heart' size={14} color="#585858" /> }
                                { data.quadrinhos[0].nota-5 > 3 ? <Icons name='heart' size={14} color="red" /> : <Icons name='heart' size={14} color="#585858" /> }
                                { data.quadrinhos[0].nota-5 > 4 ? <Icons name='heart' size={14} color="red" /> : <Icons name='heart' size={14} color="#585858" /> }
                                { data.quadrinhos[0].nota-5 > 5 ? <Icons name='heart' size={14} color="red" /> : <Icons name='heart' size={14} color="#585858" /> }
                            </View>
                            <Text style={{ fontFamily: theme.textRoboto, fontSize: 14, color: "#fff" }}>
                                {data.quadrinhos[0].nota}
                            </Text>
                        </Animated.View>
                    </View>
                    <Animated.View style={[ dadosOpacityStyle ]}>
                        <Text style={{ fontFamily: theme.textRoboto, fontSize: 13, maxWidth: 150, color: "#585858", marginBottom: 10 }}>
                            {`Destaque: \n${data.quadrinhos[0].personDestaque}`}
                        </Text>
                        <Text style={{ fontFamily: theme.textRoboto, fontSize: 13, maxWidth: 150, color: "#585858" }}>
                            Gênero: Ação, Aventura, Guerra, Violencia
                        </Text>
                    </Animated.View>
                </View>
            </Animated.View>

            <Animated.View style={[ buttoLike, { position: 'absolute', right: 0, marginRight: 10, zIndex: 5 }]}>
                <Pressable style={{ 
                    backgroundColor: "#fff", 
                    elevation: 10,  
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginRight: 30,
                    width: 44, 
                    height: 44, 
                    borderRadius: 24 
                }}>
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
                        <Text style={{ fontFamily: theme.titleRoboto, fontSize: 22, marginVertical: 7 }}>Sinopse</Text>
                        {data.quadrinhos[0].sinopse.map((item: string, index: number) => (
                            <Text key={index} style={{ fontFamily: theme.textRoboto, fontSize: 14 }} >
                                {item}
                            </Text>
                        ))}
                        <Text style={{ fontFamily: theme.titleRoboto, fontSize: 22, marginVertical: 7 }}>Equipe</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            {data.quadrinhos[0].equipe.map((item: {image: string, text: string}, index: number) => (
                                <View key={index} style={{ marginBottom: 10, marginRight: 10 }}>
                                    <Image 
                                        source={{ uri: item.image }}
                                        style={{ width: 80, height: 80, borderRadius: 40 }}
                                    />
                                    <Text style={{ maxWidth: 80, fontSize: 12, textAlign: 'center' }} >
                                        {item.text}
                                    </Text>
                                </View>
                            ))}
                        </View>
                        <Text style={{ fontFamily: theme.titleRoboto, fontSize: 22, marginVertical: 7 }}>Equipe</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            {data.quadrinhos[0].equipe.map((item: {image: string, text: string}, index: number) => (
                                <View key={index} style={{ marginBottom: 10, marginRight: 10 }}>
                                    <Image 
                                        source={{ uri: item.image }}
                                        style={{ width: 80, height: 80, borderRadius: 40 }}
                                    />
                                    <Text style={{ maxWidth: 80, fontSize: 12, textAlign: 'center' }} >
                                        {item.text}
                                    </Text>
                                </View>
                            ))}
                        </View>
                        <Text style={{ fontFamily: theme.titleRoboto, fontSize: 22, marginVertical: 7 }}>Equipe</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            {data.quadrinhos[0].equipe.map((item: {image: string, text: string}, index: number) => (
                                <View key={index} style={{ marginBottom: 10, marginRight: 10 }}>
                                    <Image 
                                        source={{ uri: item.image }}
                                        style={{ width: 80, height: 80, borderRadius: 40 }}
                                    />
                                    <Text style={{ maxWidth: 80, fontSize: 12, textAlign: 'center' }} >
                                        {item.text}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </Animated.ScrollView>
            </View>
        </View>
    );

}