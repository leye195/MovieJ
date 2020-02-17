import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Cookies from "universal-cookie";

import * as services from "../services/posts";
import * as actions from "../actions";

import "../style/User.css";
class User extends Component {
  componentDidMount() {
    const uid = document.querySelector(".user");
    console.log(uid);
    //if (uid) {
    this.getFavList();
    // }
  }

  getFavList = async uid => {
    //console.log(uid);
    const cookies = new Cookies();
    const res = await services.checkUser(cookies.get("atk"));
    const response = await services.getFavouriteMovie(res.data.user._id);
    if (response.status === 200) {
      const {
        data: { favourites }
      } = response;
      this.props.handleFavoriteInfo(favourites);
    }
  };
  favComponent = () => {
    const { fav_list } = this.props;
    const favTags = fav_list.map(fav => {
      return (
        <a key={fav._id} href={fav.link}>
          <div className="fav-item">
            <img src={fav.imgUrl} alt={fav.m_id} />
            <p>{fav.title}</p>
          </div>
        </a>
      );
    });
    return (
      <div id="fav_div">
        <p>Favorite Movies</p>
        <div className="f_d">
          {fav_list.length > 0 ? (
            <div className="fav_list">{favTags}</div>
          ) : (
            <div className="empty">No Favorites</div>
          )}
        </div>
      </div>
    );
  };
  ediComponent = () => (
    <div id="comm_div">
      <p>Comments</p>
      <div className="c_d">
        <div className="empty">No Comment</div>
      </div>
    </div>
  );
  render() {
    const { location } = this.props;
    const to = location.pathname.split("/")[2];
    //console.log(to);
    return (
      <div>
        <Header></Header>
        <SearchBar></SearchBar>
        <div className="u-container">
          <div className="u">
            <div id="fav">
              <Link to={`/user/favorites`}>
                Favorites
                <span>
                  <i className="fas fa-heart"></i>
                </span>
              </Link>
            </div>
            <div id="comm">
              <Link to={`/user/edit`}>
                Comments
                <span>
                  <i className="fas fa-comment"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="u-section">
          {to === "favorites" ? this.favComponent() : this.ediComponent()}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    fav_list: state.favorite_movies.fav_list
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleFavoriteInfo: fav_list => {
      dispatch(actions.favoriteMovie(fav_list));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
