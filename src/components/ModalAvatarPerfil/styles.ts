import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    Modal: {
        width: '100%',
        height: 850,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center', 
        zIndex: 1
    },

    contentModal: {
        width: '90%',
        height: '70%',
        backgroundColor: '#ffffff',
        elevation: 5,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10
    },

    closedModal: {
        width: '100%' , 
        flexDirection:'row', 
        paddingVertical: 8, 
    },

    buttonsModal: {
        width: '100%', 
        padding: 7, 
        marginBottom: 7,
        borderRadius: 6,
        borderBottomColor: '#E3E2DD', 
        borderBottomWidth: 1
    },

    button: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    textButtons: {
        fontSize: 18,
        marginRight: 4
    },
})