import React, { Component } from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux'; 
import Header from '../components/Header';
import {Link} from 'react-router-dom';
import '../style/Login.css';
class SignUp extends Component {
    render() {
        return (
            <div>
                <Header></Header>   
                <div className="form_container">
                    <h2>SignUp</h2>
                    <form id="form" method="get">
                        <div><input type="text" placeholder="Id" name="id"></input></div>
                        <div><input type="password" placeholder="Password" name="password"></input></div>
                        <div><input type="password" placeholder="RePassword" name="password_again"></input></div>
                        <div>
                            <input type="submit" value="SignUp"></input>
                            <button><Link to="/login">Cancel</Link></button>
                        </div>
                </form>
                </div>
            </div>
        );
    }
}

export default SignUp;