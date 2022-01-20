import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import Counter from './components/Counter';
import CounterReducer from './reducers/Counter';

const store = createStore(CounterReducer);
console.log('index.tsx ==>> store: ', store);

const xRender = () => ReactDOM.render(
  <React.StrictMode>
    {console.log('ReactDOM.render')}
  <Counter
    value={store.getState()}
    increment={() => store.dispatch({ type: 'INCREMENT' })}
    decrement={() => store.dispatch({ type: 'DECREMENT' })}
  />
</React.StrictMode>,
document.getElementById('root'))
console.log('index.tsx ==>> antes da chamada do render ==>> store: ', store)
xRender()
console.log('index.tsx ==>> depois da chamada do render ==>> store: ', store);
store.subscribe(xRender)
console.log('index.tsx ==>> store: ', store);
