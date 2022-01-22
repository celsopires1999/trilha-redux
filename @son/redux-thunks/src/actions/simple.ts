export default function simpleAction() {
    // console.log('==>>Hello from action');
    return (dispatch: any) => {
        dispatch({
            type: 'ACTION_1', payload: {
                msg: 'Hello Thunk'
            }
        })
    }
}