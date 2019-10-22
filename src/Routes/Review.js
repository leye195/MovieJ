import React from 'react';
import MovieReview from '../components/MovieReview';
import MovieReviewList from '../components/MovieReviewList';
import '../style/Review.css';
class Review extends React.Component{
    handleBack=()=>{
        console.log("Back Clicked");
        const{history,match,location}=this.props;
        const title=new URLSearchParams(location.search).get('title');
        if(match.params.r_id===undefined)
            history.push('/movie_detail/'+match.params.id);
        else
            history.push('/movie_review/'+match.params.id+"?title="+title);
    }
    render(){
        const{match,location}=this.props;
        let tag="";
        const title=new URLSearchParams(location.search).get('title');
        if(match.params.r_id===undefined){
            tag=<MovieReviewList id={match.params.id} title={title}></MovieReviewList>
        }else{
            tag=<MovieReview id={match.params.id} r_id={match.params.r_id} title={title}></MovieReview>
        }
        return(
            <div>
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