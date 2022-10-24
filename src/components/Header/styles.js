import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../themes';

const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
        width: width,
        paddingTop: 45,
        paddingHorizontal: 30,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        // zIndex: -1
    },

    headerIcons: {
        backgroundColor: "#fff", 
        // elevation: 10,  
        alignItems: 'center', 
        justifyContent: 'center',
        // marginRight: 30,
        width: 42, 
        height: 42, 
        borderRadius: 24 
    },

    titleHeader: {
        flex: 1,
        fontSize: 22, 
        width: 190,  
        color: '#fff',
        fontFamily: theme.titleRubik
    },

    headerIconsHome: {
        backgroundColor: "#fff", 
        // elevation: 10,  
        alignItems: 'center', 
        justifyContent: 'center',
        // marginRight: 30,
        width: 42, 
        height: 42, 
        borderRadius: 24
    },
});