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
        width: 50, 
        height: 50, 
        left: 330, 
        top: 40,
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