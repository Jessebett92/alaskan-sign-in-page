import React from "react";
import ReactDOM from "react-dom";

import SignInForm from "./signing-in-page/sign-in-form";

import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <div className="top-page-image">
        <h1>Tour Alaska</h1>
      </div>
      <div className="bottom-page">
        <SignInForm />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
