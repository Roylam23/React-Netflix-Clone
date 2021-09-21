import React from "react";
import { HotImg } from "../OptionImg/HotImg";
import { Icon } from "@iconify/react";
class Option extends React.Component {
  render() {
    // var arr = ['HotImg'];
    // var comArr = [<HotImg/>];
    // var com;
    // for (var i of arr){
    //     if (this.props.list === i){
    //         com = comArr[arr.indexOf(i)]
    //     }
    // }
    return (
      <div className="choice">
        <div className="title">
          <div className="title-name">{this.props.name}</div>
          <div className="hover-area">
            <Icon
              className="hover"
              icon="akar-icons:chevron-right"
              color="white"
              width="calc(10px + 0.35vw)"
            />
            <span className="all" id="all">
              探索全部
            </span>
          </div>
        </div>
        <div className="mo-con">
          <div className="mo-con-em"></div>
          <HotImg name={this.props.list} />
        </div>
      </div>
    );
  }
}
export { Option };
