import React from 'react';
import * as services from '../services/posts';
import {Link} from 'react-router-dom';
class MovieReviewList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            reviews:[]
        }
    }
    componentDidMount(){
        const{id}=this.props;
        this.getReviews(id);
    }
    getReviews=async(id)=>{
        const reviews=await services.getReviews(id);
        //console.log(reviews.data.results);
        this.setState({
            reviews:reviews.data.results
        })
    }
    render(){
        const{reviews}=this.state;
        const{id,title}=this.props;
        const review_list=reviews.map((review)=>{
            return <div key={review.id} className="card">
                        <h2 className="review_author">A review written by {review.author}</h2>
                        <p className="review_content">{review.content}</p>
                        <Link to={`/movie_review/`+id+`/`+review.id+"?title="+title}>Read more...</Link>
                   </div>
        });
        return(
            <div className="r_wrapper">
                <div className="review_list">
                    {review_list}
                </div>
            </div>
        )
    }
}
export default MovieReviewList;