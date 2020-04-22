import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "../style/Login.css";
import * as services from "../services/posts";
import { signup, signupSuccess, signupFailure } from "../reducers/login";
class SignUp extends Component {
  getResult = async (id, name, password) => {
    const result = await services.signup(id, name, password);
    if (result.data.result === 0) alert(result.data.error);
    else {
      this.props.signSuccess();
      alert(`Sign Up Success`);
      this.props.history.push("/login");
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const id = document.querySelector("#id"),
      name = document.querySelector("#name"),
      pwd = document.querySelector("#pwd"),
      pwd_again = document.querySelector("#pwd_again");
    if (pwd.value === pwd_again.value) {
      this.props.signRequest();
      //this.getResult(id.value, name.value, pwd.value);
    } else alert("Please check your password");
  };
  render() {
    return (
      <div>
        <Header></Header>
        <div className="form_container">
          <h2>SignUp</h2>
          <form id="form" method="post" onSubmit={this.handleSubmit}>
            <div>
              <input
                id="id"
                name="email"
                type="text"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <input
                id="pwd"
                name="password1"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <div>
              <input
                id="pwd_again"
                name="password2"
                type="password"
                placeholder="Verify Password"
                required
              />
            </div>
            <div className="ls-container">
              <input type="submit" value="SignUp" />
              <Link to="/login">Cancel</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    signRequest: () => {
      dispatch(signup());
    },
    signSuccess: () => {
      dispatch(signupSuccess());
    },
    signFailure: () => {
      dispatch(signupFailure());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
