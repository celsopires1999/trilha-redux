import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import cfgStore from './store'
// import simpleAction from './actions/simple';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = cfgStore();
// console.log('==>> state before: ', store.getState());
// console.log('==>> dispatch simple action: ', store.dispatch(simpleAction() as any));
// console.log('==>> state after:' ,store.getState());

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
