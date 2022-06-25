import { actions } from "./User.actions";

type ActionsNewImage = {
    type: keyof typeof actions,
    url: string
}
type ActionsLoadingUser = {
    type: keyof typeof actions,
    user: object
}


export default function UsuarioReducer ( state: any, actionsImage: ActionsNewImage, actionsUser: ActionsLoadingUser ) {
   if(actionsImage.type === 'LOADING_USER') {
        return state = actionsImage.url;
   }
   if(actionsUser.type === 'NEW_IMAGE') {
        state = actionsUser.user
   }
}

