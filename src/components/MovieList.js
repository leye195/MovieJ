import React from 'react';
import Movie from './Movie';
import Loading from './Loading';
import '../style/MovieList.css';
import {connect} from 'react-redux';  
import * as actions from '../actions';
import * as services from '../services/posts'; 

class MovieList extends React.Component{
    shouldComponentUpdate(nextProps,nextState){
        if(this.props.lan!==nextProps.lan)
            return true;
        if(this.props.cur_page!==nextProps.cur_page)
            return true;
        if(this.props.view!==nextProps.view)
            return true;
        if(this.props.completed!==nextProps.completed)
            return true;
        return false;
    }
    componentDidMount(){
        this.timer=setInterval(this.progress,30);
        let cur_page=localStorage.cur_page;
        //console.log("From MovieList: "+cur_page);
        if(!cur_page)
            cur_page=this.props.cur_page;
        if(cur_page===-1)
            this.getMovies(1);
        else
            this.getMovies(cur_page);
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.cur_page!==this.props.cur_page)
            localStorage.cur_page=this.props.cur_page;
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }       
    progress = () => {
        const { completed } = this.props;
        if(completed >= 100)
            clearInterval(this.timer)
        else
            this.props.page_loading(completed+1);
    };
    getMovies=async(page)=>{
        const lan=this.props.lang;
        const movies=await services.getAllMovies(page,lan);
        //console.log(movies);
        this.props.handleMovielist(movies.data.results,movies.data.total_pages,page);
    }
    ChangeView=(e)=>{
        this.props.handleView(e.target.value);
    }
    To_first=()=>{
        this.getMovies(1);
    }
    To_end=()=>{
        const{total_pages}=this.props;
        this.getMovies(total_pages);
    }
    onNext=()=>{
        const{cur_page,total_pages}=this.props;
        if(cur_page<total_pages)
            this.getMovies(Number(cur_page)+1);
        else
            alert("Done");
    }
    onPrev=()=>{
        const{cur_page}=this.props;
        if(cur_page>1)
            this.getMovies(Number(cur_page)-1);
        else
            alert("Page can not less than 1");
    }
    render(){
        const{movie_list,cur_page,view,lan,total_pages,completed}=this.props;
       // console.log(lan);
        const movies=movie_list.map((movie,i)=>{
            return <Movie id={movie.id} key={movie.id} title={movie.title} release_date={movie.release_date} 
                    poster={view==="poster"?movie.poster_path:movie.backdrop_path} 
                    overview={movie.overview} view={view} lan={lan} avg_rate={movie.vote_average}>
                    </Movie>
        })
        return(
        <div>
            <div>
                <Loading value={completed}></Loading>
            </div>
            <div className="select_wrapper">
                <span><b>View </b></span>
                <select onChange={this.ChangeView}>
                    <option value="poster">Poster Card</option>
                    <option value="backdrop">Backdrop Card</option>
                </select>
            </div>
            <div className="movies_wrapper">{movies}</div>
            <div className="btns">
                <button onClick={this.To_first} disabled={cur_page>1?false:true}>
                {lan!=="ko-KR"?'To First':'처음'}
                </button>
                <button onClick={this.onPrev} disabled={cur_page>1?false:true}>
                    {lan!=="ko-KR"?'Previous':'이전'}
                </button>
                <span><b>{`${cur_page}/${total_pages}`}</b></span>
                <button onClick={this.onNext} disabled={cur_page<total_pages?false:true}>
                {lan!=="ko-KR"?'Next':'다음'}
                </button>
                <button  onClick={this.To_end} disabled={cur_page<total_pages?false:true}>
                {lan!=="ko-KR"?'To End':'마지막'}
                </button>
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
        completed:state.load.completed
    };
}
const mapDispatchToProps=(dispatch)=>{
    return{
        handlePage:(cur_page)=>{
            dispatch(actions.page(cur_page))
        },
        handleView:(view)=>{
            dispatch(actions.view(view))
        },
        handleMovielist:(movie_list,total_pages,cur_page)=>{
            dispatch(actions.get_movielist(movie_list,total_pages,cur_page))
        },
        page_loading:(completed)=>{
            dispatch(actions.loading(completed))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MovieList);
