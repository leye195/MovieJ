import React, { Component } from "react";
//import * as actions from '../actions';
import { connect } from "react-redux";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "../style/Login.css";
import * as services from "../services/posts";
class SignUp extends Component {
  getResult = async (id, name, password) => {
    const result = await services.signup(id, name, password);
    console.log(result.data);
    if (result.data.result === 0) alert(result.data.error);
    else {
      alert(`Sign Up Success`);
      window.location.href = "/login";
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    const id = document.querySelector("#id"),
      name = document.querySelector("#name"),
      pwd = document.querySelector("#pwd"),
      pwd_again = document.querySelector("#pwd_again");
    //console.log(id.value);
    if (pwd.value === pwd_again.value)
      this.getResult(id.value, name.value, pwd.value);
    else alert("Please check your password");
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
              ></input>
            </div>
            <div>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
              ></input>
            </div>
            <div>
              <input
                id="pwd"
                name="password1"
                type="password"
                placeholder="Password"
              ></input>
            </div>
            <div>
              <input
                id="pwd_again"
                name="password2"
                type="password"
                placeholder="Verify Password"
              ></input>
            </div>
            <div>
              <input type="submit" value="SignUp"></input>
              <button>
                <Link to="/login">Cancel</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(SignUp);
