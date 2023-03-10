import React, {useState, useEffect, ReactNode} from 'react';
import { View, FlatList, Text,Pressable, Animated, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { theme } from '../../themes';

import { styles } from './styles';

const { height } = Dimensions.get('screen')

type PropsModal = {
    show: boolean,
    sign: boolean,
    signIn: () => void,
    signUp: () => void,
    children: ReactNode
}

export function ModalLogin (props: PropsModal){

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
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 95, marginBottom: 10 }}>
                    <Pressable onPress={props.signIn} style={{ }}>
                        <Text style={{ 
                            fontFamily: theme.title, 
                            fontSize: 20, 
                            paddingBottom: 2, 
                            color: props.sign ? theme.colors.destaque : "#C8C8C8", 
                            borderBottomWidth: props.sign ? 2.5 : 0, 
                            borderColor: props.sign ? theme.colors.destaque : "#C8C8C8"
                        }} >
                            Sign In
                        </Text>
                    </Pressable>
                    <Text style={{ fontSize: 20, marginHorizontal: 15, color: "#C8C8C8", fontFamily: theme.title }}>|</Text>
                    <Pressable onPress={props.signUp}>
                        <Text style={{ 
                            fontSize: 20, 
                            fontFamily: theme.title,
                            color: !props.sign ? theme.colors.destaque : "#C8C8C8", 
                            borderBottomWidth: !props.sign ? 2.5 : 0, 
                            borderColor: !props.sign ? theme.colors.destaque : "#C8C8C8" 
                        }} >
                            Sign Up
                        </Text>
                    </Pressable>
                </View>
                {props.children}
            </Animated.View>
        </Animated.View>
    );
}