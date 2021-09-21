import React from "react";
import { useHistory } from "react-router-dom";

class Profile extends React.Component {
  render() {
    var i = this.props.style;
    var name = this.props.name;
    function User() {
      const history = useHistory();
      const home = () => history.push("/browse");
      return (
        <div className="user-icon-con" onClick={home}>
          <div className="user-icon-in" style={i}></div>
          <div className="user-icon-name">{name}</div>
        </div>
      );
    }
    return <User />;
  }
}

export { Profile };
