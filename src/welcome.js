import React from "react";
import Registration from "./registration";
import Login from "./login";
import axios from "./axios";
import { HashRouter, Route } from "react-router-dom";
// import Logo from "./logo";

export default function Welcome() {
    return (
        <div>
            <div className="welcome-visual">
                <img src="/backpic.jpg" alt="decorative image"></img>
            </div>
            {/* <Logo /> */}
            <h2 className="descriptive-welcome">
                Upload your wardrobe and create new outfits
            </h2>
            <h3 className="title-text-middle">Sign up to use style genie</h3>
            <label>
                <HashRouter>
                    <div className="log-reg-form">
                        <Route exact path="/" component={Registration} />
                        <Route path="/login" component={Login} />
                    </div>
                </HashRouter>
                {/* <Registration /> */}
            </label>
        </div>
    );
}
