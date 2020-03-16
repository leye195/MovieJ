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
  }
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
        if (!target.classList.contains("liked")) target.classList.add("liked");
        else target.classList.remove("liked");
      } else if (response.data.success === 0) {
        target.classList.remove("liked");
      }
    }
  };
  getFavList = async uid => {
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
  clickLink = (target, currentTarget, fav) => {
    const { history } = this.props;
    if (target === currentTarget || target.classList.contains("fav-title"))
      history.push(`/movie_detail/${fav.m_id}`);
    else {
      const uid = document.querySelector(".user");
      if (uid) {
        /*if (target.classList.contains("liked")) {
          target.classList.remove("liked");
        } else if (!target.classList.contains("liked")) {
          target.classList.add("liked");
        }*/
        this.postFavInfo(
          uid.id,
          fav.m_id,
          fav.title,
          fav.imgUrl,
          fav.link,
          target
        );
      }
    }
  };
  favComponent = () => {
    const { fav_list } = this.props;

    const favTags = fav_list.map(fav => {
      console.log(fav);
      return (
        <div key={fav._id} className="fav-item">
          <Link to={`/movie_detail/${fav.m_id}`}>
            <img src={fav.imgUrl} alt={fav.m_id} />
          </Link>
          <div
            className="item-hover"
            onClick={e => this.clickLink(e.target, e.currentTarget, fav)}
          >
            <p className="fav-title"> {fav.title}</p>
            <div>
              <span>
                <i className="fas fa-heart liked"></i>
              </span>
            </div>
          </div>
        </div>
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
