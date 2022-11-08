import React, { Component } from "react";
import Logo from "../images/Pasion..png";
import styles from "./Header.module.css";
class Header extends Component {
  render() {
    const { open } = this.props;
    return (
      <>
        <header className={styles.header}>
          <nav>
            <ul>
              <li>
                <a link="#">Home</a>
              </li>
              <li>
                <a link="#">About Me</a>
              </li>
              <li>
                <a link="#">Portfolio</a>
              </li>
              <li>
                <a link="#">Contact Me</a>
              </li>
              <li>
                <a link="#">Blog</a>
              </li>
            </ul>
          </nav>
          <img src={Logo} alt="Logo" />
        </header>
        <div
          className={styles.hambergurmenu}
          style={open ? { left: "0" } : { left: "-100%" }}
        >
          <nav>
            <ul>
              <li>
                <a link="#">Home</a>
              </li>
              <li>
                <a link="#">About Me</a>
              </li>
              <li>
                <a link="#">Portfolio</a>
              </li>
              <li>
                <a link="#">Contact Me</a>
              </li>
              <li>
                <a link="#">Blog</a>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
}

export default Header;
