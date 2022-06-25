import { StackNavigationProp } from '@react-navigation/stack'
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RouteProp } from '@react-navigation/native';

export type PropsRouteListDrawer = {
    Home: undefined,
    Vertigo: undefined,
    DC: undefined,
} 
export type PropsRouteListStack = {
    Larning: undefined,
    PagePerso: {
        id: string, 
        edit: string
    },
    Pesquisa: {
        text: string
    },
    PageQuadrinhos: {
        data: {
            id: number,
            editora: string,
            titulo: string,
            nota: number,
            data: string,
            capa: string,
            equipe: {
                image: string;
                text: string;
            }[],
            personDestaque: string,
            sinopse: string[]
        }
    },
    PageVerTudo: {
        text?: string,
        pesquisa?: string
    },
    Perfil: undefined,
    Explorar: undefined,
    Testes: undefined
} 

export type PropsItensQuadrinhos = {
    data: {
        id: number,
        editora: string,
        titulo: string,
        nota: number,
        data: string,
        capa: string,
        equipe: {
            image: string;
            text: string;
        }[],
        personDestaque: string,
        sinopse: string[]
    }
}

export type PropsPerso = {
    id: number,
    corPri: string,
    corSec: string,
    tipoP: string,
    tags: string[],
    thamb: string,
    logo: string,
    wallpaper: string,
    nomeHeroi: string,
    nome: string,
    desc: string,
    PA: string,
    altura: string,
    poderes: string[],
    sinopse: string[],
    imagens: string[],
    criadores: [
        {
            image: string,
            nome: string
        }
    ],
    historia: [
        {
            title: string,
            text: string[]
        }
    ],
    habilidades: [
        {
            titulo: string,
            number: number
        },
    ],
    editora: string,
    estilo: string
}

export type PropsNoticias = {
    id: number,
    titulo: string,
    escritor: string,
    thamb: string,
    data: string,
    coteudo: string[]
}

export type propsStack = StackNavigationProp<PropsRouteListStack>
export type propsDrawer = DrawerNavigationProp<PropsRouteListDrawer>