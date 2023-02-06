import React from 'react';
import { StyleSheet } from "react-native";
import { theme } from '../../themes';

export const styles = StyleSheet.create({

    heades: {
        backgroundColor: theme.colors.fundo, 
        paddingTop: 40, 
        paddingHorizontal: 20, 
        paddingBottom: 20, 
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },

    buttons: {
        width: 45, 
        height: 45, 
        borderRadius: 40, 
        backgroundColor: theme.colors.contraste, 
        alignItems: 'center', 
        justifyContent: 'center'
    },

    buttonAdd: {
        position: 'absolute', 
        backgroundColor: theme.colors.destaque, 
        padding: 15,
        left: 320, 
        top: 60,
        flexDirection: 'row',
        alignItems: "center", 
        justifyContent: "center", 
        borderRadius: 40, 
    },

    buttonAddTrue: {
        position: 'absolute', 
        backgroundColor: theme.colors.destaque, 
        paddingHorizontal: 10,
        paddingVertical: 5,
        left: 270, 
        top: 60,
        flexDirection: 'row',
        alignItems: "center", 
        justifyContent: "center", 
        borderRadius: 40, 
    },

    titulo: {
        fontFamily: theme.title,
        fontSize: 20,
    },
    text: {
        fontFamily: theme.text,
        fontSize: 18,
    }
}) 