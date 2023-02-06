import React from "react";
import Pix from "../../src/img/bg2.png";
import Icon from "../../src/img/icon.png";
const Post2 = () => {
  return (
    <div>
      <div className="container">
        <div className="left">
          <div className="text1">We are hiring</div>
          <div className="text2">React </div>
          <div className="text2">Developers</div>
          <div className="text3">Remote Full time </div>
          <div className="text4">Job Oppotunities in UK</div>
        </div>
        <div className="right">
          <div className="logo">
            <span className="icon-img">
              <img
                className="logo-img"
                src={Icon}
                alt=""
                style={{ width: "20px" }}
              />
            </span>
            <span className="icon-img"> DevelopersPort.</span>
          </div>
          <div className="clip-path"></div>
          <img className="img" src={Pix} alt="" />
        </div>
      </div>
      <div className="text5-main">
        <div className="text5">Apply Now</div>
        <div className="text5">></div>
      </div>
    </div>
  );
};

export default Post2;
