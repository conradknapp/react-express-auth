import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { onSignIn } from "../actions/index";
import { connect } from "react-redux";

class SignIn extends Component {
  onFormSubmit({ email, password }) {
    console.log(email, password);

    this.props.onSignIn({ email, password });
  }

  render() {
    const { handleSubmit, fields: { email, password } } = this.props;

    return (
      <div>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
          <Field
            {...email}
            placeholder="Email"
            name="email"
            component="input"
          />
          <Field
            {...password}
            placeholder="Password"
            name="password"
            component="input"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "signin",
  fields: ["email", "password"]
})(connect(null, { onSignIn })(SignIn));
