import React from 'react';
import Movie from './Movie';
import '../style/MovieList.css';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';  
import * as actions from '../actions';
import * as services from '../services/posts'; 

class MovieList extends React.Component{
    shouldComponentUpdate(nextProps,nextState){
        if(this.props.lan!==nextProps.lan){
            return true;
        }
        if(this.props.cur_page!==nextProps.cur_page)
            return true;
        if(this.props.view!==nextProps.view)
            return true;
        return false;
    }
    componentDidMount(){
        const{cur_page}=this.props;
        this.getMovies(cur_page+1);
    }
    componentWillUnmount(){}
    getMovies=async(page)=>{
        const lan=this.props.lang;
        console.log(lan+"::");
        const movies=await services.getAllMovies(page,lan);
        this.props.handleMovielist(movies.data.results,movies.data.total_pages,page);
    }
    ChangeView=(e)=>{
        //console.log(e.target.value);
        this.props.handleView(e.target.value);
    }
    onNext=()=>{
        const{cur_page,total_pages}=this.props;
        //console.log("Next");
        if(cur_page<total_pages){
            this.getMovies(cur_page+1);
        }else{
            alert("Done");
        }
    }
    onPrev=()=>{
        const{cur_page}=this.props;
        //console.log("Prev");
        if(cur_page>1){
            this.getMovies(cur_page-1);
        }else{
            alert("Page can not less than 1");
        }
    }
    render(){
        const{movie_list,cur_page,view,lan,total_pages}=this.props;
        const movies=movie_list.map((movie,i)=>{
            return <Movie id={movie.id} key={movie.id} title={movie.title} release_date={movie.release_date} 
                    poster={view==="poster"?movie.poster_path:movie.backdrop_path} overview={movie.overview} view={view} lan={"/"+lan}></Movie>
        })
        return(
        <div>
            <div className="select_wrapper">
                <span><b>View </b></span>
                <select onChange={this.ChangeView}>
                    <option value="poster">Poster Card</option>
                    <option value="backdrop">Backdrop Card</option>
                </select>
            </div>
            <div className="movies_wrapper">
                {movies}
            </div>
            <div className="btns">
                <Button variant="contained" color="primary" onClick={this.onPrev}>Previous</Button>
                <span><b>{`${cur_page}/${total_pages}`}</b></span>
                <Button variant="contained" color="primary" onClick={this.onNext}>Next</Button>
            </div>
        </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        total_pages:state.movielist.total_pages,
        movie_list:state.movielist.movie_list,
        cur_page:state.movielist.cur_page,
        view:state.movielist.view,
        lan:state.movielist.lan,
    };
}
const mapDispatchToProps=(dispatch)=>{
    return{
        handlePrev:(cur_page)=>{
            dispatch(actions.previousbtn(cur_page))
        },
        handleNext:(cur_page)=>{
            dispatch(actions.nextbtn(cur_page))
        },
        handleView:(view)=>{
            dispatch(actions.view(view))
        },
        handleMovielist:(movie_list,total_pages,cur_page)=>{
            dispatch(actions.get_movielist(movie_list,total_pages,cur_page))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MovieList);
