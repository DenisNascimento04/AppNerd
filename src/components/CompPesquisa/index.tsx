import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'; 
import { styles } from './styles';
import { propsStack } from '../../services/types';

type PropsCompPesquisaCont ={
    setText: (text: string) => void,
    setfilter: () => void
}
 
export function CompPesquisa(){

    const navigation = useNavigation<propsStack>();
    const [pesquisa, setPesquisa] = useState("");

    return(
        <View style={styles.container}>
            <View style={styles.viewInput}>
                <TouchableOpacity onPress={() => navigation.navigate('PageVerTudo',{pesquisa: pesquisa})} style={styles.button}>
                    <Icons name='search' size={20} color='#858383' />
                </TouchableOpacity>
                <TextInput  
                    style={{ flex: 1 }}
                    onChangeText={(text) => setPesquisa(text)}
                    placeholder='Pesquisa...'
                    placeholderTextColor='#858383'
                    onSubmitEditing={() => navigation.navigate('PageVerTudo',{pesquisa: pesquisa})}
                />
            </View>
        </View>
    );
}
export function CompPesquisaCont(props:PropsCompPesquisaCont){

    return(
        <View style={styles.container}>
            <View style={styles.viewInput}>
                <TouchableOpacity style={styles.button}>
                    <Icons name='search' size={20} color='#ACAAAA' />
                </TouchableOpacity>
                <TextInput  
                    style={{ flex: 1 }}
                    onChangeText={props.setText}
                    placeholder='Pesquise....'
                    placeholderTextColor='#ACAAAA'
                    onSubmitEditing={props.setfilter}
                />
            </View>
        </View>
    );
}