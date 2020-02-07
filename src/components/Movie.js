import React from "react";
import "../style/Movie.css";
import default_movie from "../img/default_movie.png";
import { Link } from "react-router-dom";
import * as services from "../services/posts";
class Movie extends React.Component {
  //default img 설정
  postFavInfo = async (uid, id, title, imgUrl, link) => {
    //console.log(uid, id, title, imgUrl, link);
    const response = await services.postFavouriteMovie({
      uid,
      id,
      title,
      imgUrl,
      link
    });
    console.log(response);
  };
  handleFav = e => {
    const {
      target: { id }
    } = e;
    console.log(e.target);
    const aTag = e.target.parentNode.previousSibling;
    const uid = document.querySelector(".language-container span:nth-child(3)")
      .id;
    //console.log(aTag);
    const link = aTag.href,
      title = aTag.querySelector("img").alt,
      imgUrl = aTag.querySelector("img").src;
    this.postFavInfo(uid, id, title, imgUrl, link);
  };
  handleError = () => {
    return default_movie;
  };
  render() {
    const {
      id,
      title,
      release_date,
      poster,
      overview,
      view,
      lan,
      avg_rate
    } = this.props;
    const imgUrl = "https://image.tmdb.org/t/p/w500" + poster;
    return (
      <div className={view}>
        <div className="movie_container">
          <div
            className={view + "img_contents"}
            onMouseEnter={this.handleMouseOn}
            onMouseOut={this.handleMouseOut}
          >
            <Link to={`/movie_detail/` + id + "/" + lan}>
              <img alt={title} src={imgUrl} onError={this.handleError} />
            </Link>
            <div className="fav">
              <button className="fav_btn" id={id} onClick={this.handleFav}>
                +
              </button>
            </div>
          </div>
          <div className={view + "item_content"}>
            <div>
              <h2 className="item_title">{title}</h2>
              <h5 className="item_rate">{`${avg_rate}/10`}</h5>
            </div>
            <div>
              <p>
                <strong>
                  {lan === "en-US" || lan === ""
                    ? `Released: ${release_date}`
                    : `개봉 일: ${release_date}`}
                </strong>
              </p>
            </div>
            <div className="overview_container">
              <p className="overview">
                {overview === ""
                  ? lan === "en-US" || lan === ""
                    ? "We don't have an overview"
                    : "해당 언어의 줄거리가 존재하지 않습니다"
                  : overview}
              </p>
            </div>
            <div className="more">
              <Link to={`/movie_detail/` + id + "/" + lan}>
                {lan === "en-US" || lan === "" ? "More..." : "더 보기..."}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Movie;
