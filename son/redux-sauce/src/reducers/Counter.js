export default (state = 0, action) => {
    console.log('reducer ==>> state: ', state, '==>> action', action);
    // console.log('reducer ==>> action', action);
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state;
    }
}