import React from './node_modules/react';
import MovieReview from '../components/MovieReview';
import MovieReviewList from '../components/MovieReviewList';
import SearchBar from '../components/SearchBar';
import '../style/Review.css';
import Header from '../components/Header';
class Review extends React.Component{

    /**
     * Back to detail or review page
     */
    handleBack=()=>{
        console.log("Back Clicked");
        const{history,match,location}=this.props;
        const title=new URLSearchParams(location.search).get('title');
        if(match.params.r_id===undefined)
            history.push('MovieJ/movie_detail/'+match.params.id+'/'+match.params.lan);
        else
            history.push('MovieJ/movie_review/'+match.params.id+'/'+match.params.lan+"?title="+title);
    }
    render(){
        const{match,location}=this.props;
        const {lan,r_id,id}=match.params;
        let tag="";
        const title=new URLSearchParams(location.search).get('title');
        //console.log(match.params);
        if(match.params.r_id===undefined){
            tag=<MovieReviewList id={id} title={title} lan={lan}></MovieReviewList>
        }else{
            tag=<MovieReview id={id} r_id={r_id} title={title} lan={lan}></MovieReview>
        }
        return(
            <div>
                <Header lan={lan==="ko-KR"?"ko-KR":"en-US"}></Header>
                <SearchBar lan={lan==="ko-KR"?"ko-KR":"en-US"}></SearchBar>
                <div className="back" onClick={this.handleBack}>
                    <h2>{title}</h2>
                    <h3>← Back to Detail</h3>
                </div>
                {tag}
            </div>
        )
    }
}
export default Review;