import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

//actions
const { Types, Creators } = createActions({
    handlePressHello: null
})

export const HelloTypes = Types
export default Creators

//reducers
// export const INITIAL_STATE = {
//     str: null
// }

export const INITIAL_STATE = Immutable({
    str: null
})

export const sayHello = (state) => {
    // return {...state, str: 'Hello ReduxSauce'}
    return state.merge({ str: 'Hello ReduxSauce from Immutable data' })
}

export const reducer = createReducer(INITIAL_STATE, {
    [Types.HANDLE_PRESS_HELLO]: sayHello
})
