import React from "react";
import { Dimensions, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

import { PropsRouteListTab } from "../services/types";
import { Explorar } from "../pages/Explorar";
import { Pessoal } from "../pages/Pessoal";
import { theme } from "../themes";
import { Galeria } from "../pages/Galeria";

const { width, height } = Dimensions.get('window');
const Tab = createBottomTabNavigator<PropsRouteListTab>();

export default function TabRoutes() {
    return(
        <Tab.Navigator
            initialRouteName='Explorar'
            screenOptions={{ 
                headerShown: false, 
                tabBarLabel: "",
                // swipeEnabled: false,
                tabBarStyle: { 
                    height: 64,
                    borderTopColor: "transparent", 
                    backgroundColor: theme.colors.destaque, 
                    position: 'absolute', 
                    // top: -10 ,
                    // left: 20,
                }, // Tada a view
                tabBarItemStyle: { marginTop: 12 }, // Estilo do item
                // tabBarLabelStyle: { fontSize: 12 }, //  Estilo do texto
                tabBarInactiveTintColor: theme.colors.contraste,
                tabBarActiveTintColor: theme.colors.contraste,
                // tabBarActiveBackgroundColor: '#000',
            }}
            >
            <Tab.Screen name='Explorar' component={Explorar} 
                options={{
                    tabBarIcon: ({ color,focused,size }) => (
                        <View style={{ 
                            // width: 40, 
                            height: 40, 
                            padding: 10, 
                            borderRadius: 30, 
                            alignItems: 'center', 
                            flexDirection: "row",
                            backgroundColor: focused ? theme.colors.destaqueTabActi : theme.colors.destaque,
                        }}>
                            <Ionicons 
                                name={focused ? 'planet': 'planet-outline'} 
                                size={20} 
                                color={color} 
                                style={{ top: -2, marginRight: 4 }}
                            />
                            {focused ? 
                                <Text style={{ color }}>Explorar</Text>
                            :null}
                        </View>
                    )
                }}
            />
            
            <Tab.Screen name='Galeria' component={Galeria} 
                options={{
                    tabBarIcon: ({ color,focused,size }) => (
                        <View style={{  
                            height: 40, 
                            padding: 10, 
                            borderRadius: 30, 
                            alignItems: 'center', 
                            flexDirection: 'row',
                            backgroundColor: focused ? theme.colors.destaqueTabActi : theme.colors.destaque,
                        }}>
                            <Ionicons 
                                name={focused ? 'images': 'images-outline'} 
                                size={20} 
                                color={color} 
                                style={{ top: -2, marginRight: 4 }}
                            /> 
                             {focused ? 
                                <Text style={{ color }}>Galeria</Text>
                            :null}
                        </View> 
                    ) 
                }} 
            />

            <Tab.Screen name='Pessoal' component={Pessoal} 
                options={{                    
                    tabBarIcon: ({ color,focused,size }) => (
                        <View style={{ 
                            height: 40, 
                            padding: 10, 
                            borderRadius: 30, 
                            alignItems: 'center', 
                            flexDirection: "row",
                            backgroundColor: focused ? theme.colors.destaqueTabActi : theme.colors.destaque,
                        }}>
                            <Ionicons 
                                name={focused ? 'person': 'person-outline'} 
                                size={20} 
                                color={color} 
                                style={{ top: -2, marginRight: 4 }}
                            />
                             {focused ? 
                                <Text style={{ color }}>Explorar</Text>
                            :null} 
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
        
    );
}