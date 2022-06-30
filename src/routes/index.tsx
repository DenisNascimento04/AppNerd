import React from 'react';
import { Easing, Image, View, Text, Pressable } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerScreenProps } from '@react-navigation/drawer';
import { PropsRouteListDrawer, PropsRouteListStack, propsStack } from '../services/types';

import { Principal } from '../pages/Principal';
import { Vertigo } from '../pages/Vertigo';
import { PagePerso } from '../pages/PagePerso';
import { DC } from '../pages/DC';
import { Pesquisa } from '../pages/Pesquisa'; 
import Icons from 'react-native-vector-icons/Ionicons';
import { Perfil } from '../pages/Perfil';
import { Testes } from '../pages/Testes';
import { PageQuadrinhos } from '../pages/PageQuadrinhos';
import { PageVerTudo } from '../pages/PageVerTudo';
import { Explorar } from '../pages/Explorar';
import { RootState } from '../store/index';
import { useSelector } from 'react-redux';
import { HeaderDrawer } from '../components/HeaderDrawer';

export type PropsDrawer = DrawerScreenProps<PropsRouteListDrawer, 'Home'>
export type PropsStack = StackScreenProps<PropsRouteListStack, 'PagePerso'>

export function Routes(){

    const Stack = createStackNavigator<PropsRouteListStack>();
    const Drawer = createDrawerNavigator<PropsRouteListDrawer>();

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Larning' screenOptions={{
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
                <Stack.Screen name='Larning' children={() =>(
                    <Drawer.Navigator 
                        screenOptions={{ 
                            headerShown: false, 
                            swipeEnabled: false,
                            drawerStyle: { paddingTop: 20, backgroundColor: '#fff' }, // Tada a view
                            drawerItemStyle: { marginBottom: 10, borderRadius: 10, paddingLeft: 5 }, // Estilo do item
                            drawerLabelStyle: { fontSize: 18, marginLeft: -15 }, //  Estilo do texto

                            drawerInactiveTintColor: '#000',

                            drawerActiveTintColor: '#D40D0D',
                            drawerActiveBackgroundColor: '#000',
                            drawerType: 'slide'
                        }}
                        drawerContent={(props) => (
                                <HeaderDrawer {...props} />
                        )}
                    >
                        <Drawer.Screen name='Home' component={Principal} 
                            options={{ 
                                drawerLabel: ({ color, focused }) => (
                                    <View>
                                        <Text style={{  marginLeft: -15, color: color, fontSize: focused ? 16 : 14 }}>Home</Text>
                                    </View>
                                ),
                                drawerIcon: ({ color,focused,size }) => (
                                    <Icons 
                                        name={focused ? 'home': 'home-outline'} 
                                        size={focused ? size+2 : size } 
                                        color={color} 
                                    /> 
                                    ) 
                                }} 
                        />
                        <Drawer.Screen name='Explorar' component={Explorar} 
                            options={{ 
                                drawerActiveBackgroundColor: '#666768', 
                                drawerLabel: ({ color, focused }) => (
                                    <View>
                                        <Text style={{  marginLeft: -15, color: color, fontSize: focused ? 16 : 14 }}>Explorar</Text>
                                    </View>
                                ),
                                drawerIcon: ({ color, focused,size }) => (
                                    <Icons 
                                        name={focused ? 'planet': 'planet-outline'} 
                                        size={focused ? size+2 : size } 
                                        color={color} 
                                    /> 
                                )
                            }}
                        />
                        <Drawer.Screen name='Configurações' component={DC} 
                            options={{
                                drawerActiveBackgroundColor: '#3469E1', 
                                drawerLabel: ({ color, focused }) => (
                                    <View>
                                        <Text style={{  marginLeft: -15, color: color, fontSize: focused ? 16 : 14 }}>Configurações</Text>
                                    </View>
                                ),
                                drawerIcon: ({ color,focused,size }) => (
                                    <Icons 
                                        name={focused ? 'settings': 'settings-outline'} 
                                        size={focused ? size+2 : size } 
                                        color={color} 
                                    />     
                                ) 
                            }}
                        />
                    </Drawer.Navigator>
                )} />
                <Stack.Screen name='PagePerso' component={PagePerso} />
                <Stack.Screen name='PageVerTudo' component={PageVerTudo} />
                <Stack.Screen name='PageQuadrinhos' component={PageQuadrinhos} />
                <Stack.Screen name='Pesquisa' component={Pesquisa} />
                <Stack.Screen name='Perfil' component={Perfil} />
                {/* <Stack.Screen name='Explorar' component={Explorar} /> */}
                <Stack.Screen name='Testes' component={Testes} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}