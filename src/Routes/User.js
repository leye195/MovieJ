import React, { Component } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

class User extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <SearchBar></SearchBar>
                <div className="userpage">
                    
                </div>
            </div>
        );
    }
}

export default User;