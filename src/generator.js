import React, { useState } from "react";

export default function Generator() {
    const [random, setRandom] = useState(0);

    const min = 0;
    const max = 5;

    const handleGenerator = (e) => {
        e.preventDefault();
        console.log("handleClick for generator runs!");
    };

    return (
        <div className="generator-container">
            <p>Generate an outfit for the day</p>
            <button onClick={(e) => handleGenerator(e)}>GENERATE</button>
            <div className="outfit-container">
                <img src="/defaultimg.jpg" alt="top"></img>
                <img src="/defaultimg.jpg" alt="bottom"></img>
                <img src="/defaultimg.jpg" alt="shoes"></img>
            </div>
        </div>
    );
}
