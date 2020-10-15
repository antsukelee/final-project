import React, { useState, useEffect } from "react";
import axios from "./axios";

export default function Favourites({ imageFile }) {
    const [favourites, setAllFavourites] = useState([]);
    console.log("FAVESSSSS", favourites);

    useEffect(() => {
        axios.get("/favourites").then((result) => {
            setAllFavourites(result.data);
        });
    }, []);

    return (
        <div className="favourites-container">
            <ul className="favourites-card">
                {favourites.length > 0 &&
                    favourites.map((outfit) => {
                        return (
                            <div key={outfit.id}>
                                <li>
                                    <div>
                                        <ul>
                                            <img
                                                src={outfit.array_of_item_urls}
                                            />
                                            <p>{outfit.id}</p>
                                        </ul>
                                    </div>
                                </li>
                            </div>
                        );
                    })}
            </ul>
        </div>
    );
}
