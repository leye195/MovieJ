import React from "react";
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
          loggedIn: true
        });
      }
    } catch (e) {
      console.log(e);
    }
    this.setState({ loading: false });
    /*.then(res => {
        const { data, status } = res;
        if (status === 200) {
          this.setState({
            user: JSON.parse(data.user),
            loggedIn: true
          });
        }
      })
      .catch(err => {
        this.setState({ loggedIn: false });
      });*/
    /*const loggedIn = localStorage.loggedIn;
    if (loggedIn) {
      //console.log(loggedIn);
      
    } else {
      return { loggedIn: false };*/
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
  render() {
    const { to, id, lan } = this.props;
    return (
      <header id="header">
        <div>
          <h1 style={{ Fontsize: "1.5rem" }}>
            <a href={lan === "en-US" ? "/en-US" : "/ko-KR"}>MovieJ</a>
          </h1>
          <span></span>
          <p className="language-container">
            <a href={lan !== "en-US" ? to + id + "/en-US" : "#"}>
              <span className="en">En</span>
            </a>
            <a href={lan !== "ko-KR" ? to + id + "/ko-KR" : "#"}>
              <span className="kr">Kr</span>
            </a>
            {this.state.loggedIn === true ? (
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
      </header>
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
