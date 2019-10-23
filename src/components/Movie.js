import React from 'react';
import '../style/Movie.css';
import {Link} from 'react-router-dom';
class Movie extends React.Component{
    render(){
        const{id,title,release_date,poster,overview,view}=this.props;
        const imgUrl="https://image.tmdb.org/t/p/w500"+poster;
        return(
            <div className={view}>
                <div className="movie_container">
                    <div className={view+"img_contents"}>
                        <Link to={`/movie_detail/`+id}><img alt={title} src={imgUrl}/></Link>
                    </div>
                    <div className={view+"item_content"}>
                        <h2 className="item_title">{title}</h2>
                        <p>Release date : {release_date}</p>
                        <div className="overview_container">
                            <h3>Over View</h3>
                            <p className="overview">{overview}</p>
                        </div>
                        <div className="more">
                            <Link to={`/movie_detail/`+id}>More...</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Movie;