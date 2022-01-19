export const clickReducer = (state = { msg: '' }, action: any) => {
    switch (action.type) {
        case 'CLICK_HELLO':
            return { ...state, msg: action.msg }
        default:
            return state;
    }
}