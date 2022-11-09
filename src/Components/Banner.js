import React, { Component } from "react";
import styles from "./Banner.module.css";
import bannerimg from "../images/Untitled-3.png";
class Banner extends Component {
  render() {
    return (
      <div className={styles.Bannermain}>
        <div className={styles.imgdiv}>
          <img src={bannerimg} alt="bannerimage" />
        </div>
        <div className={styles.headerdiv}>
          <h1>
            I’m Programmer <br />
            Abbas Ejlali
          </h1>

          <p>
            I am Abbas Ejlali and I am glad that you came to my site I started
            programming in 1399 and studied IT at Shamsipour University in
            Tehran and currently I am a front and web programmer.
          </p>
          <p>متن مخفی</p>
          <button>Read More</button>
        </div>
      </div>
    );
  }
}

export default Banner;
