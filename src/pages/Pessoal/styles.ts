import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../themes';

const { width } = Dimensions.get('window')

export const stylesLogin = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },

    title: {
        color: '#fff', 
        fontSize: 42,
        textAlign: 'center',
        fontFamily: theme.title,
        height: 150,
    },

    labels: {
        marginBottom: 2, 
        fontFamily: theme.text, 
        letterSpacing: 1.5
    },

    botoes: {
        width: 200,  
        padding: 15, 
        marginTop: 30,
        alignItems: 'center', 
        borderRadius: 20, 
    },

    inputs: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: theme.colors.fundo, 
        borderRadius: 5, 
        padding: 3
    },

    buttons: {
        width: 150, 
        alignItems: 'center',  
        padding: 15, 
        borderRadius: 10
    },

})

export const stylesPerfil = StyleSheet.create({
    headerBar: {
        width: width,
        paddingHorizontal: 17,
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    headerPerfil: {
        backgroundColor: theme.colors.destaque, 
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 30,
        paddingTop: 40, 
        width: width,
        height: 200,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20 
    },

    viewImage: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center', 
        marginBottom: 20
    },

    viewNome: {
        marginLeft: 10
    },

    info: {
        width :'100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    
    textHeader: {
        color: '#fff',
        fontFamily: theme.text
    }, 
    textHeaderOpacity: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontFamily: theme.text
    },

    buttons: {
        flexDirection: 'row',
        marginHorizontal: 10,
        paddingVertical: 10,
        borderColor: "#000",
        borderBottomWidth: .3,
        alignItems: 'center'
    },
    textButtons: {
        color: theme.colors.contraste,
        fontFamily: theme.text,
        fontSize: 14,
        marginLeft: 7
    },
});