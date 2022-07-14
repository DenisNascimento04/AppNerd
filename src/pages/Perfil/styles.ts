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
        fontFamily: theme.titleRubik,
        height: 150,
    },

    botoes: {
        width: 200,  
        padding: 15, 
        marginTop: 30,
        alignItems: 'center', 
        borderRadius: 20, 
    },

    inputs: {
        backgroundColor: "rgba(58,58,58,0.4)", 
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

    viewImage: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center', 
        marginTop: 10,
        marginBottom: 20
    },

    viewNome: {
        width: '100%', 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginBottom: 30
    },

    info: {
        width :'100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    textHeader: {
        color: '#fff'
    }, 
    textHeaderOpacity: {
        color: 'rgba(255, 255, 255, 0.6)'
    }, 
});