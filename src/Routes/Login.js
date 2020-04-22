import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "../style/Login.css";
import * as services from "../services/posts";
import Cookies from "universal-cookie";
import { login, loginSuccess, loginFailure } from "../reducers/login";
class Login extends Component {
  handleLogin = (e) => {
    e.preventDefault();
    const id = document.querySelector("#id"),
      pw = document.querySelector("#password");
    /*return this.props.loginRequest(id.value, pw.value).then(() => {
      const { status, _id } = this.props;
      if (status === "success") {
        let loginData = {
          loggedIn: true,
          name: id.value,
          _id,
        };
        localStorage.loggedIn = JSON.stringify(loginData);
        window.location.href = "/";
        return true;
      } else {
        alert("Incorrect ID or Password");
        return false;
      }
    });*/
  };
  onClickSign = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <Header></Header>
        <div className="form_container">
          <h2>Login </h2>
          <form id="form" method="post" onSubmit={this.handleLogin}>
            <div>
              <input
                id="id"
                type="text"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="ls-container">
              <input type="submit" value="Login" />
              <Link to={"/signup"}>Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    lan: state.movielist.lan,
    status: state.login.login.status,
    _id: state.login.login._id,
    loggedIn: state.login.login.isLoggedIn,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (name, pw) => {
      dispatch(login());
      return services.login(name, pw).then((response) => {
        if (response.data.success === 1) {
          const cookies = new Cookies();
          cookies.set("atk", response.data.token, {
            path: "/",
            //httpOnly: true,
            maxAge: 60 * 60 * 24,
          });
          console.log(cookies.get("atk"));
          dispatch(
            loginSuccess({
              _id: response.data.uid,
              name,
            })
          );
        } else dispatch(loginFailure());
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
