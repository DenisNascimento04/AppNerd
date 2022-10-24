import { StyleSheet } from 'react-native';
import { theme } from '../../themes';

export const styles = StyleSheet.create({
    flatList: {
        flexDirection: 'row', 
        width: '100%', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        paddingHorizontal: 20, 
        marginBottom: 20
    },

    header: {
        backgroundColor: "transparent", 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginHorizontal: 20, 
        paddingBottom: 20,
        paddingTop: 20
    },
    titleHeader: {
        color: '#fff', 
        fontSize: 24,
        fontFamily: theme.title
    },

    viewInput: {
        backgroundColor: theme.colors.contraste, 
        flexDirection: 'row',
        width: 300, 
        justifyContent: 'center',  
        borderRadius: 50,
    },

    buttonInput: {
        // backgroundColor: '#BDB9BF', 
        width: 45, 
        height: 45, 
        alignItems: 'center', 
        justifyContent: 'center', 
    },
    
    title: {
        fontSize: 20,
        fontFamily: theme.textItalic,
        color: theme.colors.contraste
    },

    buttonTudo: {
        color: theme.colors.destaque, 
        fontSize: 14, 
    },
});