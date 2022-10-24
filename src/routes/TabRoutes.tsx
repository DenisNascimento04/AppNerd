import React from "react";
import { Dimensions, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

import { PropsRouteListTab } from "../services/types";
import { Principal } from "../pages/Principal";
import { Explorar } from "../pages/Explorar";
import { Loja } from "../pages/Loja";
import { Pessoal } from "../pages/Pessoal";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../themes";
import { Galeria } from "../pages/Galeria";

const { width, height } = Dimensions.get('window');
const Tab = createBottomTabNavigator<PropsRouteListTab>();

export default function TabRoutes() {
    return(
        <Tab.Navigator
                initialRouteName='Loja'
                screenOptions={{ 
                    headerShown: false, 
                    tabBarLabel: "",
                    // swipeEnabled: false,
                    tabBarStyle: { 
                        height: 68,
                        width: width-40,
                        paddingBottom: 5, 
                        paddingTop: 15, 
                        paddingHorizontal: 20,
                        borderRadius: 40,
                        borderTopColor: "transparent", 
                        backgroundColor: "#0D0D0D", 
                        position: 'absolute', 
                        top: 740 ,
                        left: 20,
                    }, // Tada a view
                    tabBarItemStyle: {  }, // Estilo do item
                    // tabBarLabelStyle: { fontSize: 12 }, //  Estilo do texto
                    tabBarInactiveTintColor: theme.colors.contraste,
                    tabBarActiveTintColor: theme.colors.contraste,
                    // tabBarActiveBackgroundColor: '#000',
                }}
                >
                <Tab.Screen name='Loja' component={Loja} 
                    options={{              
                        tabBarIcon: ({ color,focused,size }) => (
                            <View style={{ 
                                width: 40, 
                                height: 40, 
                                padding: 10, 
                                borderRadius: 30, 
                                alignItems: 'center', 
                                backgroundColor: focused ? theme.colors.destaque : "#0D0D0D",
                                borderWidth: focused ? 0 : .4,
                                borderColor: focused ? "#0D0D0D" : theme.colors.contraste
                            }}>
                                <Ionicons 
                                    name={focused ? 'cart': 'cart-outline'} 
                                    size={20} 
                                    color={color} 
                                /> 
                            </View>
                        )
                    }}
                />
                <Tab.Screen name='Explorar' component={Explorar} 
                    options={{
                        tabBarIcon: ({ color,focused,size }) => (
                            <View style={{ 
                                width: 40, 
                                height: 40, 
                                padding: 10, 
                                borderRadius: 30, 
                                alignItems: 'center', 
                                backgroundColor: focused ? theme.colors.destaque : "#0D0D0D",
                                borderWidth: focused ? 0 : .4,
                                borderColor: focused ? "#0D0D0D" : theme.colors.contraste
                            }}>
                                <Ionicons 
                                    name={focused ? 'planet': 'planet-outline'} 
                                    size={20} 
                                    color={color} 
                                /> 
                            </View>
                        )
                    }}
                />
                <Tab.Screen name='Galeria' component={Galeria} 
                    options={{
                        tabBarIcon: ({ color,focused,size }) => (
                            <View style={{ 
                                width: 40, 
                                height: 40, 
                                padding: 10, 
                                borderRadius: 30, 
                                alignItems: 'center', 
                                backgroundColor: focused ? theme.colors.destaque : "#0D0D0D",
                                borderWidth: focused ? 0 : .4,
                                borderColor: focused ? "#0D0D0D" : theme.colors.contraste
                            }}>
                                <Ionicons 
                                    name={focused ? 'images': 'images-outline'} 
                                    size={20} 
                                    color={color} 
                                /> 
                            </View> 
                        ) 
                    }} 
                />
                <Tab.Screen name='Pessoal' component={Pessoal} 
                    options={{                    
                        tabBarIcon: ({ color,focused,size }) => (
                            <View style={{ 
                                width: 40, 
                                height: 40, 
                                padding: 10, 
                                borderRadius: 30, 
                                alignItems: 'center', 
                                backgroundColor: focused ? theme.colors.destaque : "#0D0D0D",
                                borderWidth: focused ? 0 : .4,
                                borderColor: focused ? "#0D0D0D" : theme.colors.contraste
                            }}>
                                <Ionicons 
                                    name={focused ? 'person': 'person-outline'} 
                                    size={20} 
                                    color={color} 
                                /> 
                            </View>
                        )
                    }}
                />
            </Tab.Navigator>
        
    );
}