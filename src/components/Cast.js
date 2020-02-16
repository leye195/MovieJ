import React from "react";
import user from "../img/user.svg";
import { Link } from "react-router-dom";
class Cast extends React.Component {
  render() {
    const { profile, chacter, name, id } = this.props;
    return (
      <div className="cast_item">
        <Link to={`/people/${id}`}>
          <img
            src={
              profile !== null
                ? "https://image.tmdb.org/t/p/w500" + profile
                : user
            }
            alt={name}
          ></img>
          <p>
            <b>{name}</b>
          </p>
          <p>{chacter}</p>
        </Link>
      </div>
    );
  }
}
export default Cast;
