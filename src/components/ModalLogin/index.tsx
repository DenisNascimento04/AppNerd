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
           <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 95, marginBottom: 10 }}>
                <Pressable onPress={props.signIn} style={{ }}>
                    <Text style={{ 
                        fontFamily: theme.titleRubik, 
                        fontSize: 20, 
                        paddingBottom: 2, 
                        color: props.sign ? theme.colors.light : "rgba(258,258,258,0.8)", 
                        borderBottomWidth: props.sign ? 2.5 : 0, 
                        borderColor: props.sign ? theme.colors.light : "rgba(258,258,258,0.8)"
                    }} >
                        Sign In
                    </Text>
                </Pressable>
                <Text style={{ fontSize: 20, marginHorizontal: 15, color: "#fff", fontFamily: theme.titleRubik }}>|</Text>
                <Pressable onPress={props.signUp}>
                    <Text style={{ 
                        fontSize: 20, 
                        fontFamily: theme.titleRubik,
                        color: !props.sign ? theme.colors.light : "rgba(258,258,258,0.8)", 
                        borderBottomWidth: !props.sign ? 2.5 : 0, 
                        borderColor: !props.sign ? theme.colors.light : "rgba(258,258,258,0.8)" 
                    }} >
                        Sign Up
                    </Text>
                </Pressable>
            </View>
            <Animated.View 
            style={[styles.contentModal, {
                transform: [
                    {translateY: statusModal.modal}
                ]
            }]}
            >
                {props.children}
            </Animated.View>
        </Animated.View>
    );
}