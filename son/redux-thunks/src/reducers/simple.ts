export default function simpleReducer(state = {}, action: any) {
    switch (action.type) {
        case 'ACTION_1':
            return action.payload;
        default:
            return state;
    }
}
