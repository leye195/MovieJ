import React, { Component } from 'react';
//import * as actions from '../actions';
import {connect} from 'react-redux'; 
import Header from '../components/Header';
import {Link} from 'react-router-dom';
import '../style/Login.css';
class Login extends Component {
    render() {
        //const{lan}=this.props;
        //console.log(lan);
        return (
            <div>
                <Header></Header>   
                <div className="form_container">
                    <h2>Login </h2>
                <form id="form" method="get">
                    <div><input type="text" placeholder="Id" name="id"></input></div>
                    <div><input type="password" placeholder="Password" name="password"></input></div>
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
    return{lan:state.movielist.lan};
}
export default connect(mapStateToProps)(Login);