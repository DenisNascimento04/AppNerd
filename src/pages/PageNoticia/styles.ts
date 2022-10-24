import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../themes';

const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    viewLinear: {
        width: "100%", 
        height: "100%", 
        paddingTop: 40, 
        justifyContent: 'space-between', 
        paddingHorizontal: 20,
        paddingBottom: 15
    },

    textAutor: {
        color: theme.colors.regularLight, 
        fontFamily: theme.title,
        fontSize: 16,
    },

    textData: {
        color: theme.colors.regularLight, 
        fontFamily: theme.text,
        fontSize: 14,
        marginBottom: 5
    },

    titulo: {
        color: theme.colors.fundo, 
        fontFamily: theme.title,
        fontSize: 32,
        // maxWidth: width - 10
    }, 

    desc: {
        fontFamily: theme.text, 
        fontSize: 17, 
        color: theme.colors.fundo, 
        marginTop: 10
    },

    text: {
        color: theme.colors.fundo, 
        fontFamily: theme.text,
        fontSize: 14
    }
    
});