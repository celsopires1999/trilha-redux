import { Field, reduxForm } from 'redux-form';

// Component
const InitForm = ({ onClickSend, onChangeName }) => {
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

export default reduxForm({
  form: 'initForm'
})(InitForm);
