import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    header: {
        alignItems: 'center', 
        paddingBottom: 10, 
        paddingTop: 20,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25, 
        position: 'absolute',
        overflow: 'hidden',
        left: 0,
        right: 0,
        top: 0,
        // zIndex: -1
    },

    titles: {
        fontSize: 20, 
        fontWeight: '700', 
        marginBottom: 5,
        marginTop: 20,
    },

    image: {
        // left: 35,
        width: 230, 
        height: 220, 
    },
    dadosHeader: {
        flexDirection: 'row', 
        marginTop: 65,
        // marginBottom: 5, 
        justifyContent: 'space-evenly', 
        width: '100%'
    },

    titledDados: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700'
    },

    textDados: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center'
    },
});