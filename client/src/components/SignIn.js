import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { onSignIn } from "../actions/index";
import { connect } from "react-redux";

class SignIn extends Component {
  onFormSubmit({ email, password }) {
    this.props.onSignIn({ email, password }, () => {
      this.props.history.push("/");
    });
  }

  onError() {
    if (this.props.errorMessage) {
      return <p style={{ color: "red" }}>{this.props.errorMessage}</p>;
    }
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
            type="password"
            name="password"
            component="input"
            autoComplete="true"
          />
          {this.onError()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { errorMessage: state.auth.payload };
};

export default reduxForm({
  form: "signin",
  fields: ["email", "password"]
})(connect(mapStateToProps, { onSignIn })(SignIn));
