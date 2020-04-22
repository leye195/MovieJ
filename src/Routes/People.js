import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import default_movie from "../img/default_movie.png";
import "../style/People.css";
import user from "../img/user.svg";
import * as services from "../services/posts";
import { Link } from "react-router-dom";
class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      m_credits: [],
      actor_img: user,
      actor_info: {},
    };
  }
  componentDidMount() {
    const { match } = this.props;
    this.getMovieCredit(match.params.name);
    this.getInfo(match.params.name);
  }
  getMovieCredit = async (id, lan) => {
    const info = await services.movie_credit(id, lan);
    this.setState({
      m_credits: info.data.cast,
    });
  };
  getInfo = async (id) => {
    const imgs = await services.get_actor_img(id);
    const actor_info = await services.get_actor_info(id);
    this.setState({
      actor_img:
        "https://image.tmdb.org/t/p/w500" + imgs.data.profiles[0].file_path,
      actor_info: actor_info.data,
    });
  };
  data_more = () => {
    let ele = document.querySelector("[data-read-more-toggle]");
    let overview = document.querySelector("[arial-expanded]");
    let shade = document.querySelector(".shade");
    if (ele.getAttribute("more") === "false") {
      ele.innerHTML = "Read less";
      ele.setAttribute("more", true);
      overview.setAttribute("arial-expanded", true);
      shade.style.visibility = "hidden";
    } else if (ele.getAttribute("more") === "true") {
      ele.innerHTML = "Read more";
      ele.setAttribute("more", false);
      overview.setAttribute("arial-expanded", false);
      shade.style.visibility = "visible";
    }
  };
  render() {
    const { m_credits, actor_img, actor_info } = this.state;
    const item_list = m_credits.map((item, i) => (
      <Link to={`/movie_detail/` + item.id} key={i}>
        <div className="m_item" id={i}>
          <img
            src={
              item.poster_path !== null
                ? "https://image.tmdb.org/t/p/w500" + item.poster_path
                : default_movie
            }
            alt={item.title}
          />
          <div>
            <p>{item.title}</p>
            <p>{item.character !== "" ? item.character : "None"}</p>
          </div>
        </div>
      </Link>
    ));
    return (
      <div>
        <div>
          <div id="to_top"></div>
          <Header></Header>
          <SearchBar></SearchBar>
        </div>
        <div className="m_container">
          <aside className="m_aside">
            <div>
              <img src={actor_img} alt="actor"></img>
              <p>
                <a href="#to_top">Biography</a>
              </p>
              <p>
                <a href="#credits">Credits</a>
              </p>
            </div>
          </aside>
          <section className="m_div" onScroll={this.handleShowup}>
            <article>
              <h1 id="actor_name">{actor_info.name}</h1>
              <div className="actor_info" id="overview" arial-expanded="false">
                <div className="shade"></div>
                <p>{actor_info.biography}</p>
              </div>
              <span
                data-read-more-toggle="overview"
                more="false"
                onClick={this.data_more}
              >
                Read more
              </span>
            </article>
            <section>
              <h2 id="credits">Credits</h2>
              <div className="m_wrapper">{item_list}</div>
            </section>
          </section>
        </div>
      </div>
    );
  }
}
export default People;
