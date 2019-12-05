import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import Header from '../components/Header';
import {Link} from 'react-router-dom';
import '../style/Login.css';
import * as actions from '../actions';
import * as services from '../services/posts'; 
class Login extends Component {
    /*getResult=async(id,pw)=>{
        const result=await services.login(id,pw);
        console.log(result.data);
        if(result.error===0){

        }else
            alert("id or password is wrong");
    }*/
    handleLogin=(e)=>{
        e.preventDefault();
        const id=document.querySelector("#id"),pw=document.querySelector("#password");
        return this.props.loginRequest(id.value,pw.value)
            .then(()=>{
                if(this.props.status==="success"){
                    let loginData={
                        loggedIn:true,
                        name:id.value
                    }
                    document.cookie=`key=${JSON.stringify(loginData)}`;
                    this.props.history.push('/');
                    return true;
                }else{
                    alert("Incorrect ID or Password");
                    return false;
                }
            })
    }
    render() {
        return (
            <div>
                <Header></Header>   
                <div className="form_container">
                    <h2>Login </h2>
                <form id="form" method="post" onSubmit={this.handleLogin}>
                    <div><input id="id" type="text" placeholder="ID"></input></div>
                    <div><input id="password" type="password" placeholder="Password"></input></div>
                    <div>
                        <input type="submit" value="Login"></input>
                        <button><Link to={"/signup"}>Sign Up</Link></button>
                    </div>
                </form>
                </div>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        lan:state.movielist.lan,
        status:state.login.login.status
    };
}
const mapDispatchToProps=(dispatch)=>{
    return{
        loginRequest:(name,pw)=>{
            dispatch(actions.login());
            return services.login(name,pw)
                .then((response)=>{
                    dispatch(actions.loginSuccess(name))
                }).catch((err)=>{
                    dispatch(actions.loginFailure())
                });
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);