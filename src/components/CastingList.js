import React from "react";
import Cast from "./Cast";
import "../style/Casting.css";
import * as services from "../services/posts";
class CastingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cast: [],
      crew: []
    };
  }
  componentDidMount() {
    const { id } = this.props;
    this.getCredits(id);
  }
  getCredits = async id => {
    const credits = await services.getCredits(id);
    this.setState({
      cast: credits.data.cast,
      crew: credits.data.crew
    });
  };
  render() {
    const { cast } = this.state;
    const cast_tag = cast.map(item => {
      return (
        <Cast
          id={item.id}
          key={item.cast_id}
          chacter={item.character}
          name={item.name}
          profile={item.profile_path}
        ></Cast>
      );
    });
    return (
      <div className="cast_container menu">
        {cast_tag}
        <div className="arrow_btn" direction="left">
          <div className="backward"></div>
        </div>
        <div className="arrow_btn" direction="right">
          <div className="forward"></div>
        </div>
      </div>
    );
  }
}
export default CastingList;
