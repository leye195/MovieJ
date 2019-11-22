import React from 'react';
import '../style/Movie.css';
import default_movie from '../img/default_movie.png'
import {Link} from 'react-router-dom';
class Movie extends React.Component{
    //default img 설정
    handleError=()=>{
        return default_movie;
    }
    render(){
        const{id,title,release_date,poster,overview,view,lan,avg_rate}=this.props;
        const imgUrl="https://image.tmdb.org/t/p/w500"+poster;
        return(
            <div className={view}>
                <div className="movie_container">
                    <div className={view+"img_contents"}>
                        <Link to={`/movie_detail/`+id+'/'+lan}><img alt={title} src={imgUrl} onError={this.handleError}/></Link>
                    </div>
                    <div className={view+"item_content"}>
                        <div>
                            <h2 className="item_title">{title}</h2>
                        </div>
                        <div>
                            <p><strong>{lan==="en-US"?"Released: "+release_date:"개봉 일: "+release_date}</strong></p>
                            <h5 className="item_rate">{`${avg_rate}/10`}</h5>    
                        </div>
                        <div className="overview_container">
                            <p className="overview">{overview===""?"해당 언어의 줄거리가 존재하지 않습니다":overview}</p>
                        </div>
                        <div className="more">
                            <Link to={`/movie_detail/`+id+'/'+lan}>{lan==="en-US"?"More...":"더 보기..."}</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Movie;