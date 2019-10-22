import React from 'react';

class MovieReview extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:this.props.id
        };
    }
    render(){
        //const{id}=this.props.id;
        return (
            <div>
                MovieReview
                {this.state.id}
            </div>
        );
    }
};
MovieReview.defaultProps={
    id:0,
    author:"",
    content:"",

}
export default MovieReview;