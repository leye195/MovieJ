import React from 'react';
import {Link} from 'react-router-dom';
class Header extends React.Component{
    render(){
        const{to,id,lan}=this.props;
        //console.log("Header: "+lan);
        return(
            <header>
            <div>
                <h1 style={{Fontsize:"1.5rem"}}><Link to={lan==="en-US"?"/en-US":"/ko-KR"}>MovieJ</Link></h1>
                <p className="language-container">
                <a href={lan!=="en-US"?to+id+"/en-US":"#"} ><span className="en">En</span></a>
                <a href={lan!=="ko-KR"?to+id+"/ko-KR":"#"}><span className="kr">Kr</span></a>
                <a href={"/login"}><span>Login</span></a>
                </p>
            </div>
            </header> 
        )
    }
}
Header.defaultProps={
    to:'',
    id:'',
    lan:'/ko-KR'
};
export default Header;