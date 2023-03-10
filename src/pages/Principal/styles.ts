import { StyleSheet } from 'react-native';
import { theme } from '../../themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

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
        fontFamily: theme.title,
        // paddingBottom: 2, 
        // borderBottomWidth: 0.5,
        // borderBottomColor: "#585858",
    },

    buttonTudo: {
        color: '#D3D2CF', 
        fontSize: 14, 
        fontWeight: '700',
    },
    
});