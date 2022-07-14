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
        height: 300, 
        borderRadius: 20, 
        overflow: 'hidden',
        zIndex: 1, 
    },

    imageHeader: {
        position: 'absolute', 
        width: "100%", 
        height: "100%", 
        zIndex: -1
    },

/////////////////////////////////////////////////////////////////////////////////////

    buttonLike: {
        backgroundColor: "#fff", 
        width: 44, 
        height: 44, 
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 24, 
        elevation: 10,  
    },
    buttonBack: {
        backgroundColor: "#fff", 
        width: 42, 
        height: 42, 
        alignItems: 'center', 
        justifyContent: 'center',
        marginRight: 30,
        borderRadius: 24,
        elevation: 10,  
    },

    
/////////////////////////////////////////////////////////////////////////////////////

    card: {
        position: 'absolute', 
        left: 20, 
        flexDirection: 'row',
        zIndex: 5, 
    },

    cardNota: {
        fontFamily: theme.text, 
        fontSize: 13, 
        color: "#fff"
    },

    cardTitulo: {
        fontFamily: theme.title, 
        fontSize: 26, 
        color: "#fff", 
        maxWidth: 200, 
        height: 70
    },

    cardTexto: {
        fontFamily: theme.text, 
        fontSize: 13,
        maxWidth: 150, 
        color: "#585858",
    },

//////////////////////////////////////////////////////////////////////////////////////

    content: {},
    contentTitulo: {
        fontFamily: theme.title, 
        fontSize: 22, 
        marginVertical: 7
    },
    contentText: {
        fontFamily: theme.text, 
        fontSize: 14,
        marginBottom: 5
    },

//////////////////////////////////////////////////////////////////////////////////////

    imagemEquipes: {
        width: 100, 
        height: 100, 
        borderRadius: 50
    },
    imagemDesc: {
        maxWidth: 80, 
        fontSize: 12,
        textAlign: 'center'
    }


});