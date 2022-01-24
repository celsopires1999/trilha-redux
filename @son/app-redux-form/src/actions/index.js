import axios from 'axios'

// Action Types
export const INITIAL_FETCH = 'INITIAL_FETCH'
export const SEND_SERVER = 'SEND_SERVER'
export const CHANGE_NAME = 'CHANGE_NAME'

// Action Creators
export function getInitialFetch() {
    return {
        type: INITIAL_FETCH,
        payload: { name: 'Gauthinho Pires' }
    }
}

export function sendServer(data) {
    const request = axios.post('http://localhost:9000/', { data })
    return {
        type: SEND_SERVER,
        payload: request
    }
}

export function changeName(name) {
    return {
        type: CHANGE_NAME,
        payload: { name: name }
    }
}
