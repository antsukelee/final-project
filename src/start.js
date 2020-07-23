import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

let elem;

if (location.pathname === "/app") {
    elem = <App />;
} else {
    elem = <div>Hello, World!</div>;
}

ReactDOM.render(elem, document.querySelector("main"));
