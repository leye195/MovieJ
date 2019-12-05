import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import cookie from 'cookie';
import * as actions from '../actions';
import * as services from '../services/posts'; 
class Header extends React.Component{
    /**
     * check User already Login or Not
     */
    checkLogin=()=>{
        const loggedIn=localStorage.loggedIn;
        if(loggedIn){
            console.log(loggedIn);
            return JSON.parse(loggedIn);
        }else{
            return {loggedIn:false};
        }
    }
    handleClick=(e)=>{
        const callout=document.querySelector(".callout"),menu=document.querySelector(".header_menu");
        if(callout.classList.contains('m_show')){
            callout.classList.remove('m_show');
            callout.classList.add('m_hide');
        }else{
            callout.classList.remove('m_hide');
            callout.classList.add('m_show');
        }
        if(menu.classList.contains('m_show')){
            menu.classList.remove('m_show');
            menu.classList.add('m_hide');
        }else{
            menu.classList.remove('m_hide');
            menu.classList.add('m_show');
        }
    }
    /**
     * User Logout
     */
    handleLogOut=()=>{
        return this.props.logoutRequest()
        .then(()=>{
            if(this.props.status==="waiting"){
                //document.cookie="key=;Max-Age=0";
                localStorage.clear(); //localStorage Clear
                window.location.href="/";
            }
        })
    }
    render(){
        const{to,id,lan}=this.props;
        const check=this.checkLogin();
        //console.log("??"+lan);
        return(
            <header>
            <div>
                <h1 style={{Fontsize:"1.5rem"}}><a href={lan==="en-US"?"/en-US":"/ko-KR"}>MovieJ</a></h1>
                <span></span>
                <p className="language-container">
                    <a href={lan!=="en-US"?to+id+"/en-US":"#"} ><span className="en">En</span></a>
                    <a href={lan!=="ko-KR"?to+id+"/ko-KR":"#"}><span className="kr">Kr</span></a>
                    {check.loggedIn===true? <span id="user" onClick={this.handleClick}>{check.name}</span>:
                    <a href={"/login"}><span>Login</span></a>}
                </p>
                <div className="callout m_hide"></div>
                <div className="header_menu m_hide">
                    <ul className="menu_list">
                        <li><span><Link to="/user/favorites">Favorites</Link></span></li>
                        <li><span><Link to="/user/edit">Edit</Link></span></li>
                        <li><span onClick={this.handleLogOut}>LogOut</span></li>
                    </ul>
                </div>
            </div>
            </header> 
        )
    }
}
Header.defaultProps={
    to:'',
    id:'',
    lan:'en-US'
}
const mapStateToProps=(state)=>{
    return{status:state.login.login.status};
}
const mapDispatchToProps=(dispatch)=>{
    return{
        logoutRequest:()=>{
            dispatch(actions.logout());
            return services.logout()
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);