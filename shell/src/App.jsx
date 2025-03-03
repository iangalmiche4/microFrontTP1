import React from "react";
import ReactDOM from "react-dom";
import Header from "header/Header"

import "./index.css";

const App = () => (
    <div className="container">
        <h1>Shell application</h1>
        <Header />
    </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
