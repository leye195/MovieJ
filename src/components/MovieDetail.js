import React from "react";
import "../style/MovieDetail.css";
import * as services from "../services/posts";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Recommendation from "./Recommendation";
import Loading from "./Loading";
import CastingList from "./CastingList";
import youtube from "../img/youtube.svg";
import { loadMovieDetail } from "../reducers/movie_info";
class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: 0,
      load: false,
      credits: {},
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState !== this.state;
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.timer = setInterval(this.progress, 30);
    const { id, lan } = this.props;
    this.getDetail(id, lan);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  progress = () => {
    const { completed, load } = this.state;
    this.setState({
      completed:
        completed >= 100 || load === false
          ? clearInterval(this.timer)
          : completed + 1,
    });
  };
  checkLanguage = () => {
    const { lan } = this.props;
    if (lan === "" || lan === "en-US") return true;
    return false;
  };
  getDetail = async (id, lan) => {
    this.setState({
      load: true,
    });
    try {
      const info = await Promise.all([
        services.getMovieInfo(id, lan),
        services.getReviews(id, lan),
        services.get_video(id),
      ]);
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
        review: info[1].data.results.length > 0 ? info[1].data.results : [],
        links: info[2].data.results,
      };
      this.props.handleInfo(obj);
      let detail = document.getElementsByClassName("detail");
      if (this.props.info.backdrop !== undefined)
        detail[0].style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${this.props.info.backdrop})`;
      else
        detail[0].style.backgroundImage =
          "url(/Users/yjlee/Documents/WorkSpace/moviej/src/img/collect.gif)";
    } catch (err) {
      console.log(err);
    }
    this.setState({
      load: false,
    });
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
      links,
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
    return (
      <main className="movie-detail">
        <div>
          <Loading value={this.state.completed} load={load}></Loading>
        </div>
        <section className="detail">
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
                  <h3>OverView</h3>
                  <p>
                    <b>
                      {overview === "" ? "We don't have an overview" : overview}
                    </b>
                  </p>
                </div>
                <div className="vote_rate">
                  <h2>
                    <p>{`Average Rate: ⭐️${vote_average}/10`}</p>
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
        </section>
        <section className="casting menu">
          <h3>Actors</h3>
          <CastingList id={this.props.id}></CastingList>
        </section>
        <section className="review menu">
          <article>
            <h3>{`${
              review && review.length > 1
                ? `${review && review.length} Reviews`
                : `${review && review.length} Review`
            }`}</h3>
            <Link to={`/movie_review/${id}/${lan}?title=${title}`}>More</Link>
          </article>
          <div className="review_container">
            {review && review.length > 0 ? (
              review &&
              review.map((item) => {
                return (
                  <Link
                    key={item.id}
                    to={`/movie_review/${id}/${lan}/${item.id}?title=${title}`}
                  >
                    <div className="card">
                      <h3 className="review_author">{item.author}</h3>
                      <p className="review_content">{item.content}</p>
                    </div>
                  </Link>
                );
              })
            ) : (
              <div className="card" style={{ width: "100%" }}>
                No Review
              </div>
            )}
          </div>
        </section>
        <hr></hr>
        <Recommendation id={this.props.id} lan={lan} />
      </main>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    info: state.movie_detail.info,
  };
};
const mapStateToDispatch = (dispatch) => {
  return {
    handleInfo: (info) => {
      dispatch(
        loadMovieDetail({
          movieinfo: info,
        })
      );
    },
  };
};
export default connect(mapStateToProps, mapStateToDispatch)(MovieDetail);
