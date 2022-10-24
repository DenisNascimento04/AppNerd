import { createSlice } from "@reduxjs/toolkit"

interface User {
    id: number,
    email: string,
    senha: string,
    nome: string,
    imagePerfil: string,
    imageFundo: string,
    frase: string,
    favoritos: number[],
    uid: string,
    isLogin: boolean
}

const initialState: User = {
    id: 0,
    email: '',
    senha: '',
    nome: 'Criar/Logar',
    imagePerfil: 'https://firebasestorage.googleapis.com/v0/b/appnerd-9e189.appspot.com/o/perfis%2Fperfil-user.png?alt=media&token=a8631a95-df35-4a66-8f7f-15846c883af0',
    imageFundo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEY13sg0Y8cDbTL_VBFlWHsqGnzj7Un_hW9Q&usqp=CAU',
    frase: 'Fazer Login',
    favoritos: [1],
    uid: '',
    isLogin: false
}

export const usuario = createSlice({
    name: 'usuario-logado',
    initialState,
    reducers: {
        setLogin: (state, actions) => {
            state.id = actions.payload.id,
            state.uid = actions.payload.uid,
            state.email = actions.payload.email,
            state.senha = actions.payload.senha,
            state.nome = actions.payload.nome,
            state.frase = actions.payload.frase,
            state.imagePerfil = actions.payload.imagePerfil,
            state.imageFundo = actions.payload.imageFundo,
            state.favoritos = actions.payload.favoritos
        },
        resetLogin: (state) => {
            state.id = 0,
            state.email = '',
            state.senha = '',
            state.nome = 'Criar/Logar',
            state.imagePerfil = 'https://firebasestorage.googleapis.com/v0/b/appnerd-9e189.appspot.com/o/perfis%2Fperfil-user.png?alt=media&token=a8631a95-df35-4a66-8f7f-15846c883af0',
            state.imageFundo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEY13sg0Y8cDbTL_VBFlWHsqGnzj7Un_hW9Q&usqp=CAU',
            state.frase = 'Fazer Login',
            state.favoritos = [1],
            state.uid = '',
            state.isLogin = false
        },
        setNewImage: (state, actions) => {
            state.imagePerfil = actions.payload
        },
        setNewImageFundo: (state, actions) => {
            state.imageFundo = actions.payload
        },
        setNewFrase: (state, actions) => {
            state.frase = actions.payload
        },
        setIsLogin: (state, action) => {
            state.isLogin = action.payload
        },
        setFavoritos: (state, actions) => {
            if (state.isLogin) {
                state.favoritos.push(actions.payload)
            }
        },
        deleteFavoritos: (state, actions) => {
            state.favoritos.map((item, index) => {
                if (item === actions.payload) {
                    state.favoritos.splice(index, index+1)
                }
            })
        }
    }
})

export const { setNewImage, setNewFrase, setNewImageFundo, setFavoritos, deleteFavoritos, setLogin, setIsLogin, resetLogin } = usuario.actions
export default usuario.reducer;