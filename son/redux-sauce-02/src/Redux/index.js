import { combineReducers } from 'redux';
import configureStore from './CreateStore';

const rootReducer = () => {
    const rootReducer = combineReducers({
        hello: require('./HelloRedux').reducer,
        counter: require('./CounterRedux').reducer
    })
    return configureStore(rootReducer)
}
export default rootReducer
