import React, { Component } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

class User extends Component {
    render() {
        const info=this.props;
        console.log(info.location.pathname);
        return (
            <div>
                <Header></Header>
                <SearchBar></SearchBar>
                <div className="">
                    Users Fa
                </div>
            </div>
        );
    }
}

export default User;