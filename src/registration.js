//registration
import React from "react";
import axios from "./axios";
import { Link } from "react-router-dom";
import { useStatefulFields } from "./hooks/useStatefulFields";
import { useAuthSubmit } from "./hooks/useAuthSubmit";

export default function Registration() {
    const [values, handleChange] = useStatefulFields();
    const [error, handleClick] = useAuthSubmit("/registration", values);

    return (
        <div className="registration-form">
            {error && (
                <p className="error">Something went wrong. Please try again</p>
            )}
            <div className="field">
                <p>first name</p>
                <input
                    name="f_name"
                    type="text"
                    onChange={handleChange}
                ></input>
            </div>
            <div className="field">
                <p>last name</p>

                <input
                    name="l_name"
                    type="text"
                    onChange={handleChange}
                ></input>
            </div>
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
            <button onClick={() => handleClick()}>Register</button>
            <Link to="/login" className="link">
                Already registered? Log in here.
            </Link>
        </div>
    );
    //}
}
