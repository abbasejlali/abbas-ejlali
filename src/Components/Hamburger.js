import React, { Component } from "react";
import Header from "./Header";
import styles from "./Hamburger.module.css";
class Hamburger extends Component {
  render() {
    return (
      <>
        <div className={styles.divmain}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <Header />
      </>
    );
  }
}

export default Hamburger;
