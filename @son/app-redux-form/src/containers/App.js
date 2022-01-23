import { Component } from 'react';
import InitForm from '../components/InitForm';

// Container
class App extends Component {

  naClickada = (e) => {
    e.preventDefault()
    console.log("Deu clickada")
  }

  naMudancaNome = ({ target }) => {
    const { name, value } = target
    console.log(`=> name: ${name} => value: ${value}`)
  }

  render() {
    return (
      <div className="col">
        <div className="card">
          <div className="card-header">
            Redux Form
          </div>
          <div className="card-body">
            <div className="card-title">My First Redux Form</div>
            <InitForm
              onClickSend={this.naClickada}
              onChangeName={this.naMudancaNome}
            />
          </div>
          <div className="card-footer">
            Card Footer
          </div>
        </div>
      </div>
    );
  }
}

export default App;
