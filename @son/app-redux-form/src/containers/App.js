import { Component } from 'react';
import InitForm from '../components/InitForm';

// Container
class App extends Component {
  render() {
    return (
      <div className="col">
        <p>
          <div className="card">
            <div className="card-header">
              Redux Form
            </div>
            <div className="card-body">
              <div className="card-title">My First Redux Form</div>
              <InitForm />
            </div>
            <div className="card-footer">
              Card Footer
            </div>
          </div>
        </p>
      </div>
    );
  }
}

export default App;
