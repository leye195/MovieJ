import React from 'react';
import * as services from '../services/posts';
class MovieReview extends React.Component{
    constructor(props){
        super(props);
        this.state={
            review:{}
        };
    }
    componentDidMount(){
        this.getData();
    }
    getData=async()=>{
        const{r_id}=this.props;
        console.log(r_id);
        const review=await services.getReview(r_id);
        this.setState({
            review:review.data
        });
    }
    render(){
        const{review}=this.state;
        const{title}=this.props;
        //console.log(review);
        return (
            <div className="review card">
                <h2 className="review_author">A review written by {review.author}</h2>
                <p className="all">{review.content}</p>
            </div>
        );
    }
};
export default MovieReview;