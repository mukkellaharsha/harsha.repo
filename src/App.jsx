import React from "react";
import Header from "./components/header.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Welcome to My React App</h2>
        <p>This is the main content of the app.</p>
        <button>enter</button>
        <button>add</button>
        <button>like</button>
      </main>
    </div>
  );
};

export default App;
