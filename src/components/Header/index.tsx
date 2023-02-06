import React, { useState } from 'react';
import { View, Text, Pressable, Image, Animated, Easing } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { deleteFavoritos, setFavoritos } from '../../store';
import { propsStack } from '../../services/types';
import firebase from '../../serverData/connect';

type PropsHeader = {
    title: string,
    settings?: () => void,
    image?: string,
    back?: any,
    perfil?: any,
    colorBack?: string 
}
type PropsHeaderPage = {
    titulo: string,
    id: number,
    editora: string,
    stateFavorito: boolean,
    userLoading: boolean,
    modal?: boolean, 
    close?: () => void
}

export function Header(props: PropsHeader){

    const navigation = useNavigation<propsStack>();

    return(
        <>
            {props.back && 
                <View style={[styles.container, { backgroundColor: 'transparent' }]}>
                    <Pressable style={{ marginRight: 10 }} onPress={() => navigation.goBack()} >
                        <Icons name='chevron-back-outline' size={26} color='#fff' />
                    </Pressable>
                    <Text style={styles.titleHeader} >{ props.title }</Text>
                    <View style={{padding: 2, borderRadius: 30 }}>
                        
                    </View>
                </View>
            }
            {!props.back && !props.perfil &&
                <>
                    <View style={[styles.container, { backgroundColor: props.colorBack }]}>
                        <Text style={styles.titleHeader} >{ props.title }</Text>
                        <Pressable style={{ backgroundColor: '#fff', marginLeft: 20, elevation: 5, padding: 3, justifyContent: 'center', alignItems: 'center', borderRadius: 50, shadowColor: "#fff" }} onPress={props.settings}>
                            <Image 
                                source={{ uri: props.image }} 
                                style={{ width: 38, height: 38, borderRadius: 30 }} 
                            />
                        </Pressable>
                    </View>
                    {/* <LinearGradient colors={[props.colorBack, "transparent"]} style={{ width: "100%", height: 10 }} /> */}
                </>
            }
        </>
    );
}

export function HeaderPage(props: PropsHeaderPage){

    const navigation = useNavigation();
    const dispatch = useDispatch()
    const [buttomHeart, setButtomHeart] = useState(false);

    async function SetFavoritos(id: number) {
        if (props.userLoading) {
            setButtomHeart(true);
            dispatch(setFavoritos(id));
        }
    }
    async function DeleteFavoritos(id: number) {
        if (props.userLoading) {
            setButtomHeart(false);
            dispatch(deleteFavoritos(id));
        }
    }

    return(
        <View style={{ width: '100%', backgroundColor: 'transparent', marginBottom: 10, paddingHorizontal: 20, paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            {props.modal ? 
                <Pressable style={styles.headerIcons} onPress={props.close}>
                    <Icons name='close' size={28} color='#000' />
                </Pressable>
            :
                <Pressable style={styles.headerIcons} onPress={() => navigation.goBack()}>
                    <Icons name='chevron-back' size={28} color='#000' />
                </Pressable>
            }

            <Text style={{ fontSize: 22, fontWeight: '700', color: '#fff' }}>{props.titulo}</Text>

            {props.stateFavorito && props.userLoading ? 
                <Pressable style={styles.headerIcons} onPress={() => DeleteFavoritos(props.id)}>
                    <Icons name='heart' size={28} color='#F50303' />
                </Pressable>
            :
                <>
                    {buttomHeart ? 
                         <Pressable style={styles.headerIcons} onPress={() => DeleteFavoritos(props.id)}>
                            <Icons name='heart' size={28} color='#F50303' />
                        </Pressable>
                    :
                        <Pressable style={styles.headerIcons} onPress={() => SetFavoritos(props.id)}>
                            <Icons name='heart-outline' size={28} color='#000' />
                        </Pressable>
                    }
                </>
            }

        </View>
    );
}