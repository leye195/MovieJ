import React from 'react';
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
            runtime:0
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
            runtime:movie_info.data.runtime
        })
    }
    render(){
        const{title,overview,vote_average,backdrop,poster_path,state,runtime}=this.state;
        return (
            <div>
                <div className="img_container">
                    <img alt={title} src={`https://image.tmdb.org/t/p/w500`+poster_path}></img>
                </div>
            </div>
        );
    }
};

export default MovieDetail;