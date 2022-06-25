import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    teste: {
        position: 'absolute', 
        backgroundColor: '#fff', 
        padding: 20,
        width: 200, 
        height: 230, 
        top: 75, 
        left: 137, 
        borderBottomLeftRadius: 30, 
        borderBottomRightRadius: 30, 
        borderTopLeftRadius: 30, 
        zIndex: 999,
        borderWidth: 2,
        borderColor: '#000'
    },

    frase: {
        margin: 5, 
        marginBottom: 20, 
        borderBottomWidth: 1, 
        borderColor: '#353333',
        fontSize: 20, 
        fontFamily: 'ComicNeue_700Bold'
    },
});