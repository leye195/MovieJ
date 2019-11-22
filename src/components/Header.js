import React from 'react';
import { Link } from 'react-router-dom';
class Header extends React.Component{
    render(){
        const{to,id,lan}=this.props;
        console.log("Header: "+lan);
        return(
            <header>
            <div>
                <h1><a href={lan}>MovieJ</a></h1>
                <p className="language-container">
                <a href={lan!=="en-US"?"/MovieJ"+to+id+"/en-US":"#"} ><span className="en">En</span></a>
                <a href={lan!=="ko-KR"?"/MovieJ"+to+id+"/ko-KR":"#"}><span className="kr">Kr</span></a>
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