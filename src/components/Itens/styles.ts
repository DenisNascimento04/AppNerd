import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../themes';

const { width } = Dimensions.get('screen')

export const stylesItensBack = StyleSheet.create({
    container: {
        height: 250, 
        width: 160,
        borderRadius: 20, 
        marginRight: 10, 
    },

    content: {
        height: 250, 
        width: 160,
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

export const stylesItensNoticias = StyleSheet.create({

})
export const stylesItensNoticias2 = StyleSheet.create({
    container: {
        width: 150, 
        height: 350, 
        marginRight: 20, 
        borderRadius: 9, 
        borderBottomWidth: .5, 
        borderColor: theme.colors.regular
    },

    titulo: {
        fontSize: 18, 
        fontFamily: theme.title,
        color: "#fff",
    },

    data: {
        fontSize: 12, 
        fontFamily: theme.text,
        color: theme.colors.regularLight,
    }
})

export const stylesItensQuadrinhos = StyleSheet.create({
    image: {
        width: 150,
        marginBottom: 10, 
        borderRadius: 20,
        alignItems: 'center',
    },
    title: {
        fontFamily: theme.title, 
        fontSize: 16,
        color: theme.colors.bold
    },
    text: {
        fontFamily: theme.text, 
        fontSize: 12, 
        marginVertical: 2,
        marginBottom: 5,
        color: theme.colors.bold
    },
})

export const styles = StyleSheet.create({
    textStyles: {
        paddingHorizontal: 30,
        paddingVertical: 15
    },

    itens: { 
        width: 280,
        // height: 280,
        paddingHorizontal: 40,
        paddingVertical: 40,  
        borderRadius: 30,
        // marginHorizontal: 8,
        elevation: 20,
    },

    logo: {
        width: 158, 
        height: 150, 
        marginTop: -120,
        left: 20, 
        zIndex: 1
    },

    image: {
        width: '100%', 
        height: 150, 
        position: 'absolute', 
        top: -140, 
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


});