import React from 'react';
import { Easing, Image, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerScreenProps } from '@react-navigation/drawer';
import { PropsRouteListDrawer, PropsRouteListStack } from '../services/types';

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

                            drawerActiveTintColor: '#FFF',
                            drawerActiveBackgroundColor: '#000',
                            drawerType: 'slide'
                        }}
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
                        <Drawer.Screen name='Vertigo' component={Vertigo} 
                            options={{ 
                                drawerActiveBackgroundColor: '#666768', 
                                drawerLabel: ({ color, focused }) => (
                                    <View>
                                        <Text style={{  marginLeft: -15, color: color, fontSize: focused ? 16 : 14 }}>Vertigo</Text>
                                    </View>
                                ),
                                drawerIcon: ({ focused,size }) => (
                                    <Image source={{ uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/9216c235-7a7a-46fd-ad62-016c213986f7/d84vn7q-586b76f6-4736-4a38-858b-c2be8153f3ab.png' }} style={{ width: focused ? size + 5 : size, height: focused ? size + 5 : size }} /> 
                                )
                            }}
                        />
                        <Drawer.Screen name='DC' component={DC} 
                            options={{
                                drawerActiveBackgroundColor: '#3469E1', 
                                drawerLabel: ({ color, focused }) => (
                                    <View>
                                        <Text style={{  marginLeft: -15, color: color, fontSize: focused ? 16 : 14 }}>DC Comics</Text>
                                    </View>
                                ),
                                drawerIcon: ({ focused,size }) => (
                                    <Image source={{ uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/4aaff140-1f64-4844-93ea-f14dd42d68c1/dcam06n-afa0c62e-58e6-4c9f-8a83-3316950618c7.png' }} style={{ width: focused ? size + 5 : size, height: focused ? size + 5 : size }} /> 
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
                <Stack.Screen name='Explorar' component={Explorar} />
                <Stack.Screen name='Testes' component={Testes} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}