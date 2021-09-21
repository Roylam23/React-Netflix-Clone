import React from "react";
import logo from "../../Img/logo.png";
class Icon extends React.Component {
  render() {
    return (
      <div className="icon">
        <img src={logo} alt="" className="logo"></img>
      </div>
    );
  }
}

export { Icon };
