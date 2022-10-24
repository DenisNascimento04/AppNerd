import { StyleSheet } from 'react-native';
import { theme } from '../../themes';

export const styles = StyleSheet.create({

    header: {
        backgroundColor: "transparent", 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginHorizontal: 20, 
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
        width: 305, 
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

    buttons: {
        paddingHorizontal: 15, 
        paddingVertical: 8, 
        borderRadius: 50, 
        backgroundColor: theme.colors.destaque, 
        borderColor: theme.colors.contraste, 
        borderWidth: .3, 
        marginRight: 5
    },
});