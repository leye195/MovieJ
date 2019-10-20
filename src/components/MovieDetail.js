import React from 'react';
import '../style/MovieDetail.css';
import * as services from '../services/posts'; 
class MovieDetail extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:0,
            title:'',
            overview:'',
            vote_average:0.0,
            backdrop:'',
            poster_path:'',
            status:'',
            runtime:0,
            release_date:"",
            tagline:""
        };
    }
    componentDidMount(){
        const{id}=this.props;
        this.getDetail(id);
    }
    getDetail=async(id)=>{
        const movie_info=await services.getMovieInfo(id);
        console.log("--------------------------");
        console.log(movie_info.data);
        console.log("-----------Done-----------");
        this.setState({
            id:id,
            title:movie_info.data.title,
            overview:movie_info.data.overview,
            vote_average:movie_info.data.vote_average,
            backdrop:movie_info.data.backdrop_path,
            poster_path:movie_info.data.poster_path,
            state:movie_info.data.status,
            runtime:movie_info.data.runtime,
            release_date:movie_info.data.release_date,
            tagline:movie_info.data.tagline
        })
        let detail=document.getElementsByClassName("detail");
        console.log(detail);
        detail[0].style.backgroundImage="url(https://image.tmdb.org/t/p/w500"+this.state.backdrop+")";
    }
    render(){
        const{title,overview,vote_average,poster_path,tagline,runtime,release_date}=this.state;
        //const backgroundImg=`https://image.tmdb.org/t/p/w500`+backdrop
        return (
            <div className="detail">
                <div className="movie_wrapper" style={{width:"1350px", display:"flex"}}>
                    <div className="img_container">
                        <img alt={title} src={`https://image.tmdb.org/t/p/w500`+poster_path}></img>
                    </div>
                    <div className="info_container">
                        <h2 className="movie_title">{title}</h2>
                        <h3>{tagline}</h3>
                        <div className="overview">
                            <h3>OverView</h3>
                            <p><b>{overview}</b></p>
                        </div>
                        <div className="vote_rate">
                            <h2>Average Rate: {vote_average}</h2>
                        </div>
                        <p>Release Date: {release_date}</p>
                        <p>Running Timg: {runtime} mins</p>
                    </div>
                </div>
            </div>
        );
    }
};

export default MovieDetail;