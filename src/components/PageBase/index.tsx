import { StatusBar } from 'expo-status-bar';
import React, { ReactNode, RefObject, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { Header } from '../Header';
import { propsDrawer, PropsPerso, propsStack } from '../../services/types';
import { ScrollView } from 'react-native-gesture-handler';
import AnimatedScroll,{ Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { Modalize } from 'react-native-modalize';
import { ModalPerso } from '../ModalPerso';

type PropsPageBase = {
    title: string,
    image: string,
    frase: string,
    children: ReactNode,
    dataModal: PropsPerso | undefined,
    modalProps: RefObject<Modalize>,
    backgroudColor: string 
}

const { height } = Dimensions.get('window')

export function PageBase(props: PropsPageBase){

    const navigation = useNavigation<propsDrawer>();
    const navigationStack = useNavigation<propsStack>();
    const scrollY = useSharedValue(0);
    const [indexUser, setIndexUser] = useState(0);
    const animatedValue = useRef(new Animated.Value(0)).current;
    const animation = (toValue: number) => Animated.timing(animatedValue, {
        toValue,
        duration: 500,
        useNativeDriver: false
    })

    const scrollHandler = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y;
    });

    const headerScroll = useAnimatedStyle(() => {
        return {
            transform: [{
                translateY: interpolate(
                    scrollY.value,
                    [0, 500, 600],
                    [0, 0, -200],
                    Extrapolate.CLAMP,
                ),
            }],
        };
    });

    function Close() {
        props.modalProps.current?.close();
    }


    const onPressUser = () => {
        setIndexUser(indexUser === 1 ? 0 : 1)
        animation(indexUser === 1 ? 0 : 1).start()
    } 

    return(
        <>
            <SafeAreaView style={{flex: 1, backgroundColor: props.backgroudColor }}>
                <StatusBar style='light' backgroundColor="transparent" />
                <AnimatedScroll.View style={[headerScroll, { position: 'absolute',top: 25, left: 0, right: 0 }]}>
                    <Header colorBack={props.backgroudColor} image={props.image} title={props.title} settings={() => onPressUser()} />
                </AnimatedScroll.View>
                <Animated.View style={[styles.teste, {
                    transform: [
                        {
                            perspective: 400
                        },
                        {
                            translateX: animatedValue.interpolate({
                                inputRange: [0, 0.5, 1],
                                outputRange: [100, 55, 0],
                            })
                        },
                        {
                            translateY: animatedValue.interpolate({
                                inputRange: [0, 0.5, 1],
                                outputRange: [-120, -55, 0],
                            })
                        },
                        {
                            scale: animatedValue.interpolate({
                                inputRange: [0, 0.5, 1],
                                outputRange: [0, 0.5, 1],
                            })
                        },
                    ]
                }]}>
                    <View>
                        <Text style={styles.frase}>{props.frase}</Text>
                    </View>
                    <TouchableOpacity onPress={() => {navigationStack.navigate('Perfil'), onPressUser()}} style={{ marginBottom: 15 }}>
                        <Text>Meu Perfil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginBottom: 15 }}>
                        <Text>Configurações</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginBottom: 15 }}>
                        <Text>Sobre</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginBottom: 15 }}>
                        <Text>Sair</Text>
                    </TouchableOpacity>
                </Animated.View>
                <AnimatedScroll.ScrollView 
                    contentContainerStyle={{ marginTop: 85, paddingBottom: 80 }} 
                    style={{ zIndex: -99 }} 
                    onScroll={scrollHandler} 
                    scrollEventThrottle={16} 
                    showsVerticalScrollIndicator={false} 
                >
                    {props.children}
                </AnimatedScroll.ScrollView>
            </SafeAreaView>
            <Modalize
                ref={props.modalProps}
                modalHeight={height}
                disableScrollIfPossible={false}
                scrollViewProps={{
                    scrollEnabled: undefined,
                    showsVerticalScrollIndicator: false,
                }}
                handlePosition='inside'
            >
                <ModalPerso
                    // @ts-ignore 
                    data={props.dataModal}
                    close={() => Close()}
                />
            </Modalize>
        </>
    );
}