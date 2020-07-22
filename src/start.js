import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

ReactDOM.render(<HelloWorld />, document.querySelector("main"));

function HelloWorld() {
    return (
        <div>Hello, World!</div>
        //<App />
    );
}
