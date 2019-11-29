import React from 'react';
import MovieList from '../components/MovieList';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import * as actions from '../actions';
import {connect} from 'react-redux';  
class Home extends React.Component{
    constructor(props){
        super(props)
        const url=this.props.match.url;
        this.props.handleLanguage(url.substr(1,url.length));
    } 
    
    render(){
        const lan_url=this.props.match.url;
        let movies="";

        if(lan_url==="/ko-KR")
            movies=<MovieList lang="ko-KR"></MovieList>
        else if(lan_url==="/" ||lan_url==="/en-US")
            movies=<MovieList lang="en-US"></MovieList>
        return (
            <div>
                <div>
                    <Header lan={lan_url==="/"||lan_url!=="/ko-KR"?"ko-KR":"en-US"}></Header>
                    <SearchBar lan={lan_url==="/"||lan_url!=="/ko-KR"?"ko-KR":"en-US"}></SearchBar>
                </div>
                {movies}
            </div>
        );
    }
};
const mapStateToProps=(state)=>{
    return{
        lan:state.movielist.lan
    };
}
const mapDispatchToProps=(dispatch)=>{
    return{
        handleLanguage:(lan)=>{dispatch(actions.language(lan))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);