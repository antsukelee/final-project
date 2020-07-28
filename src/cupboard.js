import React, { useState, useEffect } from "react";
import axios from "./axios";

export default function Cupboard({ imageFile }) {
    const [allitems, setAllitems] = useState([]);

    useEffect(() => {
        axios.get("/wardrobe").then((result) => {
            setAllitems(result.data);
        });
    }, [imageFile]);

    return (
        <div className="cupboard-container">
            <ul className="cupboard-items">
                {allitems.length > 0 &&
                    allitems.map((pic) => {
                        return (
                            <div key={pic.id}>
                                <li>
                                    <div className="cupboard-item">
                                        <img src={pic.item_url} />
                                        <p>{pic.category}</p>
                                    </div>
                                </li>
                            </div>
                        );
                    })}
            </ul>{" "}
        </div>
    );
}
