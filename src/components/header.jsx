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
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "#282c34",
    color: "white",
  },
  title: {
    margin: 0,
  },
  nav: {
    display: "flex",
    gap: "1rem",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
};

export default Header;
