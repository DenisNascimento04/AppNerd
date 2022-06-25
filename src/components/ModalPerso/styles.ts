import { StyleSheet } from 'react-native';
import { theme } from '../../themes';

export const styles = StyleSheet.create({

    header: {
        alignItems: 'center', 
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40, 
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        // zIndex: -1
    },

    titles: {
        fontSize: 20, 
        fontFamily: theme.title, 
        marginBottom: 5,
        marginTop: 20,
    },

    image: {
        zIndex: 1,
        width: 230, 
        height: 220, 
    },
    dadosHeader: {
        flexDirection: 'row', 
        marginTop: 65,
        justifyContent: 'space-evenly', 
        width: '100%'
    },

    titledDados: {
        color: '#fff',
        fontSize: 16,
        fontFamily: theme.title, 
    },

    textDados: {
        color: '#fff',
        fontFamily: theme.textRubik,
        fontSize: 14,
        textAlign: 'center'
    },

    subtitle: {
        fontSize: 18, 
        fontFamily: theme.text,
    },

    text: {
        textAlign: 'justify', 
        fontSize: 14, 
        fontFamily: theme.textRubik,
        lineHeight: 22
    },

    barTools: {
        flexDirection: 'row', 
        marginHorizontal: 15, 
        marginTop: 20, 
        justifyContent: 'space-around'
    },

    viewCriadores: {
        flexDirection: 'row', 
        flexWrap: 'wrap',
        alignItems: 'center', 
        // justifyContent: 'center',
        paddingLeft: 15
    },
    textCriadores: {
        fontSize: 16, 
        fontFamily: 'ComicNeue_400Regular', 
        marginBottom: 10, 
        marginLeft: 2, 
        marginTop: 5, 
        maxWidth: 100
    },
});