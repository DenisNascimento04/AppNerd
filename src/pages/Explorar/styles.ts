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
        paddingBottom: 20
    },
    titleHeader: {
        color: '#fff', 
        fontSize: 20,
        fontFamily: theme.titleRubik
    },
    
    title: {
        fontSize: 18,
        fontFamily: theme.titleRubik,
        color: "#000"
    },

    buttonTudo: {
        color: '#880808', 
        fontSize: 14, 
        fontWeight: '700',
    },
});