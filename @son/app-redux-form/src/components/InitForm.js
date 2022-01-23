import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Component } from 'react';
import { getInitialFetch } from '../actions';

class InitForm extends Component {
  componentWillMount() {
    this.props.fetchInitialState()
  }

  render() {
    const { onClickSend, onChangeName } = this.props
    return (
      <form>
        <div className="form-group">
          <label htmlFor="name">Enter your name:</label>
          <Field
            name="name"
            placeholder="Enter your name"
            type="text"
            component="input"
            className="form-control"
            onChange={onChangeName}
          />
        </div>
        <div className="form-group">
          <button type="button" className="btn btn-primary"
            onClick={onClickSend}
          >
            Send
          </button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    initialValues: state.name.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInitialState: () => dispatch(getInitialFetch())
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(reduxForm({
  form: 'InitForm',
  enableReinitialize: true
})(InitForm));
