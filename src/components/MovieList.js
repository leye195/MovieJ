import React from 'react';
import Movie from './Movie';
import SearchBar from './SearchBar';
import '../style/MovieList.css';
import { Button } from 'semantic-ui-react'; 
import * as services from '../services/posts'; 
class MovieList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            total_pages:0,
            movie_list:[],
            cur_page:1,
            view_flag:0
        }
    }
    shouldComponentUpdate(nextProps,nextState){
        return nextState!==this.state;
    }
    componentDidMount(){
        const{cur_page}=this.state;
        this.getMovies(cur_page);
        //console.log(cur_page);
    }
    getMovies=async(page)=>{
        const movies=await services.getAllMovies(page);
        this.setState({
            total_pages:movies.data.total_pages,
            movie_list:movies.data.results
        });
        //return movies.data.results;
    }
    handleView=(e)=>{
        console.log(e.target.value);
        this.setState({
            view_flag:e.target.value
        })
        if(e.target.value===0){

        }else if(e.target.value===1){

        }
    }
    handleNext=()=>{
        const{cur_page,total_pages}=this.state;
        console.log("Next");
        if(cur_page<total_pages){
            this.setState({
                cur_page:cur_page+1
            })
            this.getMovies(cur_page+1);
        }else{
            alert("Done");
        }
    }
    handlePrev=()=>{
        const{cur_page}=this.state;
        console.log("Prev");
        if(cur_page>1){
            this.setState({
                cur_page:cur_page-1
            })
            this.getMovies(cur_page-1);
        }else{
            alert("Page can not less than 1");
        }
    }
    render(){
        const{movie_list,cur_page}=this.state;
        //console.log(movie_list);
        const movies=movie_list.map((movie,i)=>{
            return <Movie id={movie.id} key={movie.id} title={movie.title} release_date={movie.release_date} 
                    poster={movie.poster_path} overview={movie.overview}></Movie>
        })
        return(
        <div>
            <SearchBar></SearchBar>
            <div className="select_wrapper">
                <span><b>View </b></span>
                <select onChange={this.handleView}>
                    <option value={0}>Poster Card</option>
                    <option value={1}>Backdrop Card</option>
                </select>
                </div>
            <div className="movies_wrapper">
                {movies}
            </div>
            <div className="btns">
                <Button labelPosition='left' icon='left chevron' content='Back' onClick={this.handlePrev}/>
                <span><b>{cur_page}</b></span>
                <Button labelPosition='right' icon='right chevron' content='Next' onClick={this.handleNext}/>
            </div>
        </div>
        )
    }
}

export default MovieList;
