import React from 'react';
import MovieReview from '../components/MovieReview';
import MovieReviewList from '../components/MovieReviewList';
import SearchBar from '../components/SearchBar';
import '../style/Review.css';
class Review extends React.Component{
    handleBack=()=>{
        console.log("Back Clicked");
        const{history,match,location}=this.props;
        const title=new URLSearchParams(location.search).get('title');
        if(match.params.r_id===undefined)
            history.push('/movie_detail/'+match.params.id+'/'+match.params.lan);
        else
            history.push('/movie_review/'+match.params.id+'/'+match.params.lan+"?title="+title);
    }
    render(){
        const{match,location}=this.props;
        let tag="";
        const title=new URLSearchParams(location.search).get('title');
        console.log(match.params);
        if(match.params.r_id===undefined){
            tag=<MovieReviewList id={match.params.id} title={title} lan={match.params.lan}></MovieReviewList>
        }else{
            tag=<MovieReview id={match.params.id} r_id={match.params.r_id} title={title} lan={match.params.lan}></MovieReview>
        }
        return(
            <div>
                <SearchBar lan={match.params.lan}></SearchBar>
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