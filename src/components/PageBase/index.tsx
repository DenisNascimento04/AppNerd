import { StatusBar } from 'expo-status-bar';
import React, { ReactNode, useRef, useState } from 'react';
import { View, Animated, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { Header } from '../Header';
import { propsDrawer, PropsPerso, propsStack } from '../../services/types';
import AnimatedScroll,{ Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { Modalize } from 'react-native-modalize';
import { ModalPerso } from '../ModalPerso';
import { theme } from '../../themes';

type PropsPageBase = {
    title: string,
    image: string,
    children: ReactNode,
    // modalProps: RefObject<Modalize>,
    backgroudColor: string 
    backHeader: string
}

const { width, height } = Dimensions.get('window')

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

    const onPressUser = () => {
        setIndexUser(indexUser === 1 ? 0 : 1)
        animation(indexUser === 1 ? 0 : 1).start()
    } 

    return(
        <>
            <View style={{flex: 1, backgroundColor: props.backgroudColor }}>
                <View style={{ position: 'absolute', top: 0, zIndex: 999 }}>
                    <Header colorBack={props.backHeader} image={props.image} title={props.title} settings={() => onPressUser()} />
                </View>
                <AnimatedScroll.ScrollView 
                    contentContainerStyle={{ paddingBottom: 80, paddingTop: 80 }} 
                    style={{ zIndex: -99 }} 
                    onScroll={scrollHandler} 
                    scrollEventThrottle={16} 
                    showsVerticalScrollIndicator={false} 
                >
                    <View style={{ paddingTop: 20 }}>
                        {/* <Animated.View style={[styles.teste, {
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
                        </Animated.View> */}
                    </View>
                    {props.children}
                </AnimatedScroll.ScrollView>
            </View>
            {/* <Modalize
                ref={props.modalProps}
                modalHeight={height-7}
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
            </Modalize> */}
        </>
    );
}