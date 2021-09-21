import React from "react";
import { Nav } from "../Nav/Nav";
import { ReMovie } from "./ReMovie/ReMovie";
import { Option } from "./Option/Option";
import { gsap } from "gsap";
import { useEffect } from "react";
import "../index.css";

const Ani = () => {
  useEffect(() => {
    gsap.fromTo("body", 0.6, { opacity: 0.3 }, { opacity: 1 });
  });
  return null;
};

class Home extends React.Component {
  render() {
    return (
      <div>
        <Ani />
        <Nav />
        <ReMovie />
        <Option name="現正熱播" list="asd" />
        <Option name="西洋電影" list="img" />
        <Option name="榮登本日香港排行榜前 10 名" list="img" />
      </div>
    );
  }
}

export { Home };
