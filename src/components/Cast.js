import React from 'react';
import user from '../img/user.svg'
class Cast extends React.Component{
    render(){
        const{profile,chacter,name}=this.props;
        return(
            <div className="cast_item">
                <img src={profile!==null?"https://image.tmdb.org/t/p/w500"+profile:user} alt={name}></img>
                <p><b>{name}</b></p>
                <p>{chacter}</p>  
            </div>
        )
    }
}
export default Cast; 