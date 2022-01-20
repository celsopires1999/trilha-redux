import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers'

export default () => {
    const enchanters = applyMiddleware(thunk);

    return createStore(
        rootReducers, 
        enchanters
    )
}
