import React, { useState } from "react";

export default function Generator() {
    const [random, setRandom] = useState(0);

    const handleGenerator = (e) => {
        e.preventDefault();
        console.log("handleClick for generator runs!");
    };

    // QUERIES TO GET ALL ITEMS FROM A CATEGORY:
    // getTops, getBottoms, getShoes, getAccessories, getHats
    // RANDOM NUMBER GEN FUNCTION
    //
    // const min = 0;
    // const max = arr.length - 1;

    let arr = [];
    function getRandomNumber(min, max) {
        min = Math.ceil(0);
        max = Math.ceil(arr.length);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /// ???
    var items = [];
    var item = items[Math.floor(Math.random() * items.length)];

    return (
        <div className="generator-container">
            <p className="title">Generate an outfit for the day</p>
            <button onClick={(e) => handleGenerator(e)}>GENERATE</button>
            <div className="outfit-container">
                <div className="top-bottom-display">
                    <img src="/defaultimg.jpg" alt="top"></img>
                    <img src="/defaultimg.jpg" alt="bottom"></img>
                </div>
                <div className="extras-display">
                    <img src="/defaultimg.jpg" alt="shoes"></img>
                    <img src="/defaultimg.jpg" alt="accessory"></img>
                    <img src="/defaultimg.jpg" alt="hat"></img>
                </div>
            </div>
        </div>
    );
}
