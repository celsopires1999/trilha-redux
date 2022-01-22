import { Component } from 'react';
import InitForm from '../components/InitForm';

// Container
class App extends Component {
  render() {
    return (
      <div >
        <p>
          Esse é meu container
        </p>
        <p>
          <InitForm />
        </p>
      </div>
    );
  }
}

export default App;
