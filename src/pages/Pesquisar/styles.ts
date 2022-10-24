import { theme } from './../../themes/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerInput: {
        width: '100%', 
        marginHorizontal: 30, 
        flexDirection: 'row',
        marginBottom: 10
    },

    viewInput: {
        backgroundColor: '#BDBABA', 
        flexDirection: 'row',
        width: 355, 
        justifyContent: 'center', 
        padding: 2, 
        borderRadius: 10,
    },

    buttonInput: {
        // backgroundColor: '#BDB9BF', 
        width: 45, 
        height: 45, 
        alignItems: 'center', 
        justifyContent: 'center', 
    },

    tituloMF: {
        color: "#fff",
        fontSize: 16,
        fontFamily: theme.title
    },

    subtituloMF: {
        color: "#fff",
        fontSize: 14,
        fontFamily: theme.text
    },

    textMF:{
        color: "#fff",
        fontSize: 12,
        fontFamily: theme.text
    },

    buttonsMF:{
        padding: 8,
        borderRadius: 5,
    },
});