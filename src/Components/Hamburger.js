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
              : { top: "10px", left: "22px" }
          }
          className={styles.divmain}
        >
          <div
            style={
              this.state.open
                ? {
                    transform: "rotate(-45deg)",
                    transformOrigin: "40px",
                    backgroundColor: "white",
                  }
                : { transform: "rotate(0)", backgroundColor: "#ff3a4a" }
            }
          ></div>
          <div
            style={
              this.state.open
                ? {
                    translatex: "-100%",
                    opacity: "0",
                    backgroundColor: "white",
                  }
                : { translatex: "0", opacity: "1", backgroundColor: "#ff3a4a" }
            }
          ></div>
          <div
            style={
              this.state.open
                ? {
                    transform: "rotate(45deg)",
                    transformOrigin: "40px",
                    backgroundColor: "white",
                  }
                : { transform: "rotate(0)", backgroundColor: "#ff3a4a" }
            }
          ></div>
        </div>
        <Header open={this.state.open} />
      </>
    );
  }
}

export default Hamburger;
