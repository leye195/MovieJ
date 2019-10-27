import React from 'react';
import '../style/MovieDetail.css';
import * as services from '../services/posts'; 
import {Link} from 'react-router-dom';
import Recommendation from "./Recommendation";
import TrendView from './TrendView';
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
            tagline:"",
            revenue:0,
            review:undefined
        };
    }
    shouldComponentUpdate(nextProps,nextState){
        return nextState!==this.state;
    }
    componentDidMount(){
        const{id,lan}=this.props;
        this.getDetail(id,lan);
        this.getReviews(id);
    }
    getDetail=async(id,lan)=>{
        const movie_info=await services.getMovieInfo(id,lan);
        //console.log("--------------------------");
        //console.log(movie_info.data);
        //console.log("-----------Done-----------");
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
            tagline:movie_info.data.tagline,
            revenue:movie_info.data.revenue
        })
        //console.log("-----------Backdrop-----------");
        //console.log(this.state.backdrop);
        //console.log("-----------Backdrop-----------");
        let detail=document.getElementsByClassName("detail");
        detail[0].style.backgroundImage="url(https://image.tmdb.org/t/p/w500"+this.state.backdrop+")";
    }
    getReviews=async(id)=>{
        const reviews=await services.getReviews(id);
        //console.log(reviews);
        if(reviews.data.results.length>0){
            this.setState({
                review:reviews.data.results[reviews.data.results.length-1]
            })
        }
    }
    render(){
        const{id,title,overview,vote_average,poster_path,tagline,runtime,release_date,revenue,review}=this.state;
        const{lan}=this.props;
        let review_tag=<div className="review_notice">Sorry, We don't have any reviews for this movie</div>;
        if(review!==undefined){
            review_tag=
            <div>
            <div className="card">
                <h3 className="review_author">A review Written by {review.author}</h3>
                <p className="review_content">{review.content}</p>
                <Link to={`/movie_review/`+id+`/`+review.id+'?title='+title}>Read more...</Link>
            </div>
            <p className="read_all">
                <Link to={`/movie_review/`+id+'?title='+title}>Read All Reviews</Link>
            </p>
            </div>
        }
        return (
            <div>
            <div className="detail">
                <div className="custom_bg">
                <div className="movie_wrapper" style={{width:"1350px", display:"flex",padding:"10px"}}>
                    <div className="img_container">
                        <img alt={title} src={`https://image.tmdb.org/t/p/w500`+poster_path}></img>
                    </div>
                    <div className="info_container">
                        <h2 className="movie_title">{title}</h2>
                        <h3>{tagline}</h3>
                        <div className="overview">
                            <h3>{lan==="en-US"?"OverView":"줄거리"}</h3>
                            <p><b>{overview}</b></p>
                        </div>
                        <div className="vote_rate">
                            <h2>{lan==="en-US"?"Average Rate: "+vote_average:"평균 평점: "+vote_average}/10</h2>
                        </div>
                        <p>{lan==="es-US"?"Release Date: "+release_date:"개봉 일: "+release_date}</p>
                        <p> {lan==="en-US"?"Running Time: "+runtime+"mins":"재생 시간: "+runtime+"분"} </p>
                        <p>Box Office: ${revenue.toLocaleString()}</p>
                        <div className="movie_link" style={{color:"white"}}>
                            Link Space
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
            <div className="menu">
                <h3>{lan==="en-US"?"Review":"리뷰"}</h3>
            </div>
            <div className="review_container">
                {review_tag}
            </div>
            <hr></hr>
            <Recommendation id={this.props.id} lan={lan}/>
            <div className="trend menu">
                <h3>TrendView</h3>
                <TrendView/>
            </div>
            </div>
        );
    }
};

export default MovieDetail;