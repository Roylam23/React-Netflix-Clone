import React from "react";
import { HotImg } from "../OptionImg/HotImg";
class TopOption extends React.Component {
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
      <div className="choice top">
        <div className="title">{this.props.name}</div>
        <div className="mo-con">
          <div className="mo-con-em"></div>
          <HotImg name={this.props.list}/>
        </div>
      </div>
    );
  }
}
export { TopOption };
