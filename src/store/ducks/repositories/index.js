const INITIAL_STATE = {
    data: [
        "teste",
        "teste"
    ]
}

const reducer = (state = INITIAL_STATE, actions) => {
    switch (actions.type) {
        case "ADD":
            return { ...state, data: [...state.data, actions.title]}
        default:
            return state
    }
}

export default reducer