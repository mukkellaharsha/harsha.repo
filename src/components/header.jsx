import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>My React App</h1>
      <nav style={styles.nav}>
        <a href="#home" style={styles.link}>
          Home
        </a>
        <a href="#about" style={styles.link}>
          About
        </a>
        <a href="#contact" style={styles.link}>
          Contact
        </a>
        <a href="#mail" style={styles.link}>
          {" "}
          Mail
        </a>
        <a href="#mail" style={styles.link}>
          {" "}
          Controlls
        </a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2rem",
    backgroundColor: "#282c34",
    color: "white",
    marginTop: "0",
  },
  title: {
    margin: 0,
  },
  nav: {
    display: "flex",
    gap: "3rem",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
};

export default Header;
