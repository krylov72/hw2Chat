const initState = {
    themeId: 1,
}

type initState = {
    themeId:number
}

export const themeReducer = (state = initState, action: ActionsType): initState => { 
    switch (action.type) {
        case 'SET_THEME_ID':{
            return {...state,themeId:action.id}
        }
        default:
            return state
    }
}

type ActionsType = ReturnType <typeof changeThemeId>

type ChangeThemeAC = {
    type: string
    id:number
}

export const changeThemeId = (id: number): ChangeThemeAC => ({ type: 'SET_THEME_ID', id } as const) // fix any
