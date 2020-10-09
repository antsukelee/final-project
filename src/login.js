//login
import React from "react";
import axios from "./axios";
import { Link } from "react-router-dom";

import { useStatefulFields } from "./hooks/useStatefulFields";
import { useAuthSubmit } from "./hooks/useAuthSubmit";

export default function Login() {
    const [values, handleChange] = useStatefulFields();
    const [error, handleClick] = useAuthSubmit("/login", values);
    return (
        <div className="login-form">
            {error && (
                <p className="error">Something went wrong. Please try again.</p>
            )}
            <div className="field">
                <p>email</p>
                <input
                    name="email"
                    type="email"
                    onChange={handleChange}
                ></input>
            </div>
            <div className="field">
                <p>password</p>
                <input
                    name="password"
                    type="password"
                    onChange={handleChange}
                ></input>
            </div>
            <button onClick={() => handleClick()}>Login</button>
            <Link to="/" className="link">
                Register here!
            </Link>
            <Link to="/" className="link">
                Forgot your password?
            </Link>
        </div>
    );
    // }
}
