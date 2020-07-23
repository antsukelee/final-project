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
            <p>YOUR WARDROBE</p>
            <p>Tops</p>
            <ul className="wardrobe-items">
                {pics.length > 0 &&
                    pics.map((pic) => {
                        return (
                            <div>
                                <li key={pic.id}>
                                    <img
                                        className="wardrobe-item"
                                        src={pic.item_url}
                                    />
                                </li>
                            </div>
                        );
                    })}
            </ul>
            <p>Bottoms</p>
            <ul className="wardrobe-items">
                {pics.length > 0 &&
                    pics.map((pic) => {
                        return (
                            <div>
                                <li key={pic.id}>
                                    <img
                                        className="wardrobe-item"
                                        src={pic.item_url}
                                    />
                                </li>
                            </div>
                        );
                    })}
            </ul>
            <p>Shoes</p>
            <ul className="wardrobe-items">
                {pics.length > 0 &&
                    pics.map((pic) => {
                        return (
                            <div>
                                <li key={pic.id}>
                                    <img
                                        className="wardrobe-item"
                                        src={pic.item_url}
                                    />
                                </li>
                            </div>
                        );
                    })}
            </ul>
        </div>
    );
}
