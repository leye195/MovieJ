import React from 'react';
import Movie from './Movie';
import '../style/MovieList.css';
import Button from '@material-ui/core/Button';
import * as services from '../services/posts'; 
class MovieList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            total_pages:0,
            movie_list:[],
            cur_page:0,
            view:"poster",
            lan:'ko-KR',
            completed:0
        }
    }
    shouldComponentUpdate(nextProps,nextState){
        return this.state.cur_page!==nextState.cur_page;
    }
    componentDidMount(){
        this.timer=setInterval(this.progress,20);
        const{cur_page}=this.state;
        this.getMovies(cur_page+1);
    }
    componentWillUnmount(){
    }
    progress=()=>{
        const{completed}=this.state;
        this.setState({
            completed:completed >= 100 ? 0 : completed + 1
        })
    }
    getMovies=async(page)=>{
        const{lan}=this.props;
        const movies=await services.getAllMovies(page,lan);
        this.setState({
            total_pages:movies.data.total_pages,
            movie_list:movies.data.results,
            lan:lan,
            cur_page:page
        });
    }
    handleView=(e)=>{
        console.log(e.target.value);
        this.setState({
            view:e.target.value
        })
        //if(e.target.value==="poster")
        //}else if(e.target.value==="backdrop")
    }
    handleNext=()=>{
        const{cur_page,total_pages,lan}=this.state;
        console.log("Next");
        if(cur_page<total_pages){
            this.setState({
                cur_page:cur_page+1
            })
            this.getMovies(cur_page+1,lan);
        }else{
            alert("Done");
        }
    }
    handlePrev=()=>{
        const{cur_page,lan}=this.state;
        console.log("Prev");
        if(cur_page>1){
            this.setState({
                cur_page:cur_page-1
            })
            this.getMovies(cur_page-1,lan);
        }else{
            alert("Page can not less than 1");
        }
    }
    render(){
        const{movie_list,cur_page,view,lan}=this.state;
        const movies=movie_list.map((movie,i)=>{
            return <Movie id={movie.id} key={movie.id} title={movie.title} release_date={movie.release_date} 
                    poster={this.state.view==="poster"?movie.poster_path:movie.backdrop_path} overview={movie.overview} view={view} lan={"/"+lan}></Movie>
        })
        return(
        <div>
            <div className="select_wrapper">
                <span><b>View </b></span>
                <select onChange={this.handleView}>
                    <option value="poster">Poster Card</option>
                    <option value="backdrop">Backdrop Card</option>
                </select>
            </div>
            <div className="movies_wrapper">
                {movies}
            </div>
            <div className="btns">
                <Button variant="contained" color="primary" onClick={this.handlePrev}>Previous</Button>
                <span><b>{cur_page}</b></span>
                <Button variant="contained" color="primary" onClick={this.handleNext}>Next</Button>
            </div>
        </div>
        )
    }
}
export default MovieList;
