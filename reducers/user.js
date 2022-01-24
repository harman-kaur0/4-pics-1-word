const initialState = {
    user: {},
    daily: null,
    settings: {
        sound: 0,
        music: 0,
    }
}

export const user = (state = initialState, action) => {
    switch(action.type) {
        case "USER":
            return {...state, user: action.user}
        case "DAILY":
            return {...state, daily: action.daily}
        case "SETTINGS":
            return {...state, settings: action.settings}
        default:
            return state
    }
}