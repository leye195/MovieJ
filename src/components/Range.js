import React from "react";
import "../style/Range.css";
class Range extends React.Component {
  onRangeMinInput = (e) => {
    const { target } = e;
    target.value = Math.min(
      target.value,
      target.parentNode.childNodes[1].value - 1
    );
    let value =
      (100 / (parseInt(target.max) - parseInt(target.min))) *
        parseInt(target.value) -
      (100 / (parseInt(target.max) - parseInt(target.min))) *
        parseInt(target.min);
    let children = target.parentNode.childNodes[0].childNodes;
    children[0].style.width = value + "%";
    children[2].style.left = value + "%";
    children[3].style.left = value + "%";
    children[5].style.left = value + "%";
    children[5].childNodes[0].innerHTML = target.value;

    this.props.onMinRange(target.value);
  };
  onRangeMaxInput = (e) => {
    const { target } = e;
    e.target.value = Math.max(
      e.target.value,
      e.target.parentNode.childNodes[1].value - -1
    );

    let value =
      (100 / (parseInt(target.max) - parseInt(target.min))) *
        parseInt(target.value) -
      (100 / (parseInt(target.max) - parseInt(target.min))) *
        parseInt(target.min);
    let children = target.parentNode.childNodes[0].childNodes;
    children[1].style.width = 100 - value + "%";
    children[2].style.right = 100 - value + "%";
    children[4].style.left = value + "%";
    children[6].style.left = value + "%";
    children[6].childNodes[0].innerHTML = target.value;
    this.props.onMaxRange(target.value);
  };

  render() {
    const { min, max, step } = this.props;
    return (
      <div className="slider" id="slider-distance">
        <div>
          <div className="inverse-left" style={{ width: "70%" }}></div>
          <div className="inverse-right" style={{ width: "70%" }}></div>
          <div className="range" style={{ left: "0%", right: "0%" }}></div>
          <span className="thumb" style={{ left: "0%" }}></span>
          <span className="thumb" style={{ left: "100%" }}></span>
          <div className="sign" style={{ left: "0%" }}>
            <span id="value">{min}</span>
          </div>
          <div className="sign" style={{ left: "100%" }}>
            <span id="value">{max}</span>
          </div>
        </div>
        <input
          type="range"
          tabIndex="0"
          defaultValue={min}
          max={max}
          min={min}
          step={step}
          onInput={this.onRangeMinInput}
        />
        <input
          type="range"
          tabIndex="0"
          defaultValue={max}
          max={max}
          min={min}
          step={step}
          onInput={this.onRangeMaxInput}
        />
      </div>
    );
  }
}
export default Range;
