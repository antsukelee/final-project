import React from "react";
import Registration from "./registration";
import Login from "./login";
import axios from "./axios";
import { HashRouter, Route } from "react-router-dom";
// import Logo from "./logo";

export default function Welcome() {
    return (
        <div>
            {/* <Logo /> */}
            <h3 className="text-middle">Sign up to use style genie</h3>
            <label>
                <HashRouter>
                    <div>
                        <Route exact path="/" component={Registration} />
                        <Route path="/login" component={Login} />
                    </div>
                </HashRouter>
                {/* <Registration /> */}
            </label>
        </div>
    );
}
