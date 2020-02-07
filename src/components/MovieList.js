import React from "react";
import Movie from "./Movie";
import Loading from "./Loading";
import "../style/MovieList.css";
import { connect } from "react-redux";
import * as actions from "../actions";
import * as services from "../services/posts";

class MovieList extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.lan !== nextProps.lan) return true;
    if (this.props.cur_page !== nextProps.cur_page) return true;
    if (this.props.view !== nextProps.view) return true;
    if (this.props.completed !== nextProps.completed) return true;
    return false;
  }
  componentDidMount() {
    //this.timer=setInterval(this.progress,30);
    let view = localStorage.view,
      select = document.querySelector("select");
    if (!view) view = this.props.view;
    select.value = view;
    this.props.handleView(view);
    this.getMovies(1);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.cur_page !== this.props.cur_page)
      localStorage.cur_page = this.props.cur_page;
    if (prevProps.view !== this.props.view) localStorage.view = this.props.view;
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  /**
   * @param page : For loading page's data from API
   **/
  getMovies = async page => {
    const lan = this.props.lang;
    const movies = await services.getAllMovies(page, lan);
    this.props.handleMovielist(
      movies.data.results,
      movies.data.total_pages,
      page
    );
  };
  //ChangeView=(e)=>{
  //  this.props.handleView(e.target.value);
  //}
  ChangeView = e => {
    this.props.handleView(e.target.value);
  };
  onNext = () => {
    const { cur_page, total_pages } = this.props;
    if (cur_page < total_pages) this.getMovies(Number(cur_page) + 1);
    else alert("Done");
  };
  render() {
    const { movie_list, cur_page, view, lan, total_pages } = this.props;
    const movies = movie_list.map((movie, i) => {
      return (
        <Movie
          id={movie.id}
          key={i}
          title={movie.title}
          release_date={movie.release_date}
          poster={view === "poster" ? movie.poster_path : movie.backdrop_path}
          overview={movie.overview}
          view={view}
          lan={lan}
          avg_rate={movie.vote_average}
        ></Movie>
      );
    });
    return (
      <div style={{ backgroundColor: "#efefefa6" }}>
        <div>
          <Loading></Loading>
        </div>
        <div className="select_wrapper">
          <span>
            <b>View </b>
          </span>
          <select onChange={this.ChangeView}>
            <option value="poster">Poster Card</option>
            <option value="backdrop">Backdrop Card</option>
          </select>
        </div>
        <div className="movies_wrapper">{movies}</div>
        <div className="btns">
          <button
            onClick={this.onNext}
            disabled={cur_page < total_pages ? false : true}
          >
            {lan !== "ko-KR" ? "Show more" : "더 보기"}
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    total_pages: state.movielist.total_pages, //total pages in movielist
    movie_list: state.movielist.movie_list, //movie data list
    cur_page: state.movielist.cur_page, // current page
    view: state.movielist.view, //view: post or backdrop
    lan: state.movielist.lan, //language: ko-KR or en-US
    completed: state.load.completed //check loading is finished or not
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handlePage: cur_page => {
      dispatch(actions.page(cur_page));
    },
    handleView: view => {
      dispatch(actions.view(view));
    },
    handleMovielist: (movie_list, total_pages, cur_page) => {
      dispatch(actions.get_movielist(movie_list, total_pages, cur_page));
    },
    page_loading: completed => {
      dispatch(actions.loading(completed));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
