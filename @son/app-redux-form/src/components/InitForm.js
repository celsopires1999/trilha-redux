import { Field, reduxForm } from 'redux-form';

// Component
const InitForm = (props) => {
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
        />
      </div>
      <div class="form-group">
        <button className="btn btn-primary">
            Send
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'initForm'
})(InitForm);
