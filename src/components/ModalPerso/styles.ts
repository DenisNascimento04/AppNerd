import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../themes';

const { width } = Dimensions.get('window');

// export const styles = StyleSheet.create({

//     header: {
//         alignItems: 'center', 
//         borderBottomLeftRadius: 40,
//         borderBottomRightRadius: 40, 
//         // position: 'absolute',
//         // left: 0,
//         // right: 0,
//         // top: 200,
//         // zIndex: 5s
//     },

//     viewHeader: {
//         width: "100%", 
//         backgroundColor: "rgba(58,58,58,0.7)",  
//         borderBottomLeftRadius: 40, 
//         borderBottomRightRadius: 40
//     },

//     viewGradi: {
//         width: width, 
//         justifyContent: 'space-between', 
//         alignItems: 'center', 
//         paddingTop: 25, 
//         paddingBottom: 10, 
//         borderBottomLeftRadius: 40, 
//         borderBottomRightRadius: 40,
//     },

//     titles: {
//         fontSize: 20, 
//         fontFamily: theme.title, 
//         marginBottom: 5,
//         marginTop: 20,
//         color: theme.colors.contraste
//     },

//     image: {
//         zIndex: 1,
//         width: 230, 
//         height: 220,
//         paddingBottom: 50 
//     },
//     dadosHeader: {
//         flexDirection: 'row', 
//         marginTop: 40,
//         justifyContent: 'space-evenly', 
//         width: '100%'
//     },

//     titledDados: {
//         color: theme.colors.contraste,
//         fontSize: 16,
//         fontFamily: theme.title, 
//     },

//     textDados: {
//         color: theme.colors.contraste,
//         fontFamily: theme.text,
//         fontSize: 14,
//         textAlign: 'center'
//     },

//     subtitle: {
//         fontSize: 18, 
//         fontFamily: theme.text,
//         color: theme.colors.contraste,
//     },

//     text: {
//         textAlign: 'justify', 
//         color: theme.colors.contraste,
//         fontSize: 14, 
//         fontFamily: theme.text,
//         lineHeight: 22,
//     },

//     barTools: {
//         flexDirection: 'row', 
//         marginHorizontal: 15, 
//         marginTop: 20, 
//         justifyContent: 'space-around'
//     },

//     viewCriadores: {
//         flexDirection: 'row', 
//         flexWrap: 'wrap',
//         alignItems: 'center', 
//         // justifyContent: 'center',
//         paddingLeft: 20
//     },
//     textCriadores: {
//         fontSize: 12, 
//         fontFamily: theme.text, 
//         color: theme.colors.contraste,
//         marginBottom: 10, 
//         marginLeft: 2, 
//         marginTop: 5, 
//         maxWidth: 100,
//     },

//     viewPoderes: {
//         flexDirection: 'row', 
//         backgroundColor: "#E4E3E2", 
//         alignItems: 'center', 
//         marginBottom: 5, 
//         paddingVertical: 10, 
//         paddingHorizontal: 5, 
//         borderRadius: 5,
//         zIndex: 1 
//     },
//     viewPoderesDesc: {
//         position: 'absolute', 
//         width: "100%", 
//         backgroundColor: theme.colors.light,
//         borderRadius: 5, 
//         paddingHorizontal: 5, 
//         paddingVertical: 12,
//         zIndex: 0 
//     },

// });

export const styles = StyleSheet.create({
    title: {
        fontFamily: theme.title,
        fontSize: 18,
        color: theme.colors.contraste,
        marginBottom: 6
    },

    text: {
        fontFamily: theme.text,
        fontSize: 14,
        lineHeight: 18,
        marginBottom: 6,
        color: theme.colors.contraste,
        textAlign: 'justify'
    },

    barTools: {
        flexDirection: 'row',  
        marginTop: 16, 
        justifyContent: 'space-around'
    },

    viewPoderes: {
        flexDirection: 'row', 
        backgroundColor: "#E4E3E2", 
        alignItems: 'center', 
        marginBottom: 5, 
        paddingVertical: 10, 
        paddingHorizontal: 5, 
        borderRadius: 5,
        zIndex: 1 
    },
    viewPoderesDesc: {
        position: 'absolute', 
        width: "100%", 
        backgroundColor: theme.colors.light,
        borderRadius: 5, 
        paddingHorizontal: 5, 
        paddingVertical: 12,
        zIndex: 0 
    },
});