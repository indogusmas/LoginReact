import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import ValidateLoginForm from "./component/ValidatedLoginForm";

function App() {
  return (
    <div className="App">
      <ValidateLoginForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
