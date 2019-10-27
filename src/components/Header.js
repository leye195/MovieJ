import React from 'react';
import {Link} from 'react-router-dom';
class Header extends React.Component{
    render(){
        const{to,id,lan}=this.props;
        return(
            <header>
            <div>
                <h1><Link to={lan}>MovieJ</Link></h1>
                <p className="language-container">
                <a href={to+id+"/en-US"}><span className="en">En</span></a>
                <a href={to+id+"/ko-KR"}><span className="kr">Kr</span></a>
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