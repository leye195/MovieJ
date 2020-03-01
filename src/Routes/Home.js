import React from "react";
import MovieList from "../components/MovieList";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import * as services from "../services/posts";
import * as actions from "../actions";
import { connect } from "react-redux";
class Home extends React.Component {
  constructor(props) {
    super(props);
    const url = this.props.match.url;
    this.props.handleLanguage(url.substr(1, url.length));
    this.props.handleFavoriteInfo();
  }
  render() {
    const lan_url = this.props.match.url;
    let movies = "";
    if (lan_url === "/ko-KR") movies = <MovieList lang="ko-KR"></MovieList>;
    else if (lan_url === "/" || lan_url === "/en-US")
      movies = <MovieList lang="en-US"></MovieList>;
    return (
      <div>
        <div>
          <Header
            lan={lan_url === "/" || lan_url !== "/ko-KR" ? "en-US" : "ko-KR"}
          ></Header>
          <SearchBar
            lan={lan_url === "/" || lan_url !== "/ko-KR" ? "en-US" : "ko-KR"}
          ></SearchBar>
        </div>
        {movies}
        <div className="upbtn">
          <a href="#header">Up</a>
        </div>
        <div className="notice">
          <span>Added to Favourite List</span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    lan: state.movielist.lan,
    fav: state.favorite_movies.fav_list
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleLanguage: lan => {
      dispatch(actions.language(lan));
    },
    handleFavoriteInfo: async () => {
      const uid = JSON.parse(localStorage.getItem("loggedIn"));
      if (uid) {
        return await services.getFavouriteMovie(uid._id).then(response => {
          const {
            data: { favourites }
          } = response;
          //console.log(favourites);
          dispatch(actions.favoriteMovie(favourites));
        });
      }
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
