import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen')

export const styles = StyleSheet.create({
    Modal: {
        width: '100%',
        height: 850,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'flex-end', 
        zIndex: 1
    },

    contentModal: {
        width: width,
        height: height-250,
        backgroundColor: '#ffffff',
        borderRadius: 40,
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