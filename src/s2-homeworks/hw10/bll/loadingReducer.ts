const initState = {
    isLoading: false,
}

type ActionsType = LoadingActionType

export const loadingReducer = (state = initState, action: ActionsType) => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING':{ 
            return {...state,isLoading:!state.isLoading}
        }
        default:
            return state
    }
}
type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading
})
