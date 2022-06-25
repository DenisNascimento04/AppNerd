import { StyleSheet } from 'react-native';

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
    headerIconsHome: {
        backgroundColor: '#FFF', 
        padding: 4,
        alignItems: 'center',
        justifyContent: 'center',  
        borderRadius: 60
    },
});