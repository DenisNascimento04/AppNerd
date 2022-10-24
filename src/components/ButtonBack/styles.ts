import { Oswald_700Bold } from '@expo-google-fonts/oswald';
import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../themes';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({

    buttonLike: {
        backgroundColor: "#fff", 
        width: 45, 
        height: 45, 
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 24, 
        elevation: 10,  
    },
    buttonBack: {
        backgroundColor: "#fff", 
        width: 42, 
        height: 42, 
        alignItems: 'center', 
        justifyContent: 'center',
        marginRight: 30,
        borderRadius: 24,
        elevation: 10,  
    },

});