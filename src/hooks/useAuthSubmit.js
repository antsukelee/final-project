// this hook is specific for registration and login post requests.

import React, { useState } from "react";
import axios from "../axios";

export function useAuthSubmit(url, values) {
    const [error, setError] = useState(false);
    const handleClick = () => {
        axios
            .post(url, values)
            .then(({ data }) => {
                if (data.success) {
                    location.replace("/");
                } else {
                    setError(true);
                }
            })
            .catch((err) => {
                console.log("error in handleClick useAuthSubmit.js: ", err);
                setError(true);
            });
    };

    return [error, handleClick];
}
