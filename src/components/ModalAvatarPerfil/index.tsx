import React, {useState, useEffect, ReactNode} from 'react';
import { View, FlatList, Text,Pressable, Animated, Dimensions, TextInput } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

const { height } = Dimensions.get('screen')

type PropsModal = {
    show: boolean,
    close?: () => void,
    children: ReactNode
}

export function ModalAvatarPerfil (props: PropsModal){

    const [statusModal, setStatusModal] = useState({
        container: new Animated.Value(height),
        opacity: new Animated.Value(0),
        modal: new Animated.Value(height),
    });

    const openModal = () => {
        Animated.sequence([
            Animated.timing(statusModal.container, { toValue: 0, duration: 0, useNativeDriver: true }),
            Animated.timing(statusModal.opacity, { toValue: 1, duration: 0, useNativeDriver: true }),
            Animated.spring(statusModal.modal, { toValue: 0, bounciness: 0, useNativeDriver: true })
        ]).start()
      }

    const closeModal = () => {
        Animated.sequence([
            Animated.timing(statusModal.modal, { toValue: height, duration: 100, useNativeDriver: true }),
            Animated.timing(statusModal.opacity, { toValue: 0, duration: 100 , useNativeDriver: true}),
            Animated.timing(statusModal.container, { toValue: height, duration: 100, useNativeDriver: true })
        ]).start()
    }

    useEffect(()=>{
        if(props.show){
            openModal()
        }else{
            closeModal()
        }
    }, [props.show])


    return(
        <Animated.View 
            style={[styles.Modal, { 
                opacity: statusModal.opacity,
                transform: [
                    {translateY: statusModal.container}
                ]
            }]}
        >
            <Animated.View 
            style={[styles.contentModal, {
                transform: [
                    {translateY: statusModal.modal}
                ]
            }]}
            >
                <View style={{ width: '100%', justifyContent: 'flex-end', flexDirection: 'row' }} >
                    <Pressable onPress={props.close}>
                        <Icons name='close' size={22} color='#000'/>
                    </Pressable>
                </View>
                {props.children}
            </Animated.View>
        </Animated.View>
    );
}