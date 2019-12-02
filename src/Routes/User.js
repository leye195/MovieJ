import React, { Component } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import '../style/User.css';
class User extends Component {
    render() {
        const info=this.props;
        console.log(info.location.pathname);
        return (
            <div>
                <Header></Header>
                <SearchBar></SearchBar>
                <div className="userpage-container">
                    <div className="u">
                        <div id="fav">Favorites</div>
                        <div id="edi">Edit</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;