import React from 'react';
import '../style/SearchBar.css';
class SearchBar extends React.Component{
    render(){
        return(
            <div className="search_bar">
                <section className="search">
                    <div className="sub">
                        <span>
                            <i className="material-icons">Search</i>
                        </span>
                        <input type="text" placeholder="Movie Title"/>
                    </div>
                </section>
            </div>
        )
    }
}
export default SearchBar;