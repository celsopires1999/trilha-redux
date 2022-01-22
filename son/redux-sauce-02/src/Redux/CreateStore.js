import {createStore, applyMiddleware, compose} from 'redux';

export default (rootReducer) => {
    const middleware = []
    const enchanters = []

    enchanters.push(applyMiddleware(...middleware))

    const store = createStore(rootReducer, compose(...enchanters))

    return store
}
