import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { bindActionCreators } from 'redux';
import { clickHelloAction } from './actions';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      text: ''
    }
  }

  handleInputChange = (e: any) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    console.log('==>> renderizado');
    const { text } = this.state as any;
    const { msg, clickHelloAction } = this.props as any;
    console.log(text);
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.handleInputChange}
        />
        <button type="button" onClick={() => clickHelloAction(text)}>
          Click to Dispatch Action
        </button>
        <h1>{msg}</h1>
      </div>
    );
  }
}

const mapStateToProps = (store: any) => {
  console.log('store==>>', store);
  return {
    msg: store.clickReducer.msg
  }
}

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ clickHelloAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
