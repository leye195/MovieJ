import React from 'react';
import {connect} from 'react-redux'; 
import * as actions from '../actions';
import * as services from '../services/posts'; 
import {Link} from 'react-router-dom';
class Header extends React.Component{
    checkLogin=()=>{
        if(document.cookie){
            const user_info=JSON.parse(document.cookie);
            if(user_info.loggedIn)
                return true;
        }
        return false;
    }
    handleLogOut=()=>{
        return this.props.logoutRequest()
        .then(()=>{
            if(this.props.status==="waiting"){
                document.cookie="";
                window.location.href="/";
            }
        })
    }
    render(){
        const{to,id,lan}=this.props;
        const loggedIn=this.checkLogin();
        return(
            <header>
            <div>
                <h1 style={{Fontsize:"1.5rem"}}><Link to={lan==="en-US"?"/en-US":"/ko-KR"}>MovieJ</Link></h1>
                <p className="language-container">
                    <a href={lan!=="en-US"?to+id+"/en-US":"#"} ><span className="en">En</span></a>
                    <a href={lan!=="ko-KR"?to+id+"/ko-KR":"#"}><span className="kr">Kr</span></a>
                    {loggedIn===true?<a href onClick={this.handleLogOut}><span>LogOut</span></a>:<a href={"/login"}><span>Login</span></a>}
                </p>
            </div>
            </header> 
        )
    }
}
Header.defaultProps={
    to:'',
    id:'',
    lan:'/en-US'
}
const mapStateToProps=(state)=>{
    return{status:state.login.login.status};
}
const mapDispatchToProps=(dispatch)=>{
    return{
        logoutRequest:()=>{
            dispatch(actions.logout())
            return services.logout()
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);