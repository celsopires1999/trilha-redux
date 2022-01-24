import { INITIAL_FETCH, SEND_SERVER, CHANGE_NAME } from './../actions'

const INITIAL_STATE = {
    data: {}
}

export default function reducerName(state = INITIAL_STATE, action) {
    switch (action.type) {
        case INITIAL_FETCH:
            return { ...state, data: action.payload }
        case SEND_SERVER:
            return { ...state, data: action.payload.data }
        case CHANGE_NAME:
            return { ...state, data: action.payload }
        default:
            return state
    }
}

// const reducerName = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case INITIAL_FETCH:
//             return { ...state, data: action.payload }
//         default:
//             return state
//     }
// }

// export default reducerName
