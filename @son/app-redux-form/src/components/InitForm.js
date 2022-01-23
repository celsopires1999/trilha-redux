import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Component } from 'react';
import { getInitialFetch } from '../actions';

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div className="form-group">
    <label htmlFor="">{label}</label>
    <input {...input} placeholder={label} type={type} className="form-control" />
    {touched &&
      (error && <span className="text-danger">{error}</span>)}
  </div>
)

const validate = (values) => {
  const errors = {}
  const { name } = values;

  if (!name) { errors.name = 'Required' }
  if (name && name.toString().length <= 2) { errors.name = 'Too short' }
  
  return errors
}

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
            component={renderField}
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
  enableReinitialize: true,
  validate
})(InitForm));
