import React from 'react';
import '../style/MovieDetail.css';
import * as services from '../services/posts'; 
import {Link} from 'react-router-dom';
import Recommendation from './Recommendation';
import Loading from './Loading';
import CastingList from './CastingList';
class MovieDetail extends React.Component{
    constructor(props){
        super(props);
        this.state={
            info:{
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
            review:undefined,},
            completed:0,
            load:false,
            credits:{}
        };
    }
    shouldComponentUpdate(nextProps,nextState){
        return nextState!==this.state;
    }
    componentDidMount(){
        this.timer=setInterval(this.progress,30);
        const{id,lan}=this.props;
        this.getDetail(id,lan);
        this.setState({
            load:true
        })
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }       
    progress = () => {
        const { completed } = this.state;
        this.setState({ completed: completed >= 100 ? clearInterval(this.timer) : completed + 1 });
    };
    getDetail=async(id,lan)=>{
        const movie_info=await services.getMovieInfo(id,lan);
        const reviews=await services.getReviews(id,lan);
        if(reviews.data.results.length>0){
            this.setState({
                info:{
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
                revenue:movie_info.data.revenue,
                review:reviews.data.results[reviews.data.results.length-1]
                }
            })
        }else{
            this.setState({
                info:{
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
                }
            })
        }
        let detail=document.getElementsByClassName("detail");
        if(this.state.info.backdrop!==undefined)
            detail[0].style.backgroundImage="url(https://image.tmdb.org/t/p/w500"+this.state.info.backdrop+")";
        else
            detail[0].style.backgroundImage="url(/Users/yjlee/Documents/WorkSpace/moviej/src/img/collect.gif)";
    }
    render(){
        const{info,load}=this.state;
        const{id,title,overview,vote_average,poster_path,tagline,runtime,release_date,revenue,review}=info;
        const{lan}=this.props;
        var review_tag=<div className="review_notice">{lan==="en-US"?"Sorry, We do not have any reviews for this movie":"리뷰가 없습니다."}</div>;
        if(review!==undefined){
            review_tag=
            <div>
            <div className="card">
                <h3 className="review_author">A review Written by {review.author}</h3>
                <p className="review_content">{review.content}</p>
                <Link to={`/movie_review/`+id+`/`+lan+`/`+review.id+'?title='+title}>Read more...</Link>
            </div>
            <p className="read_all">
                <Link to={`/movie_review/`+id+`/`+lan+'?title='+title}>Read All Reviews</Link>
            </p>
            </div>
        }   
        return (
            <div>
                <div>
                <Loading value={this.state.completed} load={load}></Loading>
                </div>
            <div className="detail">
                <div className="custom_bg">
                <div className="movie_wrapper" style={{display:"flex",padding:"40px"}}>
                    <div className="img_container">
                        <img alt={title} src={`https://image.tmdb.org/t/p/w500`+poster_path}></img>
                    </div>
                    <div className="info_container">
                        <h2 className="movie_title">{title}</h2>
                        <h3>{tagline}</h3>
                        <div className="overview">
                            <h3>{lan==="en-US"?"OverView":"줄거리"}</h3>
                            <p><b>{overview===""?"줄거리가 존재하지 않습니다":overview}</b></p>
                        </div>
                        <div className="vote_rate">
                            <h2>{lan==="en-US"?<p>{`Average Rate:${vote_average}/10`}</p>:<p>{`평균 평점: ${vote_average}/10`}</p>}</h2>
                        </div>
                        <p>{lan==="es-US"?"Released: "+release_date:"개봉 일: "+release_date}</p>
                        <p> {lan==="en-US"?"Running Time: "+runtime+"mins":"재생 시간: "+runtime+"분"} </p>
                        <p>Box Office: ${revenue!==undefined?revenue.toLocaleString():0}</p>
                        <div className="movie_link" style={{color:"white"}}>
                            Link Space
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="casting menu">
                <h3>{lan==="en-US"?"Actors":"출연진"}</h3>
                <CastingList id={this.props.id}></CastingList>
            </div>
            <div className="menu">
                <h3>{lan==="en-US"?"Review":"리뷰"}</h3>
            </div>
            <div className="review_container">
                {review_tag}
            </div>
            <hr></hr>
            <Recommendation id={this.props.id} lan={lan}/>
            </div>
        );
    }
};
export default MovieDetail;