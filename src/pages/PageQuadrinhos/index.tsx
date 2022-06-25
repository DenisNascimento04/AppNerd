import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Dimensions, Image, ImageBackground, Pressable, Text, View } from "react-native";
import Animated, {useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, interpolate, Extrapolate, FadeInUp, FadeInLeft} from 'react-native-reanimated';
import Icons from "react-native-vector-icons/Ionicons";
import { styles } from "./styles";
import { propsStack } from "../../services/types";
import { HeaderPage } from "../../components/Header";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index";

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

    const headerStyle = useAnimatedStyle(() => {
        return {
            height: interpolate(
                scrollY.value,
                [0, 340],
                [450, 100],
                Extrapolate.CLAMP,
            ),
        };
    });

    const thambStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                scrollY.value,
                [0, 100],
                [1, 0],
                Extrapolate.CLAMP,
            ),
            transform: [
                {
                    scale: interpolate(
                        scrollY.value,
                        [0, 150],
                        [1, 0],
                        Extrapolate.CLAMP
                    ),
                }
            ]
        };
    });

    return(
         <View style={{ }}>
            <StatusBar style='light' backgroundColor='transparent' />
            <Animated.View entering={FadeInUp.duration(700)} style={[headerStyle, styles.header]}>
                <ImageBackground 
                    source={{ uri: data.capa }} 
                    style={styles.headerImageBack}
                    borderBottomRightRadius={40}
                    borderBottomLeftRadius={40}
                    resizeMode='cover'
                    imageStyle={{ position:'absolute', top: 0, left: 0, right: 0 }}
                    blurRadius={10}
                >
                    <View style={styles.viewBody}>
                        <HeaderPage 
                            close={() => navigation.goBack()}
                            userLoading={usuario.isLogin}
                            stateFavorito={false} 
                            id={data.id.toString()}
                            editora={data.editora} 
                            titulo={data.titulo} 
                        />
                        <Animated.Image 
                            source={{ uri: data.capa }}
                            resizeMode='center'
                            style={[thambStyle, { width: '100%', height: 325, }]}
                        />

                    </View>
                </ImageBackground>   
            </Animated.View>
            <View>
                <Animated.ScrollView 
                    entering={FadeInLeft.duration(900)}
                    onScroll={scrollHandler}
                    scrollEventThrottle={16}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingTop: 460, paddingBottom: 20, backgroundColor: '#fff' }}
                >
                    
                    <View style={{ paddingHorizontal: 20, backgroundColor: 'transparent' }}>
                        <Text style={styles.title}>Personagem Destaque</Text>
                        <View style={styles.viewPD}>
                            <Text style={styles.textPerso}>{data.personDestaque}</Text>
                            <View style={styles.viewNota}>
                                <Icons name="flash" size={20} color="#F1D60F" />
                                <Text style={{ fontSize: 20 }}>{data.nota}</Text>
                            </View>
                        </View>
                        
                        <Text style={styles.title}>Sinopse</Text>
                        {data.sinopse.map((item: string, index: number) => (
                            <Text key={index} style={styles.texts} >
                                {item}
                            </Text>
                        ))}
                        <Text style={[styles.title, { marginBottom: 10 }]} >Equipe</Text>
                        <View style={styles.viewEquipe}>
                            {data.equipe.map((item: {image: string, text: string}, index: number) => (
                                <View key={index} style={{ marginBottom: 10 }}>
                                    <Image 
                                        source={{ uri: item.image }}
                                        style={{ width: 150, height: 200, borderRadius: 10 }}
                                    />
                                    <Text style={styles.descEquipe} >
                                        {item.text}
                                    </Text>
                                </View>
                            ))}
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 20 }}>
                            <Pressable style={{ backgroundColor: '#000', width: 200, paddingVertical: 20, borderRadius: 40, alignItems: 'center' }}>
                                <Text style={{ color: "#ffff", fontSize: 22 }}>Leia Agora</Text>
                            </Pressable>
                        </View>
                    </View>
                </Animated.ScrollView>
            </View>
        </View>
    );
}