import React, { useEffect, useState } from 'react';
import { View, Text, Image,  ScrollView, Dimensions, FlatList, TouchableOpacity, ActivityIndicator, Pressable } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import Animated, {useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, interpolate, Extrapolate, BounceInRight, FadeInLeft, FadeInDown, RotateInDownLeft} from 'react-native-reanimated';
import  *  as  Progress  from  'react-native-progress';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native'; 
import { useDispatch, useSelector } from 'react-redux';

import { HeaderPage } from '../../components/Header';
import { propsStack } from '../../services/types';
import { styles } from './styles';
import { RootState } from '../../store/index';
import { HabilidadeBar } from '../../components/HabilidadeBar';
import { theme } from '../../themes';

const {width} = Dimensions.get('window')

export function PagePerso(){

    const navigation = useNavigation<propsStack>();
    const usuario = useSelector((state: RootState) => state.usuario)
    const route = useRoute()
    const data = route.params?.data;
    const dispatch = useDispatch();
    
    const [historia, setHistoria] = useState(true);
    const [poderes, setPoderes] = useState(false);
    const [habilidades, setHabilidades] = useState(false);
    const [imagens, setImagens] = useState(false);


    const scrollY = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y;
    });


    const headerStyle = useAnimatedStyle(() => {
        return {
            height: interpolate(
                scrollY.value,
                [0, 350],
                [440, 90],
                Extrapolate.CLAMP,
            ),
        };
    });

    const thambStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                scrollY.value,
                [0, 250],
                [1, 0],
                Extrapolate.CLAMP,
            ),
        };
    });
    const logoStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                scrollY.value,
                [100, 250],
                [1, 0],
                Extrapolate.CLAMP,
            ),
        };
    });

    return(
        <View style={{ backgroundColor: theme.colors.fundo, paddingTop: 24 }} >
            <Animated.ScrollView 
                entering={FadeInLeft.duration(900)}
                onScroll={scrollHandler}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                contentContainerStyle={{  }}
            >
                <LinearGradient colors={[ "#1C1F26", "#2A353D" ]} key={data.id} style={{ flex: 1, paddingBottom: 24, width: width }}>
                    <View style={{ flex: 1,  paddingTop: 24 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 24 }}>
                            <Pressable onPress={() => navigation.goBack()} style={{ justifyContent: 'center' }}>
                                <Ionicons name='chevron-down' size={32} color={theme.colors.contraste} />
                            </Pressable>
                            <Pressable style={{  }}>
                                <AntDesign name='hearto' size={32} color={theme.colors.contraste} />
                            </Pressable>
                        </View>

                        <Animated.View entering={RotateInDownLeft.delay(500)} style={{alignItems: 'center', justifyContent: 'center', position: 'absolute' }}>
                            <LinearGradient colors={[data.corPri, data.corSec]} 
                                style={{ width: 200, height: 200, borderRadius: 100, position: 'absolute', top: 95, left: 230, elevation: 50, shadowColor: data.corPri }} 
                            />
                            {/* <View style={{ backgroundColor: theme.colors.fundo, width: 200, height: 200, borderRadius: 100, position: 'absolute', top: 95, left: 230 }} /> */}

                            <Image 
                                source={{ uri: data.thamb }} 
                                style={{ width: 250, height: 300, position: 'absolute', zIndex: 0, top: 40, left: 220 }} 
                                resizeMode='contain'
                                borderRadius={16}
                            />
                        </Animated.View>

                        <Animated.View entering={FadeInDown.delay(500)}>
                            <View style={{ marginTop: 50, paddingLeft: 20, marginBottom: 10 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={[styles.title, { fontSize: 22, marginBottom: 2 }]}>{data.nomePerso}</Text>
                                    {data.logo != "" ? 
                                        <Image 
                                            source={{ uri: data.logo }} 
                                            style={{ width: 24, height: 24, marginLeft: 5 }} 
                                            resizeMode='contain'
                                        />
                                    :null}
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', maxWidth: 190 }}>
                                    <Text style={styles.text}>{data.nome}</Text>
                                    <Text style={[styles.text, { textAlign: 'center' }]}>{data.especie?.split(" ")[0]}{'\n'}{data.especie?.split(" ")[1]}</Text>
                                </View>

                                <View style={{ marginTop: 20, marginBottom: 10 }}>
                                    <Text style={[styles.title, { fontSize: 14, marginBottom: 2 }]}>Primeira Aparição:</Text>
                                    <Text style={[styles.text]}>{data.PA.split("(")[0]}{'\n('}{data.PA.split("(")[1]}</Text>
                                </View>
                            </View>

                            {/* <View style={{ width: width, height: 200, elevation: 10, top: 210, borderRadius: 20,  position: 'absolute', shadowColor: data.corPri }} /> */}

                            <FlatList 
                                data={data.imagens.slice(1,4)}
                                keyExtractor={(_,index) => index.toString()}
                                horizontal
                                scrollEventThrottle={16}
                                showsHorizontalScrollIndicator={false}
                                snapToInterval={width-50}
                                decelerationRate={0}
                                contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', marginBottom: 10, paddingHorizontal: 10 }}
                                renderItem={({ item }) => (
                                    <View style={{ width: width-50, marginRight: 10, alignItems: 'center'}}>
                                        <Image 
                                            source={{ uri: item }} 
                                            style={{ width: width-50, height: 200 }} 
                                            borderRadius={16}
                                            resizeMode='cover'
                                        />
                                    </View> 
                                )}
                            />

                            <View style={{ paddingHorizontal: 16, borderRadius: 20, paddingTop: 16 }}>

                                <View style={{  }}>
                                    <Text style={styles.title}>Sinopse</Text>
                                    {data.sinopse.map((item, index) => (
                                        <Text key={index} style={styles.text} >{item}</Text>
                                    ))}
                                </View>

                                <View style={{ flex: 1, paddingBottom: 100 }}>
                                    <View style={{  marginTop: 8 }}>
                                        <Text style={styles.title}>Criadores</Text>
                                        <View style={{ flexDirection: 'row', marginLeft: 5  }}>
                                            {data.criadores.map((item, index: number) => (
                                                <View key={index} style={{ marginBottom: 20, alignItems :'center', marginRight: index != data.criadores.length-1 ? 20 : 0 }}>
                                                    <Image 
                                                        source={{ uri: item.image }}
                                                        style={{ width: 60, height: 60, borderRadius: 30 }}
                                                    />
                                                    <Text style={styles.text} >
                                                        {item.nome}
                                                    </Text>
                                                </View>
                                            ))}
                                        </View>
                                    </View>

                                    <View style={styles.barTools} >
                                        <TouchableOpacity 
                                            style={{ 
                                                borderBottomColor: !historia ? "#f2f2f2" : data.corPri , 
                                                borderBottomWidth: historia ? 1 : 0, marginRight: 10 
                                            }} 
                                            onPress={() => {  setHistoria(true), setPoderes(false), setHabilidades(false), setImagens(false)}}
                                        >
                                            <Text style={ styles.title }>História</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity 
                                            style={{ 
                                                borderBottomColor: !poderes ? "#f2f2f2" : data.corPri, 
                                                borderBottomWidth: poderes ? 1 : 0, marginRight: 10 
                                            }} 
                                            onPress={() => { setHistoria(false), setPoderes(true), setHabilidades(false), setImagens(false)}}
                                        >
                                            <Text style={ styles.title }>Poderes</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity 
                                            style={{ 
                                                borderBottomColor: !habilidades ? "#f2f2f2" : data.corPri, 
                                                borderBottomWidth: habilidades ? 1 : 0, marginRight: 10 
                                            }} 
                                            onPress={() => { setHistoria(false), setPoderes(false), setHabilidades(true), setImagens(false)}}
                                        >
                                            <Text style={ styles.title }>Habilidades</Text>
                                        </TouchableOpacity>
                                    </View>

                                    {historia ? 
                                        <View style={{ paddingTop: 16 }}>
                                            {data.historia?.map((item, index) => (
                                                <View key={index}>
                                                    <Text style={[styles.title, { fontSize: 16 }]}>{item.title}</Text>
                                                    {item.text?.map((item, index) => (
                                                        <Text key={index} style={[styles.text]}>{item}</Text>
                                                    ))}
                                                </View>
                                            ))}
                                        </View>
                                    : null}

                                    {poderes ? 
                                        <View style={{ paddingTop: 20 }}>
                                            <View style={{ width: width-40, alignItems: 'flex-end' }}>
                                                {/* <Pressable onPress={Test2} style={{  }}>
                                                    <Ionicons name={indexUser === 1 ? "chevron-up-outline" : 'chevron-down-outline'} size={26} color='#000' />
                                                </Pressable> */}
                                            </View>
                                            {data.poderes?.map((item,index) => (
                                                <Animated.View key={index} style={[{ width: width-40 }]}>
                                                    {/* <View style={styles.viewPoderes}>
                                                        <View style={{ width: 7, height: 7, marginRight: 10, borderRadius: 20, backgroundColor: "#000" }} />
                                                        <Text style={{ fontSize: 14, lineHeight: 22 }} >{item.poder}</Text>
                                                    </View>
                                                    <Animated.View style={[teste2, styles.viewPoderesDesc]}>
                                                        <Text>{item.desc}</Text>
                                                    </Animated.View> */}
                                                </Animated.View>
                                            ))}
                                        </View>
                                    : null}

                                    {habilidades ? 
                                        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                                            {data.habilidades.map((item, index) => (
                                            <View key={index} style={{ width: 150, height: 150, marginRight: index%2 === 0 ? 20 : 0, marginBottom: 15, alignItems: 'center', justifyContent: 'center' }}>        
                                                <Progress.Circle 
                                                    size={120}
                                                    progress={item.number * 10**-1}
                                                    showsText={true}
                                                    textStyle={{ color: "#f2f2f2" }}
                                                    formatText={() => <Text>{item.number}</Text>}
                                                    strokeCap={"butt"}
                                                    thickness={15}
                                                    color={
                                                        index === 0 ? "#DC7633" : 
                                                        index === 1 ? "#8E44AD" : 
                                                        index === 2 ? "#3498DB" : 
                                                        index === 3 ? "#2ECC71" :
                                                        index === 4 ? "#F4D03F" :
                                                        index === 5 ? "#E74C3C" : "#000"
                                                    }
                                                    borderWidth={0}
                                                    unfilledColor='#EAECEE'
                                                />
                                                <Text style={{ color: theme.colors.contraste }}>{item.titulo}</Text>
                                            </View>
                                            ))}
                                        </View>
                                    : null}
                                </View>
                            </View>
                        </Animated.View>
                    </View>
                </LinearGradient>
            </Animated.ScrollView>
        </View>
    );
}