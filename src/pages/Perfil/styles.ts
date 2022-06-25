import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
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