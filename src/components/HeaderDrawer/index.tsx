import React from 'react';
import { Image, Pressable, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../services/types";
import { RootState } from "../../store/index";



export function HeaderDrawer(props: DrawerContentComponentProps) {

    const usuario = useSelector((state: RootState) => state.usuario)
    const navigationStack = useNavigation<propsStack>();

    return(
        <DrawerContentScrollView>
            <View style={{ backgroundColor: '#000', marginHorizontal: 15, paddingVertical: 20, marginBottom: 30, borderRadius: 20, flexDirection: 'row', paddingLeft: 10, alignItems: 'center' }}>
                <Image 
                    source={{ uri: usuario.imagePerfil }} 
                    style={{ width: 45, height: 45, borderRadius: 30, marginRight: 10 }} 
                />
                <Pressable onPress={() => navigationStack.navigate("Perfil")}>
                    <Text style={{ color: '#D40D0D' }}>{usuario.nome}</Text>
                </Pressable>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}