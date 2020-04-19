import React from "react";
import "../style/FilterBar.css";
import Range from "./Range";
import moment from "moment";
import { connect } from "react-redux";
import { setCondition, loadMovieList } from "../reducers/movielist";
import * as services from "../services/posts";
class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minRate: 0,
      maxRate: 10,
      maxRuntime: 400,
      minRuntime: 0,
      dateFrom: moment().format("YYYY-MM-DD"),
      dateTo: "",
    };
  }
  onChangeFrom = (e) => {
    const { target } = e;
    this.setState({
      dateFrom: target.value,
    });
  };
  onChangeTo = (e) => {
    const { target } = e;
    this.setState({
      dateTo: target.value,
    });
  };
  onMaxRate = (rate) => {
    this.setState({
      maxRate: rate,
    });
  };
  onMinRate = (rate) => {
    this.setState({
      minRate: rate,
    });
  };
  onMinRuntime = (time) => {
    this.setState({
      minRuntime: time,
    });
  };
  onMaxRuntime = (time) => {
    this.setState({
      maxRuntime: time,
    });
  };
  onClickSearch = async () => {
    const {
      maxRate,
      minRate,
      maxRuntime,
      minRuntime,
      dateFrom,
      dateTo,
    } = this.state;
    const { setFilter, handleMovielist } = this.props;
    setFilter({
      maxRate,
      minRate,
      maxRuntime,
      minRuntime,
      maxDate: dateTo,
      minDate: dateFrom,
    });
    //console.log(maxRate, minRate, maxRuntime, minRuntime, dateFrom, dateTo);
    const movies = await services.getAllMovies(
      1,
      maxRuntime,
      minRuntime,
      maxRate,
      minRate,
      dateTo,
      dateFrom
    );
    if (movies.status === 200) {
      handleMovielist(movies.data.results, movies.data.total_pages, 1);
    }
  };
  render() {
    return (
      <aside className="filter-bar">
        <section className="date-filter">
          <p>Release Date</p>
          <div className="date-picker-container">
            <div className="date-picker">
              <input
                className="date-input"
                type="date"
                placeholder="From"
                onChange={this.onChangeFrom}
              />
            </div>
          </div>
          <div className="date-picker-container">
            <div className="date-picker">
              <input
                className="date-input"
                type="date"
                placeholder="To"
                onChange={this.onChangeTo}
              />
            </div>
          </div>
        </section>
        <section className="rate-filter">
          <p>User Rate</p>
          <Range
            min={0}
            max={10}
            step={1}
            onMinRange={this.onMinRate}
            onMaxRange={this.onMaxRate}
          />
        </section>
        <section className="runtime-filter">
          <p>Movie RunTime(minutes)</p>
          <Range
            min={0}
            max={400}
            step={5}
            onMinRange={this.onMinRuntime}
            onMaxRange={this.onMaxRuntime}
          />
        </section>
        <button className="search-btn" onClick={this.onClickSearch}>
          Search
        </button>
      </aside>
    );
  }
}
const mapStateToProps = (state) => {};
const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (condition) => {
      dispatch(setCondition(condition));
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
  };
};
export default connect(null, mapDispatchToProps)(FilterBar);
