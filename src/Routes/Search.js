import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Movie from "../components/Movie";
//import Button from '@material-ui/core/Button';
import * as services from "../services/posts";
class Search extends React.Component {
  state = {
    total_pages: 0,
    page: 1,
    results: []
  };
  componentDidMount() {
    const { location } = this.props;
    const query = new URLSearchParams(location.search);
    this.getSearchResults(query.get("p"), query.get("language"));
    window.addEventListener("scroll", this.getNextPage);
  }
  getSearchResults = async (key, lan, page = 1) => {
    const search = await services.getSearch(key, lan, page);
    this.setState({
      total_pages: search.data.total_pages,
      page: search.data.page,
      results: [...this.state.results, ...search.data.results]
    });
  };
  getNextPage = () => {
    const { location } = this.props;
    const { page } = this.state;
    const innerHeight = window.innerHeight;
    const scrollHeight = document.body.scrollHeight;
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    if (scrollHeight - innerHeight - scrollTop === 0) {
      const query = new URLSearchParams(location.search);
      this.getSearchResults(query.get("p"), query.get("language"), page + 1);
    }
  };
  render() {
    const { location } = this.props;
    const { results, page } = this.state;
    const query = new URLSearchParams(location.search);
    const lan = query.get("language");
    //console.log("location: " + query);
    const result_list = results.map(movie => {
      return (
        <Movie
          id={movie.id}
          key={movie.id}
          title={movie.title}
          release_date={movie.release_date}
          poster={movie.poster_path}
          overview={movie.overview}
          view={"poster"}
          lan={"/" + lan}
          avg_rate={movie.vote_average}
        ></Movie>
      );
    });
    return (
      <div>
        <Header lan={lan === "ko-KR" ? "ko-KR" : "en-US"}></Header>
        <SearchBar lan={lan === "ko-KR" ? "ko-KR" : "en-US"}></SearchBar>
        <div className="search_results_container" style={{ padding: "10px" }}>
          <h2>Search > {query.get("p")}</h2>
          {result_list}
          <div className="btns"></div>
        </div>
      </div>
    );
  }
}
export default Search;
