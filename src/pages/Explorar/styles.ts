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
    
    title: {
        fontSize: 18,
        fontFamily: theme.titleRubik,
        color: "#000"
        // paddingBottom: 2, 
        // borderBottomWidth: 0.5,
        // borderBottomColor: "#585858",
    },

    buttonTudo: {
        color: '#880808', 
        fontSize: 14, 
        fontWeight: '700',
    },
});