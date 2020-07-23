import React, { useState, useEffect } from "react";
import axios from "./axios";

export default function Wardrobe({ imageFile }) {
    const [pics, setPics] = useState([]);
    //console.log("pics in setState in Wardrobe", pics);
    //

    useEffect(() => {
        axios.get("/wardrobe").then((result) => {
            setPics(result.data);
            console.log("axios.get result.data: ", result.data);
        });
    }, [imageFile]);

    return (
        <div className="wardrobe-container">
            <p>
                This is the Wardrobe component where I want to display the
                uploaded images
            </p>
            <ul>
                {pics.length > 0 &&
                    pics.map((pic) => {
                        return (
                            <li key={pic.id}>
                                <img
                                    className="wardrobe-item"
                                    src={pic.item_url}
                                />
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
}
