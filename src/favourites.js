import React, { useState, useEffect } from "react";
import axios from "./axios";

export default function Favourites({ imageFile }) {
    const [favourites, setAllFavourites] = useState([]);
    console.log("FAVESSSSS state", favourites);

    useEffect(() => {
        axios.get("/favourites").then((result) => {
            setAllFavourites(result.data);
            console.log("FAVESSSSS", result);
        });
    }, []);

    return (
        <div>
            <ul className="favourites-container">
                {favourites.length > 0 &&
                    favourites.map((outfit) => {
                        return (
                            <div key={outfit.id}>
                                <li>
                                    <div>
                                        <ul className="favourites-card">
                                            <img src={outfit.top} />
                                            <img src={outfit.bottom} />
                                            <img src={outfit.shoes} />
                                            <img src={outfit.hat} />
                                            <img src={outfit.accessory} />
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
