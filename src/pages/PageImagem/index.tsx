import React, {useEffect, useState} from 'react';
import { Dimensions, Pressable, Text, View, ScrollView, Image } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Animated, {useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, interpolate, Extrapolate} from 'react-native-reanimated';

import { theme } from '../../themes';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RootState } from '../../store/index';
import { useSelector } from 'react-redux';
import { PropsImagens, propsStack } from '../../services/types';
import { ImagemAdap } from '../../components/ImagemAdap';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import * as FileSystem from 'expo-file-system';
import data1 from '../../BDTeste/banco.json';
import { styles } from './styles';
import { Pin } from '../../components/Pin';

const { width, height } = Dimensions.get('window');

export function PageImagem() {

    const route = useRoute()
    const usuario = useSelector((state: RootState) => state.usuario);
    // @ts-ignore
    const data:PropsImagens = route.params?.data;
    const navigation = useNavigation<propsStack>();
    const dataRels = SetRels();
    const scrollY = useSharedValue(0);
    const scrollHandler = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y;
    });
    

    const CardStyle = useAnimatedStyle(() => {
        return {
            top: interpolate(
                scrollY.value,
                [0, 0],
                [height-30, 0],
                Extrapolate.CLAMP,
            ),
        };
    });

    async function downloadImg(url: string) {
          
        const downloadResumable = FileSystem.createDownloadResumable(
            url,
            FileSystem.documentDirectory + "teste1.jpg",
            {},
            () => {}
        );
        
        try {
        const uri = await downloadResumable.downloadAsync();
        console.log('Finished downloading to ', uri);
        } catch (e) {
        console.error(e);
        }

        const permissions = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();

        if (permissions.granted) {
            // Gets SAF URI from response
            const uri = permissions.directoryUri;

            // Gets all files inside of selected directory
            const files = await FileSystem.StorageAccessFramework.readDirectoryAsync(uri);
            alert(`Files inside ${uri}:\n\n${JSON.stringify(files)}`);
        }
    }

    function SetRels() {
        const rels = data1.galeria.filter((item1) => {
            if (item1.id != data.id) {
                var ts = data.tags.filter(item => {
                    if (item1.tags.includes(item)) {
                        return {...item1};
                    }
                }
                );
                if (ts.length >= 1) {
                    return ts;
                }
            }
        })
        return rels;
    }


    return(
        <View style={{ flex: 1, backgroundColor: theme.colors.fundo }}>
            <StatusBar backgroundColor='transparent' style='light' />
            <Pressable style={{ position: "absolute", left: 30, top: 40, zIndex: 999 }}>
                <Ionicons name='chevron-back' size={30} color={theme.colors.contraste}  />
            </Pressable>
            <Animated.View style={[{ width: width,  position: 'absolute',  zIndex: 999, top: height-30, backgroundColor: theme.colors.fundo, paddingVertical: 10, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }]}>
                <Pressable onPress={() => {}} style={{ marginRight: 20 }}>
                    <AntDesign name='download' size={30} color={theme.colors.contraste} />
                </Pressable>
                <Pressable style={{ paddingHorizontal: 20, paddingVertical: 10, backgroundColor: theme.colors.destaque, borderRadius: 30 }}>
                    <Text style={{ color: theme.colors.contraste, fontSize: 18, fontFamily: theme.text }}>Salvar</Text>
                </Pressable>
                <Pressable onPress={() => {}}>
                    <AntDesign name='sharealt' size={30} color={theme.colors.contraste} />
                </Pressable>
            </Animated.View>
            <Animated.ScrollView 
                onScroll={scrollHandler} 
                scrollEventThrottle={16}
                style={{ width: width }}
                contentContainerStyle={{ paddingBottom: 50 }}
            >
                <View>
                    <LinearGradient colors={["#000", "transparent"]} style={styles.gradient} />
                    <ImagemAdap imagem={data.url} />
                </View>
                <View style={{ paddingHorizontal: 20 }}>
                    <View style={{ alignItems: "center" }}>
                        <View>
                            <Text style={styles.titulo}>{data.desc}</Text>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 }}>
                                {data.tags.map((item, index) => (
                                    <Text key={index} style={styles.tags}>#{item}</Text>
                                ))}
                            </View>
                        </View>
                        <Text style={styles.desc}>{data.desc}</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={[styles.coluna, { paddingRight: 10 }]}>
                        {dataRels
                            .filter((_, index) => index % 2 === 0)
                            .map((item, index) => (
                                <Pin pin={item} key={index} />
                            ))
                        }
                    </View>
                    <View style={styles.coluna}>
                        {dataRels
                            .filter((_, index) => index % 2 === 1)
                            .map((item, index) => (
                                <Pin pin={item} key={index} />
                            ))
                        }
                    </View>
                </View>
            </Animated.ScrollView>
        </View>
    );
}