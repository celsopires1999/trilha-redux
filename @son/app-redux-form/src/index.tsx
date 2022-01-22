import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import cfgStore from './store';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';

const store = cfgStore();
console.log(store.getState());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="container">
        <div className="row">
          <App />
        </div>
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
