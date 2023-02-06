import { StyleSheet } from 'react-native';
import { theme } from '../../themes';

export const styles = StyleSheet.create({
    title: {
        fontFamily: theme.title,
        fontSize: 18,
        color: theme.colors.contraste,
        marginBottom: 6
    },

    text: {
        fontFamily: theme.text,
        fontSize: 14,
        lineHeight: 18,
        marginBottom: 6,
        color: theme.colors.contraste,
        textAlign: 'justify'
    },

    barTools: {
        flexDirection: 'row',  
        marginTop: 16, 
        justifyContent: 'space-around'
    },

    viewPoderes: {
        flexDirection: 'row', 
        backgroundColor: "#E4E3E2", 
        alignItems: 'center', 
        marginBottom: 5, 
        paddingVertical: 10, 
        paddingHorizontal: 5, 
        borderRadius: 5,
        zIndex: 1 
    },
    viewPoderesDesc: {
        position: 'absolute', 
        width: "100%", 
        backgroundColor: theme.colors.light,
        borderRadius: 5, 
        paddingHorizontal: 5, 
        paddingVertical: 12,
        zIndex: 0 
    },
});