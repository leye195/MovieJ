import React, { Component } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import {Link} from 'react-router-dom';
import '../style/User.css';
class User extends Component {
    favComponent=()=>(
        <div id="fav_div">
            Fav
        </div>
    )
    ediComponent=()=>(
        <div className="edi_div">
            Edi
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
                        <div id="edi"><Link to={`/user/edit`}>Edit</Link></div>
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