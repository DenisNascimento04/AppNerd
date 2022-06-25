import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../themes';

const { width } = Dimensions.get('screen')

export const stylesItensBack = StyleSheet.create({
    container: {
        height: 270, 
        width: 170,
        borderRadius: 20, 
        marginRight: 20, 
    },

    content: {
        height: 270, 
        width: 170, 
        elevation: 15,
        borderRadius: 20, 
        justifyContent: 'flex-end', 
    },

    styleImageBack: {
        position: 'absolute',
        // justifyContent: 'center', 
        width: '100%', 
        height: '100%'
    },
    styleImageBackLoading: {
        justifyContent: 'center', 
        width: '100%', 
        height: '100%',
        backgroundColor: 'transparent',
        borderRadius: 20
    }, 

    viewGradient: {
        width: '100%', 
        height: 180, 
        borderRadius: 20,
        paddingLeft: 10, 
        paddingBottom: 20, 
        justifyContent: 'flex-end',
    },
    textNome: {
        color: '#D3D2CF', 
        fontFamily: theme.text, 
        fontSize: 12
    },
    textNomeH: {
        color: '#fff', 
        fontFamily: theme.title, 
        fontSize: 22, 
        maxWidth: 150
    }
})

export const styles = StyleSheet.create({
    textStyles: {
        paddingHorizontal: 30,
        paddingVertical: 15
    },

    itens: { 
        paddingHorizontal: 40,
        paddingVertical: 50,  
        borderRadius: 30,
        marginHorizontal: 8,
        elevation: 20,
    },

    logo: {
        width: 200, 
        height: 200, 
        marginTop: -120, 
        zIndex: 1
    },

    image: {
        width: 208, 
        height: 200, 
        position: 'absolute', 
        top: -150, 
        zIndex: 2
    },

    text: {
        color: '#FFF',
    },

    itenPesquisa: {
        flexDirection: 'row', 
        width: width-20, 
        backgroundColor: '#fff', 
        marginBottom: 30
    },
    itenPadrao: {
        flexDirection: 'row', 
        width: width-30, 
        backgroundColor: '#fff',
        borderRadius: 40, 
        marginBottom: 30,
        elevation: 5
    },

    itenPesquisaCard: {
        flex: 1, 
        paddingTop: 5, 
        paddingBottom: 10, 
        paddingLeft: 20, 
        justifyContent: 'space-around', 
        backgroundColor: '#fff', 
        elevation: 10
    },
    itenPadraoCard: {
        flex: 1, 
        paddingTop: 5, 
        paddingBottom: 10, 
        paddingLeft: 20, 
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        justifyContent: 'space-around', 
        backgroundColor: '#fff', 
    },

    ItensQuadrinhostImage: {
        elevation: 8, 
        marginBottom: 10, 
        borderRadius: 20,
        shadowColor: "#000"
    },
    ItensQuadrinhostTitle: {
        fontFamily: theme.title, 
        fontSize: 15,
        color: "#000"
    },
    ItensQuadrinhostText: {
        fontFamily: theme.text, 
        fontSize: 12, 
        marginVertical: 2,
        color: "#000"
    },
});