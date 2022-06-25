export const actions = {
    NEW_IMAGE: 'NEW_IMAGE',
    LOADING_USER: 'LOADING_USER'
}

export function setNewImage () {
    return { type: actions.NEW_IMAGE }
}
export function loadingUser () {
    return { type: actions.LOADING_USER }
}