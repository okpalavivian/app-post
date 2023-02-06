import React from "react";
import Pix from "../../src/img/pix2.png";
const Post1 = () => {
  return (
    <div>
      <div className="post1">
        <div className="text1">Do you need a WebDevloper?</div>
        <div className="img">
          <img src={Pix} />
        </div>
      </div>

      <div className="post2">
        <div className="text2">You are at the right spot</div>
        <div className="link2">click on this link to contact us</div>
      </div>
    </div>
  );
};

export default Post1;
