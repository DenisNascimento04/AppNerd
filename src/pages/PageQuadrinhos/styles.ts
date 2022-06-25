import { Oswald_700Bold } from '@expo-google-fonts/oswald';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    header: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1
    },

    headerImageBack: {
        position:'absolute', 
        height: "100%", 
        justifyContent: 'center', 
        top: 0, 
        left: 0, 
        right: 0, 
        marginBottom: 50
    },

    title: {
        fontSize: 22, 
        fontFamily: 'Oswald_700Bold', 
        marginBottom: 5,
    },

    texts: {
        fontSize: 16, 
        fontFamily: 'ComicNeue_400Regular', 
        marginBottom: 10
    },

    viewBody: {
        flex: 1, 
        backgroundColor: 'rgba(58,58,58,0.3)', 
        borderRadius: 40, 
        paddingTop: 40
    },

    viewHeader: {
        flexDirection: 'row', 
        width: "100%", 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: 20, 
        paddingHorizontal: 20
    },

    viewPD: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },

    textPerso: {
        fontSize: 15, 
        fontFamily: 'ComicNeue_400Regular', 
        marginBottom: 20
    },

    viewNota: {
        flexDirection: 'row', 
        alignItems: 'center', 
        backgroundColor: '#fff', 
        elevation: 4, 
        borderRadius: 10, 
        padding: 5
    },

    viewEquipe: {
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: "space-between", 
        paddingHorizontal: 15
    },

    descEquipe: {
        fontSize: 14, 
        fontFamily: 'ComicNeue_400Regular', 
        marginBottom: 10, 
        marginLeft: 2, 
        marginTop: 5, 
        maxWidth: 150
    },
});