import React, { useEffect, useRef } from 'react';
import { Easing, Image, View, Text, Pressable, Dimensions } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Modalize } from 'react-native-modalize';

import { PropsRouteListStack, PropsRouteListTab } from '../services/types';
import { Principal } from '../pages/Principal';
import { PagePerso } from '../pages/PagePerso';
import Icons from 'react-native-vector-icons/Ionicons';
import { Perfil } from '../pages/Perfil';
import { Testes } from '../pages/Testes';
import { PageQuadrinhos } from '../pages/PageQuadrinhos';
import { PageVerTudo } from '../pages/PageVerTudo';
import { Explorar } from '../pages/Explorar';
import { useDispatch } from 'react-redux';
import { theme } from '../themes';
import { PageNoticia } from '../pages/PageNoticia';
import { LinearGradient } from 'expo-linear-gradient';
import { PesquisarPerso } from '../pages/Pesquisar';
import { Pessoal } from '../pages/Pessoal';
import PageLista from '../pages/PageLista';
import firebase from '../serverData/connect';
import { setIsLogin, setLogin } from '../store';
import { Loja } from '../pages/Loja';
import TabRoutes from './TabRoutes';
import { Produto } from '../pages/Produto';
import { PageImagem } from '../pages/PageImagem';

export type PropsStack = StackScreenProps<PropsRouteListStack, 'PagePerso'>

const Tab = createBottomTabNavigator<PropsRouteListTab>();
const Stack = createStackNavigator<PropsRouteListStack>();

export function Routes(){


    const dispatch = useDispatch();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
        if (user) {
            user.uid
            firebase.firestore().collection('Users').where('uid', '==', user.uid)
            .get().then((query) => {
            query.forEach((data) => {
                dispatch(setLogin({...data.data()}));
                dispatch(setIsLogin(true));
                // setAutoLogin(true)
            })
            })
        }
        })
    },[])

    return(
        <NavigationContainer>         
            <Stack.Navigator 
            screenOptions={{
                headerShown: false, 
                transitionSpec: {
                    open: {
                        animation: 'spring',
                        config: {
                        stiffness: 1000,
                        damping: 500,
                        mass: 3,
                        overshootClamping: true,
                        restDisplacementThreshold: 0.01,
                        restSpeedThreshold: 0.01,
                        },
                    },
                    close: {
                        animation: 'timing',
                        config: {
                        duration: 200,
                        easing: Easing.linear
                        },
                    } 
                },
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
        >
            <Stack.Screen name="Larning" component={TabRoutes} options={{  }}/>
            <Stack.Screen name='PesquisarPerso' component={PesquisarPerso} />
            <Stack.Screen name='PageLista' component={PageLista} />
            <Stack.Screen name='PageVerTudo' component={PageVerTudo} />
            <Stack.Screen name='PageQuadrinhos' component={PageQuadrinhos} />
            <Stack.Screen name='PageNoticia' component={PageNoticia} />
            <Stack.Screen name='PageImagem' component={PageImagem} />
            <Stack.Screen name='Produto' component={Produto} />
            <Stack.Screen name='Testes' component={Testes} />
        </Stack.Navigator>
        </NavigationContainer>
    );
}