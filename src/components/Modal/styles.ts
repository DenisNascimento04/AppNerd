import { theme } from './../../themes/index';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen')

export const styles = StyleSheet.create({
    Modal: {
        width: width,
        height: height,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'flex-end', 
        zIndex: 1
    },

    contentModal: {
        height: '100%',
        paddingTop: 20,
        borderRadius: 40,
    },
})