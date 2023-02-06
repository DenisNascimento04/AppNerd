import React, { useEffect } from 'react';
import { Easing } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { PropsRouteListStack, PropsRouteListTab } from '../services/types';
import { Testes } from '../pages/Testes';
import { PageQuadrinhos } from '../pages/PageQuadrinhos';
import { useDispatch } from 'react-redux';
import { PesquisarPerso } from '../pages/Pesquisar';
import PageLista from '../pages/PageLista';
import firebase from '../serverData/connect';
import { setIsLogin, setLogin } from '../store';
import TabRoutes from './TabRoutes';
import { Produto } from '../pages/Produto';
import { PageImagem } from '../pages/PageImagem';
import { Carrinho } from '../pages/Carinho';
import { PagePerso } from '../pages/PagePerso';

export type PropsStack = NativeStackScreenProps<PropsRouteListStack, 'PagePerso'>

const Tab = createBottomTabNavigator<PropsRouteListTab>();
const Stack = createNativeStackNavigator<PropsRouteListStack>();

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
            }}
        >
            <Stack.Screen name="Larning" component={TabRoutes} options={{  }}/>
            <Stack.Screen name='PesquisarPerso' component={PesquisarPerso} />
            <Stack.Screen name='PageLista' component={PageLista} />
            <Stack.Screen name='Carrinho' component={Carrinho} />
            <Stack.Screen name='PageQuadrinhos' component={PageQuadrinhos} />
            <Stack.Group screenOptions={{ presentation: 'modal', animation: "slide_from_bottom" }}>
                <Stack.Screen name='PagePerso' component={PagePerso} />
            </Stack.Group>
            <Stack.Screen name='PageImagem' component={PageImagem} />
            <Stack.Screen name='Produto' component={Produto} />
            <Stack.Screen name='Testes' component={Testes} /> 
        </Stack.Navigator>
        </NavigationContainer>
    );
}