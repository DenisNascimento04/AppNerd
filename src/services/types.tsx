import { StackNavigationProp } from '@react-navigation/stack'
import { DrawerNavigationProp } from '@react-navigation/drawer';

export type PropsRouteListTab = {
    Galeria: undefined,
    Explorar: undefined,
    Pessoal: undefined,
    Loja: undefined,
    Pesquisa: { filtro?: string }
} 
export type PropsRouteListStack = {
    Larning: undefined,
    PagePerso: {
        id: string, 
        edit: string
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
    PageNoticia: {
        data: PropsNoticias
    },
    Produto: { data: PropsProdutos }
    PageLista: undefined,
    PesquisarPerso: {text?: string},
    PageImagem: { data: PropsImagens }
    Testes: undefined
} 

export type PropsImagens = {
    id: number,
    desc: string,
    url: string,
    tags: string[]
}

export type PropsItem = {
    data: PropsPerso,
    navig: () => void
}

export type PropsItemBack = {
    data: PropsPerso
    navig: () => void, 
    small?: any, 
    vertical?: any, 
    horizontal?: any
}

export type PropsItensPersonagensPadrao = {
    data: PropsPerso,
    navig: () => void
}

export type PropsItensNoticias = {
    index?: number
    data: PropsNoticias,
    small?: any
}

export type PropsItensQuadrinhos = {
    navig: () => void,
    data: {
        id: number,
        editora: string,
        titulo: string,
        preco: string,
        nota: number,
        thamb: string,
        data: string,
        capa: string,
        equipe: {
            image: string;
            text: string;
        }[],
        personDestaque: string,
        sinopse: string[],
        imagens: string[]
    }
}

export type PropsPerso = {
    id: number,
    corPri: string,
    corSec: string,
    tipoP: string,
    especie?: string,
    tags: string[],
    thamb?: string,
    logo?: string,
    wallpaper?: string,
    nomePerso: string,
    nome: string,
    desc: string,
    PA: string,
    altura: string,
    poderes: [
        {
            poder: string,
            desc: string
        }
    ],
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
    desc: string,
    escritor: string,
    thamb: string,
    data: string,
    conteudo: string[]
}

export type PropsQuadrinhos = {
    id: number,
    editora: string,
    titulo: string,
    nota: number,
    thamb: string,
    data: string,
    capa: string,
    equipe: [
        {
            image: string,
            text: string,
            funcao: string
        }
    ],
    personDestaque: string,
    sinopse: string[],
    imagens: string[]
}

export type PropsProdutos = {
    id: number,
    titulo: string,
    img: string,
    preco: string,
    detalhes: string[]
}

export type propsStack = StackNavigationProp<PropsRouteListStack>
export type propsTab = DrawerNavigationProp<PropsRouteListTab>