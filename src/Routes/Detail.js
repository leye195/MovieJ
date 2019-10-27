import React from 'react';
import MovieDetail from '../components/MovieDetail';
import Header from '../components/Header';
import {Link} from 'react-router-dom';
class Detail extends React.Component{
    render(){
        const{match}=this.props;
        console.log(match.params.lan);
        return (
            <div>
                <Header to="/movie_detail" lan={"/"+match.params.lan} id={"/"+match.params.id}/>
                <MovieDetail id={match.params.id} lan={match.params.lan}></MovieDetail>      
            </div>
        );
    }
};

export default Detail;