import { Oswald_700Bold } from '@expo-google-fonts/oswald';
import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../themes';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    header: {
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: width, 
        borderRadius: 20, 
        overflow: 'hidden',
        zIndex: 1,
        shadowColor: theme.colors.contraste 
    },

    imageHeader: {
        position: 'absolute', 
        width: "100%", 
        height: "100%", 
        zIndex: -1
    },

/////////////////////////////////////////////////////////////////////////////////////

    buttonLike: {
        backgroundColor: theme.colors.contraste, 
        width: 45, 
        height: 45, 
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 24, 
        zIndex: 1 
    },
    buttonBack: {
        backgroundColor: theme.colors.contraste, 
        width: 42, 
        height: 42, 
        alignItems: 'center', 
        justifyContent: 'center',
        marginRight: 30,
        borderRadius: 24,
        elevation: 0,  
    },

    
/////////////////////////////////////////////////////////////////////////////////////

    card: {
        position: 'absolute', 
        left: 20, 
        flexDirection: 'row',
        zIndex: 1, 
    },

    cardNota: {
        fontFamily: theme.text, 
        fontSize: 13, 
        color: theme.colors.contraste
    },

    cardTitulo: {
        fontFamily: theme.title, 
        fontSize: 26, 
        color: theme.colors.contraste, 
        maxWidth: 200, 
        height: 70
    },

    cardTexto: {
        fontFamily: theme.text, 
        fontSize: 13,
        maxWidth: 150, 
        color: theme.colors.contraste,
    },

//////////////////////////////////////////////////////////////////////////////////////

    content: {},
    contentTitulo: {
        fontFamily: theme.titleItalic, 
        fontSize: 22, 
        marginVertical: 7,
        color: theme.colors.contraste
    },
    contentText: {
        fontFamily: theme.text, 
        fontSize: 14,
        marginBottom: 5,
        color: theme.colors.contraste
    },

//////////////////////////////////////////////////////////////////////////////////////

    imagemEquipes: {
        width: 100, 
        height: 100, 
        borderRadius: 50
    },
    imagemDesc: {
        maxWidth: 100, 
        fontSize: 12,
        textAlign: 'center',
        color: theme.colors.contraste
    }


});