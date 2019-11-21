import React from 'react';
import user from '../img/user.svg'
class Cast extends React.Component{
    render(){
        const{profile,chacter,name,id}=this.props;
        return(
            <div className="cast_item">
                <a href={"MovieJ/people/"+id}>
                    <img src={profile!==null?"https://image.tmdb.org/t/p/w500"+profile:user} alt={name}></img>
                    <p><b>{name}</b></p>
                    <p>{chacter}</p>
                </a> 
            </div>
        )
    }
}
export default Cast; 