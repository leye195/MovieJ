import React from 'react';
import MovieReview from '../components/MovieReview';
class Review extends React.Component{
    render(){
        const{match}=this.props;
        console.log(match.params);
        return(
            <div>
                <MovieReview id={match.params.id}></MovieReview>
            </div>
        )
    }
}
export default Review;