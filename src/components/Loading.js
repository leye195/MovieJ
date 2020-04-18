import React from "react";
import "../style/Loading.css";

class Loading extends React.Component {
  render() {
    const { isloading } = this.props;
    return (
      <div
        className="loading-container"
        style={isloading ? { display: "flex" } : { display: "none" }}
      >
        <div className="loading"></div>
      </div>
    );
  }
}
export default Loading;
