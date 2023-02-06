import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import { theme } from '../../themes';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    flatList: {
        flexDirection: 'row', 
        width: '100%', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        paddingHorizontal: 16, 
        marginBottom: 8
    },

    header: {
        width: width,
        backgroundColor: "transparent", 
        flexDirection: 'row', 
        alignItems: 'center',
        marginHorizontal: 16,
        paddingBottom: 16,
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
        justifyContent: 'center',  
        borderRadius: 8,
    },

    buttonInput: {
        // backgroundColor: '#BDB9BF', 
        width: 45, 
        height: 45, 
        alignItems: 'center', 
        justifyContent: 'center', 
    },
    
    title: {
        fontSize: 18,
        fontFamily: theme.title,
        color: theme.colors.contraste,
        marginBottom: 4
    },

    buttonTudo: {
        color: theme.colors.destaque, 
        fontSize: 14, 
    },
});