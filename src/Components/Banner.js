import React, { Component } from "react";
import styles from "./Banner.module.css";
import bannerimg from "../images/Untitled-3.png";
import "../index.css";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      more: false,
    };
  }
  ClickHandeler = () => {
    this.setState((prevstate) => ({
      more: !prevstate.more,
    }));
    console.log(this.state.more);
  };
  render() {
    return (
      <div className={styles.Bannermain}>
        <div className={styles.headerdiv}>
          <h1>I’m Programmer Abbas Ejlali</h1>

          <p>
            I am Abbas Ejlali and I am glad that you came to my site I started
            programming in 1399 and studied IT at Shamsipour University in
            Tehran and currently I am a front and web programmer.
            <span
              style={
                this.state.more ? { display: "flex" } : { display: "none" }
              }
            >
              I am interested in various topics in computer science, such as web
              programming, network or even robotics, but the languages ​​and
              libraries I know include: Html Css Bootstrap Java Script React Git
              illustrator
            </span>
          </p>
          {/* <p>متن مخفی</p> */}
          <button onClick={this.ClickHandeler}>Read More</button>
        </div>

        <img src={bannerimg} alt="bannerimage" />
      </div>
    );
  }
}

export default Banner;
