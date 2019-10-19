import React from 'react';
import '../style/Movie.css';
class Movie extends React.Component{
    render(){
        const{title,release_date,poster,overview}=this.props;
        const imgUrl="https://image.tmdb.org/t/p/w500"+poster;
        const style={
            display:"flex",
            margin:"10px",
            padding:"10px"
        };
        return(
            <div className="movie_wrapper">
                <div className="movie_container" style={style}>
                    <div className="img_contents">
                        <img alt={title} src={imgUrl}/>
                    </div>
                    <div className="item_content">
                        <h2 className="item_title">{title}</h2>
                        <p>{release_date}</p>
                        <div className="overview_container">
                            <h3>Over View</h3>
                            <p className="overview">{overview}</p>
                        </div>
                        <div className="more">
                            More...
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Movie;