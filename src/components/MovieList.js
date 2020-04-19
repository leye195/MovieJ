import React from "react";
import Movie from "./Movie";
import Loading from "./Loading";
import "../style/MovieList.css";
import { connect } from "react-redux";
import * as actions from "../actions";
import * as services from "../services/posts";
import { loadMovieList, setLoading, setView } from "../reducers/movielist";

let timer = null;
class MovieList extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.lan !== nextProps.lan) return true;
    if (this.props.cur_page !== nextProps.cur_page) return true;
    if (this.props.view !== nextProps.view) return true;
    if (this.props.isloading !== nextProps.isloading) return true;
    if (this.props.movie_list !== nextProps.movie_list) return true;
    return false;
  }
  componentDidMount() {
    this.getMovies(1);
    window.addEventListener("scroll", this.onNext);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.cur_page !== this.props.cur_page)
      localStorage.cur_page = this.props.cur_page;
    if (prevProps.view !== this.props.view) localStorage.view = this.props.view;
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onNext);
  }

  /**
   * @param page : For loading page's data from API
   **/
  getMovies = async (page) => {
    const {
      maxRate,
      minRate,
      maxDate,
      minDate,
      maxRunTime,
      minRunTime,
    } = this.props;
    const movies = await services.getAllMovies(
      page,
      maxRunTime,
      minRunTime,
      maxRate,
      minRate,
      maxDate,
      minDate
    );
    if (movies.status === 200) {
      this.props.handleMovielist(
        movies.data.results,
        movies.data.total_pages,
        page
      );
    }
    this.props.handleLoading(false);
  };
  onNext = () => {
    const { cur_page, total_pages } = this.props;
    const innerHeight = window.innerHeight;
    const scrollHeight = document.body.scrollHeight;
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    if (scrollHeight - innerHeight - scrollTop < 200) {
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          if (cur_page < total_pages) {
            this.props.handleLoading(true);
            this.getMovies(Number(cur_page) + 1);
          } else alert("Done");
        }, 2000);
      }
    }
  };

  render() {
    const { movie_list, view, lan, isloading } = this.props;
    const movies = () => {
      const tag = movie_list.map((movie, i) => {
        return (
          <Movie
            id={movie.id}
            key={i}
            title={movie.title}
            release_date={movie.release_date}
            poster={
              movie.poster_path !== null
                ? movie.poster_path
                : movie.backdrop_path
            }
            overview={movie.overview}
            view={view}
            lan={lan}
            avg_rate={movie.vote_average}
          ></Movie>
        );
      });
      return tag;
    };
    return (
      <section className="movies" style={{ backgroundColor: "#efefefa6" }}>
        <div className="movies_wrapper">{movies()}</div>
        <Loading isloading={isloading} />
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    total_pages: state.movielist.total_pages, //total pages in movielist
    movie_list: state.movielist.movie_list, //movie data list
    cur_page: state.movielist.cur_page, // current page
    view: state.movielist.view, //view: post or backdrop
    lan: state.movielist.lan, //language: ko-KR or en-US
    completed: state.load.completed, //check loading is finished or not
    fav_list: state.favorite_movies.fav_list,
    isloading: state.movielist.isloadingMovieList,
    maxRate: state.movielist.maxRate,
    minRate: state.movielist.minRate,
    minRunTime: state.movielist.minRunTime,
    maxRunTime: state.movielist.maxRunTime,
    minDate: state.movielist.minDate,
    maxDate: state.movielist.maxDate,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleLoading: (loading) => {
      dispatch(
        setLoading({
          loading,
        })
      );
    },
    handleView: (view) => {
      dispatch(
        setView({
          view,
        })
      );
    },
    handleMovielist: (movie_list, total_pages, cur_page) => {
      dispatch(
        loadMovieList({
          movie_list,
          total_pages,
          cur_page,
        })
      );
    },
    page_loading: (completed) => {
      dispatch(actions.loading(completed));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
