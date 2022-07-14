import { StyleSheet } from 'react-native';
import { theme } from '../../themes';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 15,
        paddingHorizontal: 30,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        zIndex: 99
    },

    headerIcons: {
        // backgroundColor: '#FFF', 
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',  
        borderRadius: 60
    },

    titleHeader: {
        fontSize: 22, 
        width: 190,  
        textAlign: 'center', 
        color: '#fff',
        fontFamily: theme.titleRubik
    },

    headerIconsHome: {
        backgroundColor: '#FFF', 
        padding: 4,
        alignItems: 'center',
        justifyContent: 'center',  
        borderRadius: 60
    },
});