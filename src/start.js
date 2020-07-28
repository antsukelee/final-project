import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import Welcome from "./welcome";

// let elem;

// if (location.pathname === "/app") {
//     elem = <App />;
// } else {
//     elem = <div>Hello, World!</div>;
// }
let elem;
if (location.pathname === "/welcome") {
    // runs if user IS NOT logged in
    elem = <Welcome />;
} else {
    elem = <App />;
}

ReactDOM.render(elem, document.querySelector("main"));
