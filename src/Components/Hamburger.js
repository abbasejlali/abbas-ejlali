import React, { Component } from "react";
import Header from "./Header";
import styles from "./Hamburger.module.css";
class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  blockFunction = () => {
    this.setState((prevprops) => ({
      open: !prevprops.open,
    }));
  };
  render() {
    return (
      <>
        <div
          onClick={this.blockFunction}
          style={
            this.state.open
              ? { top: "20px", left: "219px" }
              : { top: "34px", left: "30px" }
          }
          className={styles.divmain}
        >
          <div
            style={
              this.state.open
                ? { transform: "rotate(-45deg)", transformOrigin: "50px" }
                : { transform: "rotate(0)" }
            }
          ></div>
          <div
            style={
              this.state.open
                ? { translatex: "-100%", opacity: "0" }
                : { translatex: "0", opacity: "1" }
            }
          ></div>
          <div
            style={
              this.state.open
                ? { transform: "rotate(45deg)", transformOrigin: "48px" }
                : { transform: "rotate(0)" }
            }
          ></div>
        </div>
        <Header open={this.state.open} />
      </>
    );
  }
}

export default Hamburger;
