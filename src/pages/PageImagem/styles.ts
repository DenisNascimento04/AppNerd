import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import { theme } from '../../themes';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({

    gradient: {
        position: 'absolute', 
        zIndex: 1, 
        width: width, 
        paddingLeft: 20, 
        paddingTop: 40, 
        paddingBottom: 60
    },
    titulo: {
        color: theme.colors.contraste, 
        fontSize: 18, 
        fontFamily: theme.title, 
        marginTop: 10
    },
    tags: {
        color: theme.colors.destaque, 
        fontSize: 18, 
        fontFamily: theme.text, 
        marginRight: 5
    },
    desc: {
        color: theme.colors.contraste, 
        fontSize: 14, 
        fontFamily: theme.text, 
        marginBottom: 10
    },



    container: {
        flex: 1, 
        paddingTop: 80, 
        flexDirection: 'row', 
        padding: 10
    },

    coluna: {
        flex: 1
    }

});