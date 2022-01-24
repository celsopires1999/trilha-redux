import { Component } from 'react';
import { connect } from 'react-redux';
import { sendServer, changeName } from '../actions';
import InitForm from '../components/InitForm';

// Container
class App extends Component {

  naClickada = (e, data) => {
    e.preventDefault()
    this.props.createName(data)
  }

  naMudancaNome = ({ target }) => {
    const { name, value } = target
    this.props.changeName(value)
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

const mapStateToProps = (state) => {
  return {
    initialValues: state.name.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createName: (data) => dispatch(sendServer(data)),
    changeName: (name) => dispatch(changeName(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
