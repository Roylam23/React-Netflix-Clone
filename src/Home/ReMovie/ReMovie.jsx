import React from "react";
import { TopOption } from "../TopOption/TopOption";
import { gsap } from "gsap";
import { useEffect } from "react";

function Icon() {
  useEffect(() => {
    gsap.to(".mo-title-img",1.2, {width:'25vw', delay:4});
    gsap.to('.re-comment',0.6,{opacity: 0,delay:4});
    gsap.to('.re-comment',1,{height:0,delay:4});
  });
  return (
    <img
      className="mo-title-img"
      src="https://occ-0-395-325.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABWTz-X72CUMZ7VgQ3k-q_4rYhN2LltadXjACcFGsYUAeJertSeGZESBEVLnMFXcxkMkWu3vAJfOe-QczpMrkSC6OSbJBTeOUQqckqmprBqQcra2GpEvNSVb5wALHYv-bhIQHAzfMw7LFKSoyvf7DHalSwHplNlBCFhjpAZSNLHgHVA.webp?r=f09"
      alt=""
    ></img>
  );
}

class ReMovie extends React.Component {
  render() {
    return (
      <div className="top-mo">
        <div className="shadow"></div>
        <div className="mo-title">
            <Icon/>
        </div>
        <div className="re-comment"><span className="comment-head">第 5 部第 1 輯將於 9 月 3 日上線</span><span>八名竊賊挾持人質，並將自己反鎖在西班牙皇家造幣廠內，由一名犯罪首腦在執行計畫期間，負責操縱警方。</span></div>
        <div className="mo-btn">
          <button className="btn-play">
            <span
              class="iconify"
              style={{ color: "black" }}
              data-icon="ci:play-arrow"
              data-width="calc(16px + 1vw)"
            ></span>
            播放
          </button>
          <button className="btn-play info">
            <span
              class="iconify"
              data-icon="ant-design:info-circle-outlined"
              style={{ color: "white" }}
              data-width="calc(12px + 1vw)"
            ></span>
            更多資訊
          </button>
        </div>
        <img
          src="https://occ-0-395-325.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbn4fGIxTE9AxS2JQHIDvuuSD_FA0C7GQAwRcvEKhMZZows9NdbaG_1-zceXhMYhbCQN0h3EznXL2K3MCe7nspDPBlR5.webp?r=5ce"
          alt=""
        ></img>
        <TopOption name="熱門選擇" list="img" />
      </div>
    );
  }
}

export { ReMovie };
