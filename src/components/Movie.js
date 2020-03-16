import React from "react";
import "../style/Movie.css";
import default_movie from "../img/default_movie.png";
import { Link } from "react-router-dom";
import * as services from "../services/posts";
class Movie extends React.Component {
  componentDidMount() {
    this.imageLoad();
  }
  imageLoad = () => {
    let lazyImages = null;
    if ("IntersectionObserver" in window) {
      lazyImages = document.querySelectorAll(".posterimg_contents img");
      const imgObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            let img = entry.target;
            img.src = img.dataset.src;
            imgObserver.unobserve(img);
          }
        });
      });
      lazyImages.forEach(img => {
        imgObserver.observe(img);
      });
    }
  };
  //default img 설정
  postFavInfo = async (uid, id, title, imgUrl, link, target) => {
    const response = await services.postFavouriteMovie({
      uid,
      id,
      title,
      imgUrl,
      link
    });
    if (response.status === 200) {
      if (response.data.success === 1) {
        flashMsg("Added to Favourite", "#347cff");
        target.classList.add("liked");
      } else if (response.data.success === 0) {
        flashMsg("Canceled Favourite", "#e62113");
      }
    }
  };
  handleFav = e => {
    let aTag = e.target.parentNode.previousSibling;
    let tar = e.target;
    if (e.target.tagName === "I") {
      aTag = e.target.parentNode.parentNode.parentNode.previousSibling;
      tar = e.target.parentNode.parentNode;
    } else if (e.target.tagName === "SPAN") {
      aTag = e.target.parentNode.parentNode.previousSibling;
      tar = e.target.parentNode;
    }
    const uid = document.querySelector(".user");
    console.log(uid);
    if (uid) {
      const link = aTag.href,
        title = aTag.querySelector("img").alt,
        imgUrl = aTag.querySelector("img").src;
      if (!tar.classList.contains("liked"))
        this.postFavInfo(uid.id, tar.id, title, imgUrl, link, tar);
      else tar.classList.remove("liked");
    } else {
      flashMsg("Please Login", "#e62113");
    }
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
    //console.log(fav);
    return (
      <div className={view}>
        <div className="movie_container">
          <div
            className={view + "img_contents"}
            onMouseEnter={this.handleMouseOn}
            onMouseOut={this.handleMouseOut}
          >
            <Link to={`/movie_detail/` + id + "/" + lan}>
              <img alt={title} data-src={imgUrl} onError={this.handleError} />
            </Link>
            <div className="fav">
              <button className={`fav_btn`} id={id} onClick={this.handleFav}>
                <span>
                  <i className="fas fa-heart"></i>
                </span>
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
                  <span>
                    <i className="m_date far fa-calendar-alt"></i>
                  </span>
                  {release_date}
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
const flashMsg = (msg, color) => {
  const notice = document.querySelector(".notice");
  notice.innerHTML = msg;
  notice.style.backgroundColor = color;
  notice.animate(
    [
      { transform: "translateY(40px)" },
      { transform: "translateY(-30px)" },
      { transform: "translateY(-30px)" },
      { transform: "translateY(40px)" }
    ],
    2000
  );
};
export default Movie;
