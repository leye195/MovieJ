import React from "react";
import MovieList from "../components/MovieList";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import * as services from "../services/posts";
import * as actions from "../actions";
import { connect } from "react-redux";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props.handleFavoriteInfo();
  }
  render() {
    return (
      <>
        <div>
          <Header lan={"en-US"}></Header>
          <SearchBar lan={"en-US"}></SearchBar>
        </div>
        <main>
          <FilterBar />
          <MovieList lang="en-US" />
          <div className="upbtn">
            <a href="#header">Up</a>
          </div>
          <div className="notice">
            <span>Added to Favourite List</span>
          </div>
        </main>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    fav: state.favorite_movies.fav_list,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleFavoriteInfo: async () => {
      const uid = JSON.parse(localStorage.getItem("loggedIn"));
      if (uid) {
        return await services.getFavouriteMovie(uid._id).then((response) => {
          const {
            data: { favourites },
          } = response;
          dispatch(actions.favoriteMovie(favourites));
        });
      }
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
