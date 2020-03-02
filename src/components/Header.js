import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import * as actions from "../actions";
import * as services from "../services/posts";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      loggedIn: false,
      loading: false
    };
  }
  componentDidMount() {
    this.checkLogin();
  }
  /**
   * check User already Login or Not
   */
  checkLogin = async () => {
    if (this.state.loading) return;
    this.setState({
      loading: true
    });
    try {
      const cookies = new Cookies();
      const res = await services.checkUser(cookies.get("atk"));
      if (res.status === 200) {
        this.setState({
          user: res.data.user,
          loggedIn: true,
          loading: false
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  handleClick = e => {
    const callout = document.querySelector(".callout"),
      menu = document.querySelector(".header_menu");
    if (callout.classList.contains("m_show")) {
      callout.classList.remove("m_show");
      callout.classList.add("m_hide");
    } else {
      callout.classList.remove("m_hide");
      callout.classList.add("m_show");
    }
    if (menu.classList.contains("m_show")) {
      menu.classList.remove("m_show");
      menu.classList.add("m_hide");
    } else {
      menu.classList.remove("m_hide");
      menu.classList.add("m_show");
    }
  };
  /**
   * User Logout
   */
  handleLogOut = () => {
    return this.props.logoutRequest().then(() => {
      if (this.props.status === "waiting") {
        //document.cookie="key=;Max-Age=0";
        const cookies = new Cookies();
        cookies.remove("atk");
        localStorage.clear(); //localStorage Clear
        window.location.href = "/";
      }
    });
  };
  handleOpenMobileMenu = e => {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("openMenu");
  };
  render() {
    const { to, id, lan } = this.props;
    const { loggedIn } = this.state;
    return (
      <Fragment>
        <header id="header">
          <div>
            <h1 style={{ Fontsize: "1.5rem" }}>
              <Link to={lan === "en-US" ? "/en-US" : "/ko-KR"}>MovieJ</Link>
            </h1>
            <span></span>
            <div className="mobile">
              <div className="mobile-bar" onClick={this.handleOpenMobileMenu}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="non-mobile">
              <p className="language-container">
                <a href={lan !== "en-US" ? to + id + "/en-US" : "#"}>
                  <span className="en">En</span>
                </a>
                <a href={lan !== "ko-KR" ? to + id + "/ko-KR" : "#"}>
                  <span className="kr">Kr</span>
                </a>
                {loggedIn === true ? (
                  <span
                    className="user"
                    id={this.state.user._id}
                    onClick={this.handleClick}
                  >
                    {this.state.user.email}
                  </span>
                ) : (
                  <a href={"/login"}>
                    <span>Login</span>
                  </a>
                )}
              </p>
              <div className="callout m_hide"></div>
              <div className="header_menu m_hide">
                <ul className="menu_list">
                  <li>
                    <span>
                      <Link to="/user/favorites">Favorites</Link>
                    </span>
                  </li>
                  <li>
                    <span>
                      <Link to="/user/edit">Edit</Link>
                    </span>
                  </li>
                  <li>
                    <span onClick={this.handleLogOut}>LogOut</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <div className="mobile-menu">
          {/*<li>
              <a href={lan !== "en-US" ? to + id + "/en-US" : "#"}>
                <span className="en">En</span>
              </a>
            </li>
            <li>
              <a href={lan !== "ko-KR" ? to + id + "/ko-KR" : "#"}>
                <span className="kr">Kr</span>
              </a>
            </li>*/}
          <ul>
            <li>
              {loggedIn === true ? (
                <span
                  className="user"
                  id={this.state.user._id}
                  onClick={this.handleClick}
                >
                  {this.state.user.email}
                </span>
              ) : (
                <a href={"/login"}>
                  <span>Login</span>
                </a>
              )}
            </li>
          </ul>
          {this.state.loggedIn === true ? (
            <ul>
              <li>
                <span>
                  <Link to="/user/favorites">Favorites</Link>
                </span>
              </li>
              <li>
                <span>
                  <Link to="/user/edit">Edit</Link>
                </span>
              </li>
              <li>
                <span onClick={this.handleLogOut}>LogOut</span>
              </li>
            </ul>
          ) : (
            <Fragment />
          )}
        </div>
      </Fragment>
    );
  }
}
Header.defaultProps = {
  to: "",
  id: "",
  lan: "en-US"
};
const mapStateToProps = state => {
  return { status: state.login.login.status };
};
const mapDispatchToProps = dispatch => {
  return {
    logoutRequest: () => {
      dispatch(actions.logout());
      return services.logout();
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
