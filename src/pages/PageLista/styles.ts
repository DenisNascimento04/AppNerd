import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../themes';

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    headerBar: {
        width: width,
        paddingHorizontal: 17,
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    title: {
        marginLeft: 10, 
        color: '#fff',
        fontFamily: theme.title,
        fontSize: 20,
    },

    viewImage: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center', 
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
        justifyContent: 'space-around',
    },
 
    textHeader: {
        color: '#fff',
        fontFamily: theme.text
    }, 

    textHeaderOpacity: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontFamily: theme.text
    },
});