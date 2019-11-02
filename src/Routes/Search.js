import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import * as services from '../services/posts'; 
class Search extends React.Component{
    
    componentDidUpdate(){

    }
    render(){
        //const{match}=this.props;
        //const lan_url=match.url;
        return(
            <div>
                <Header></Header>
                <SearchBar></SearchBar>
                <div className="search_results_container"> 
                    <h2>
                        Search > Results
                    </h2>
                </div>
            </div>
        )
    }
}
export default Search;