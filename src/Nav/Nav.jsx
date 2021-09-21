import React from "react";
import { useLocation } from "react-router-dom";
import { Icon } from "./icon/Icon";

function Path() {
  const location = useLocation();
  console.log(location.pathname);
  if (location.pathname === "/") {
    return (
      <nav className="nf-nav" id="nf-nav">
        <Icon />
      </nav>
    );
  } else {
    return (
      <nav className="nf-nav" id="nf-nav">
        <Icon />
        <div className="nav-item">
          <ul>
            <li>首頁</li>
            <li>節目</li>
            <li>電影</li>
            <li>最新熱門影片</li>
            <li>我的片單</li>
          </ul>
        </div>
        <div className="nav-right">
          <span
            class="iconify"
            data-icon="ic:round-search"
            data-width="calc(16px + 0.4vw)"
          ></span>
          <span>兒童專區</span>
          <span
            class="iconify"
            data-icon="bx:bxs-bell"
            data-width="calc(16px + 0.4vw)"
          ></span>
          <span></span>
        </div>
      </nav>
    );
  }
}

class Nav extends React.Component {
  render() {
    return (
      <Path />
      // <nav className="nf-nav" id="nf-nav">
      //   <div className="nav-item">
      //     <ul>
      //       <li>首頁</li>
      //       <li>節目</li>
      //       <li>電影</li>
      //       <li>最新熱門影片</li>
      //       <li>我的片單</li>
      //     </ul>
      //   </div>
      //   <div className="nav-right">
      //     <span
      //       class="iconify"
      //       data-icon="ic:round-search"
      //       data-width="30"
      //     ></span>
      //     <span>兒童專區</span>
      //     <span class="iconify" data-icon="bx:bxs-bell" data-width="30"></span>
      //     <span></span>
      //   </div>
      // </nav>
    );
  }
}

export { Nav };
