import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import { theme } from '../../themes';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({

    container: {
        flex: 1,  
        flexDirection: 'row', 
        padding: 10
    },

    coluna: {
        flex: 1
    },
 
    header: {
        width: width,
        backgroundColor: "transparent", 
        flexDirection: 'row', 
        alignItems: 'center',
        marginHorizontal: 16,
        paddingBottom: 16
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

});