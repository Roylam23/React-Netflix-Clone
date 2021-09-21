import React from "react"
import img from './img.json'
import asd from './asd.json'
class HotImg extends React.Component {
    render() {
        var arr = []
        var json = null;
        var jsonArr = [img, asd];
        var jsonArray = ['img','asd'];
        for (var i of jsonArray){
            if (this.props.name === i){
                json = jsonArr[jsonArray.indexOf(i)];
            }
        }
        Object.keys(json).forEach(function(key){
             arr.push(json[key]);
        });
        arr.sort(() => Math.random() - 0.5);
        return (
            arr.map(item =>  <div className="mo-con-in"><img src={item} alt=""></img></div>)
        )
    }
}

export {HotImg}