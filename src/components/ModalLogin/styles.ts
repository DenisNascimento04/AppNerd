import { theme } from './../../themes/index';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen')

export const styles = StyleSheet.create({
        Modal: {
        width: width,
        height: height,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'flex-end', 
        zIndex: 1
    },

    contentModal: {
        height: '80%',
        backgroundColor: theme.colors.contraste,
        paddingTop: 20,
        paddingHorizontal: 30,
        borderRadius: 40,
    },

    closedModal: {
        width: '100%' , 
        flexDirection:'row', 
        paddingVertical: 8, 
    },

    buttonsModal: {
        width: '100%', 
        padding: 7, 
        marginBottom: 7,
        borderRadius: 6,
        borderBottomColor: '#E3E2DD', 
        borderBottomWidth: 1
    },

    button: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    textButtons: {
        fontSize: 18,
        marginRight: 4
    },
})