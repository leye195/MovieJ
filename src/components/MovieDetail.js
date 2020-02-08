import React from "react";
import "../style/MovieDetail.css";
import * as actions from "../actions";
import * as services from "../services/posts";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Recommendation from "./Recommendation";
import Loading from "./Loading";
import CastingList from "./CastingList";
import youtube from "../img/youtube.svg";
class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: 0,
      load: false,
      credits: {}
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState !== this.state;
  }
  componentDidMount() {
    this.timer = setInterval(this.progress, 30);
    const { id, lan } = this.props;
    this.getDetail(id, lan);
    this.setState({
      load: true
    });
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  progress = () => {
    const { completed } = this.state;
    this.setState({
      completed: completed >= 100 ? clearInterval(this.timer) : completed + 1
    });
  };
  checkLanguage = () => {
    const { lan } = this.props;
    if (lan === "" || lan === "en-US") return true;
    return false;
  };
  getDetail = async (id, lan) => {
    const info = await Promise.all([
      services.getMovieInfo(id, lan),
      services.getReviews(id, lan),
      services.get_video(id)
    ]);
    if (info[1].data.results.length > 0) {
      const obj = {
        id: id,
        title: info[0].data.title,
        overview: info[0].data.overview,
        vote_average: info[0].data.vote_average,
        backdrop: info[0].data.backdrop_path,
        poster_path: info[0].data.poster_path,
        state: info[0].data.status,
        runtime: info[0].data.runtime,
        release_date: info[0].data.release_date,
        tagline: info[0].data.tagline,
        revenue: info[0].data.revenue,
        review: info[1].data.results[info[1].data.results.length - 1],
        links: info[2].data.results
      };
      this.props.handleInfo(obj);
    } else {
      const obj = {
        id: id,
        title: info[0].data.title,
        overview: info[0].data.overview,
        vote_average: info[0].data.vote_average,
        backdrop: info[0].data.backdrop_path,
        poster_path: info[0].data.poster_path,
        state: info[0].data.status,
        runtime: info[0].data.runtime,
        release_date: info[0].data.release_date,
        tagline: info[0].data.tagline,
        revenue: info[0].data.revenue,
        links: info[2].data.results
      };
      this.props.handleInfo(obj);
    }
    let detail = document.getElementsByClassName("detail");
    if (this.props.info.backdrop !== undefined)
      detail[0].style.backgroundImage =
        "url(https://image.tmdb.org/t/p/w500" + this.props.info.backdrop + ")";
    else
      detail[0].style.backgroundImage =
        "url(/Users/yjlee/Documents/WorkSpace/moviej/src/img/collect.gif)";
  };
  render() {
    const { load } = this.state;
    const {
      id,
      title,
      overview,
      vote_average,
      poster_path,
      tagline,
      runtime,
      release_date,
      revenue,
      review,
      links
    } = this.props.info;
    const { lan } = this.props;
    const links_tag = () => {
      const r = links.slice(0, 4).map((link, idx) => {
        const { key, name } = link;
        const to = `https://www.youtube.com/watch?v=${key}`;
        return (
          <li key={key}>
            <a key={key} className="video_link" href={to}>
              <img alt={name} src={youtube} />
              {name}
            </a>
          </li>
        );
      });
      return <ul>{r}</ul>;
    };
    let review_tag = (
      <div className="review_notice">
        {this.checkLanguage
          ? "Sorry, We do not have any reviews for this movie"
          : "리뷰가 없습니다."}
      </div>
    );
    if (review !== undefined) {
      review_tag = (
        <div>
          <div className="card">
            <h3 className="review_author">
              A review Written by {review.author}
            </h3>
            <p className="review_content">{review.content}</p>
            <Link to={`/movie_review/${id}/${lan}/${review.id}?title=${title}`}>
              Read more...
            </Link>
          </div>
          <p className="read_all">
            <Link to={`/movie_review/${id}/${lan}?title=${title}`}>
              Read All Reviews
            </Link>
          </p>
        </div>
      );
    }
    return (
      <div>
        <div>
          <Loading value={this.state.completed} load={load}></Loading>
        </div>
        <div className="detail">
          <div className="custom_bg">
            <div className="movie_wrapper">
              <div className="img_container">
                <img
                  alt={title}
                  src={`https://image.tmdb.org/t/p/w500` + poster_path}
                ></img>
              </div>
              <div className="info_container">
                <h2 className="movie_title">{title}</h2>
                <h3>{tagline}</h3>
                <div className="overview">
                  <h3>{this.checkLanguage ? "OverView" : "줄거리"}</h3>
                  <p>
                    <b>
                      {overview === ""
                        ? this.checkLanguage
                          ? "We don't have an overview"
                          : "해당 언어의 줄거리가 존재하지 않습니다"
                        : overview}
                    </b>
                  </p>
                </div>
                <div className="vote_rate">
                  <h2>
                    {this.checkLanguage ? (
                      <p>{`Average Rate:${vote_average}/10`}</p>
                    ) : (
                      <p>{`평균 평점: ${vote_average}/10`}</p>
                    )}
                  </h2>
                </div>
                <p>
                  <span>
                    <i className="m_date far fa-calendar-alt"></i>
                  </span>
                  {release_date}
                </p>
                <p>
                  <span>
                    <i className="m_time far fa-clock"></i>
                  </span>
                  {`${runtime} mins`}
                </p>
                <p>
                  Box Office: $
                  {revenue !== undefined ? revenue.toLocaleString() : 0}
                </p>
                <div className="movie_link" style={{ color: "white" }}>
                  {links_tag()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="casting menu">
          <h3>{this.checkLanguage ? "Actors" : "출연진"}</h3>
          <CastingList id={this.props.id}></CastingList>
        </div>
        <div className="menu">
          <h3>{this.checkLanguage ? "Review" : "리뷰"}</h3>
        </div>
        <div className="review_container">{review_tag}</div>
        <hr></hr>
        <Recommendation id={this.props.id} lan={lan} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    info: state.movie_detail.info
  };
};
const mapStateToDispatch = dispatch => {
  return {
    handleInfo: info => {
      dispatch(actions.get_movie_detail(info));
    }
  };
};
export default connect(mapStateToProps, mapStateToDispatch)(MovieDetail);
