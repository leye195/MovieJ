import React from './node_modules/react';
import MovieDetail from '../components/MovieDetail';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
class Detail extends React.Component{
    render(){
        const{match}=this.props;
        console.log(match.params.lan+"::");
        return (
            <div>
                <Header to="/movie_detail" lan={match.params.lan} id={"/"+match.params.id}/>
                <SearchBar lan={"/"+match.params.lan}></SearchBar>
                <MovieDetail id={match.params.id} lan={match.params.lan}></MovieDetail>      
            </div>
        );
    }
};

export default Detail;