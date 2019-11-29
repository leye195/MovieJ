import React, { Component } from './node_modules/react';
//import * as actions from '../actions';
import {connect} from './node_modules/react-redux'; 
import Header from '../components/Header';
import {Link} from './node_modules/react-router-dom';
import '../style/Login.css';
import * as services from '../services/posts'; 
class SignUp extends Component {
    getResult=async(id,pwd)=>{
        const result=await services.signup(id,pwd);
        if(result.data.result===0)
            alert(result.data.error);
        else{
            alert(`Sign Up Success`);
            window.location.href="/login";
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const id=document.querySelector("#id"),pwd=document.querySelector("#pwd"),pwd_again=document.querySelector("#pwd_again");
        //console.log(id.value);
        if(pwd.value===pwd_again.value)
            this.getResult(id.value,pwd.value);
        else
            alert("Please check your password");
     }
    render() {
        return (
            <div>
                <Header></Header>   
                <div className="form_container">
                    <h2>SignUp</h2>
                    <form id="form" method="post" onSubmit={this.handleSubmit}>
                        <div><input id="id" type="text" placeholder="ID"></input></div>
                        <div><input id="pwd" type="password" placeholder="Password" ></input></div>
                        <div><input id="pwd_again" type="password" placeholder="RePassword"></input></div>
                        <div>
                            <input type="submit" value="SignUp" ></input>
                            <button><Link to="/login">Cancel</Link></button>
                        </div>
                </form>
                </div>
            </div>
        );
    }
}

export default connect()(SignUp);