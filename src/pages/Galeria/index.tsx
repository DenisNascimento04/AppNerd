import React, { useState } from "react";
import { View, Image, Text, PixelRatio, Pressable, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useQuery } from "react-query";
import { Ionicons } from '@expo/vector-icons';

import data from '../../BDTeste/banco.json';
import { ImagemAdap } from "../../components/ImagemAdap";
import { theme } from "../../themes";
import { styles } from "./styles";
import { Pin } from "../../components/Pin";
import { TextInput, ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../services/types";
import { RootState } from "../../store/index";
import { useSelector } from "react-redux";

export function Galeria() {

    const usuario = useSelector((state: RootState) => state.usuario)
    const [pesquisa, setPesquisa] = useState("");
    const navigationStack = useNavigation<propsStack>()

    return(
        <View style={{ flex: 1, backgroundColor: theme.colors.fundo, paddingTop: 40 }}>
            <View style={styles.header}>
                <View style={{ alignItems: 'center', flex: 1, marginRight: 8 }}>
                    <View style={styles.viewInput}>
                        <TouchableOpacity onPress={() => {}} style={styles.buttonInput}>
                            <Ionicons name='search' size={20} color='#858383' />
                        </TouchableOpacity>
                        <TextInput  
                            style={{ flex: 1 }}
                            onChangeText={(text) => setPesquisa(text)}
                            placeholder='Pesquisa...'
                            placeholderTextColor='#858383'
                            onSubmitEditing={() => navigationStack.navigate('PesquisarPerso', {text: pesquisa})}
                        />
                    </View>
                </View>
                <Pressable 
                    style={{ backgroundColor: '#fff',  elevation: 5, padding: 3, justifyContent: 'center', alignItems: 'center', borderRadius: 50, marginRight: 32 }} 
                    onPress={() => {}}
                >
                    <Image 
                        source={{ uri: usuario.imagePerfil }} 
                        style={{ width: 40, height: 40, borderRadius: 30 }} 
                    />
                </Pressable>
            </View>
            <ScrollView style={{  }} contentContainerStyle={{ paddingBottom: 70 }}>
                <View style={styles.container}>
                    <View style={[styles.coluna, { paddingRight: 10 }]}>
                        {data.galeria
                            .filter((_, index) => index % 2 === 0)
                            .map((item, index) => (
                                <Pin pin={item} key={index} />
                            ))
                        }
                    </View>
                    <View style={styles.coluna}>
                        {data.galeria
                            .filter((_, index) => index % 2 === 1)
                            .map((item, index) => (
                                <Pin pin={item} key={index} />
                            ))
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}