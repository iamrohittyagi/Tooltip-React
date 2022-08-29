// importing  React and files from component
import React, { Component } from "react";
import "./Tools.css";

export class Tool extends Component {
  render() {
    const { showToolTip, position } = this.props.state;
    const { changeShowToolTip } = this.props;
    return (
      <div>
        <div
          className="tool-button"
          onMouseOver={changeShowToolTip}
          onMouseOut={changeShowToolTip}
        >
          {<div className="button-info">Hover Over ME !</div>}
        </div>
        {showToolTip ? (
          <div className={`box-${position} arrow-${position}`}>
            I am a Tooltip.
          </div>
        ) : null}
      </div>
    );
  }
}

export default Tool;
