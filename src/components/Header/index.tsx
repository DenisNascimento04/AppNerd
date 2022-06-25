import React, { useState } from 'react';
import { View, Text, Pressable, Image, Animated, Easing } from 'react-native';
import LottieView from 'lottie-react-native';
import { styles } from './styles';
import Icons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { deleteFavoritos, setFavoritos } from '../../store';
import { useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

type PropsHeader = {
    title: string,
    route?: () => void,
    settings?: () => void,
    image?: string,
    back?: any,
    perfil?: any,
    colorBack: string 
}
type PropsHeaderPage = {
    titulo: string,
    id: string,
    editora: string,
    stateFavorito: boolean,
    userLoading: boolean,
    modal?: boolean, 
    close?: () => void
}

export function Header(props: PropsHeader){

    const navigation = useNavigation();

    return(
        <>
            {props.back && 
                <View style={[styles.container, { backgroundColor: 'transparent' }]}>
                    <Pressable style={styles.headerIcons} onPress={() => navigation.goBack()}>
                        <Icons name='chevron-back' size={30} color='#FFFFFF' />
                    </Pressable>
                    <Text style={{ fontSize: 22, width: 190, fontWeight: '700', textAlign: 'center', color: '#fff' }} >{ props.title }</Text>
                    <View style={{padding: 2, borderRadius: 30 }}>
                        
                    </View>
                </View>
            }
            {!props.back && !props.perfil &&
                <>
                    <View style={[styles.container, { backgroundColor: props.colorBack }]}>
                        <Pressable style={styles.headerIconsHome} onPress={props.route}>
                            <Icons name='menu-outline' size={30} color='#000' />
                        </Pressable>
                        <Text style={{ fontSize: 22, width: 190, fontWeight: '700', textAlign: 'center', color: '#fff' }} >{ props.title }</Text>
                        <Pressable style={{ backgroundColor: '#fff', elevation: 5, padding: 3, justifyContent: 'center', alignItems: 'center', borderRadius: 50, shadowColor: "#fff" }} onPress={props.settings}>
                            <Image 
                                source={{ uri: props.image }} 
                                style={{ width: 45, height: 45, borderRadius: 30 }} 
                            />
                        </Pressable>
                    </View>
                    <LinearGradient colors={[props.colorBack, "transparent"]} style={{ width: "100%", height: 20 }} />
                </>
            }
            {props.perfil && 
                <View style={[styles.container, { backgroundColor: 'trasnparent' }]}>
                    <Pressable style={styles.headerIcons} onPress={() => navigation.goBack()}>
                        <Icons name='chevron-back' size={30} color='#FFFFFF' />
                    </Pressable>
                    <View />
                    <Pressable style={styles.headerIcons}>
                        <Icons name='notifications' size={30} color='#FFFFFF' />
                    </Pressable>
                </View>
            }
        </>
    );
}

export function HeaderPage(props: PropsHeaderPage){

    const navigation = useNavigation();
    const dispatch = useDispatch()
    const [buttomHeart, setButtomHeart] = useState(false);

    function SetFavoritos(id: string, editora: string) {
        if (props.userLoading) {
            setButtomHeart(true);
            dispatch(setFavoritos({ id: id, editora: editora }));
        }
    }
    function DeleteFavoritos(id: string, editora: string) {
        if (props.userLoading) {
            setButtomHeart(false);
            dispatch(deleteFavoritos({ id: id, editora: editora }));
        }
    }

    return(
        <View style={{ width: '100%', backgroundColor: 'transparent', marginBottom: 10, paddingHorizontal: 20, paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            
            {props.modal ? 
                <Pressable style={styles.headerIcons} onPress={props.close}>
                    <Icons name='close' size={33} color='#FFF' />
                </Pressable>
            :
                <Pressable style={styles.headerIcons} onPress={() => navigation.goBack()}>
                    <Icons name='chevron-back' size={33} color='#FFF' />
                </Pressable>
            }

            <Text style={{ fontSize: 22, fontWeight: '700', color: '#fff' }}>{props.titulo}</Text>

            {props.stateFavorito && props.userLoading ? 
                <Pressable style={styles.headerIcons} onPress={() => DeleteFavoritos(props.id, props.editora)}>
                    <Icons name='heart' size={33} color='#F50303' />
                </Pressable>
            :
                <>
                    {buttomHeart ? 
                         <Pressable style={styles.headerIcons} onPress={() => DeleteFavoritos(props.id, props.editora)}>
                            <Icons name='heart' size={33} color='#F50303' />
                        </Pressable>
                    :
                        <Pressable style={styles.headerIcons} onPress={() => SetFavoritos(props.id, props.editora)}>
                            <Icons name='heart-outline' size={33} color='#FFF' />
                        </Pressable>
                    }
                </>
            }

        </View>
    );
}