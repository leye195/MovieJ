import React, { Component } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import {Link} from 'react-router-dom';
import '../style/User.css';
import tdwad1 from '../img/tdawd1.png';
class User extends Component {
    favComponent=()=>(
        <div id="fav_div">
            <p>Favorite Movies</p>
            <div className="f_d">
                <div className="empty">Empty</div>
                <img className="e_img" src={tdwad1} alt="empty"></img>
            </div>
        </div>
    )
    ediComponent=()=>(
        <div id="comm_div">
            <p>Comments</p>
            <div className="c_d">
                <div className="empty">Empty</div>
                <img className="e_img" src={tdwad1} alt="empty"></img>
            </div>
        </div>
    )
    render() {
        const {location}=this.props;
        const to=location.pathname.split("/")[2]
        console.log(to)
        return (
            <div>
                <Header></Header>
                <SearchBar></SearchBar>
                <div className="u-container">
                    <div className="u">
                        <div id="fav"><Link to={`/user/favorites`}>Favorites</Link></div>
                        <div id="comm"><Link to={`/user/edit`}>Comments</Link></div>
                    </div>
                </div>
                <div className="u-section">
                    {to==="favorites"?this.favComponent():this.ediComponent()}
                </div>
            </div>
        );
    }
}

export default User;