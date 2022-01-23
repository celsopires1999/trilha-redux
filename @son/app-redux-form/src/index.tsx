import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import cfgStore from './store';
import './index.css';
import App from './containers/App';

const store = cfgStore();
console.log(store.getState());
ReactDOM.render(
    <Provider store={store}>
      <div className="container">
        <div className="row">
          <App />
        </div>
      </div>
    </Provider>,
  document.getElementById('root')
);
