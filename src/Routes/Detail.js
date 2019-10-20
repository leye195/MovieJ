import React from 'react';
import MovieDetail from '../components/MovieDetail';
class Detail extends React.Component{
    render(){
        const{match}=this.props;
        return (
            <div>
                <p>MovieDetail</p>
                <MovieDetail id={match.params.id}></MovieDetail>      
            </div>
        );
    }
};

export default Detail;