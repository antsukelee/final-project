import React, { useState, useEffect } from "react";
import axios from "./axios";

export default function Favourites() {
    const [favourites, setAllFavourites] = useState([]);

    useEffect(
        () => {
            axios.get("/favourites").then((result) => {
                setAllFavourites(result.data);
            });
        } // [if anything is being passed to the function .. ]
    );

    return (
        <div className="favourites-container">
            <ul className="favourites-card">
                <p>something in it, hurray</p>
            </ul>
        </div>
    );
}
