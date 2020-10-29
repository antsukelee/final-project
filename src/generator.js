import React, { useState, useEffect } from "react";
import axios from "./axios";

export default function Generator() {
    // const [random, setRandom] = useState(0);
    // const [tops, setTops] = useState([]);
    const [randomtop, setRandomtop] = useState(0);
    const [randombottom, setRandombottom] = useState(0);
    const [randomshoes, setRandomshoes] = useState(0);
    const [randomaccessory, setRandomaccessory] = useState(0);
    const [randomhat, setRandomhat] = useState(0);
    const [outfit, setOutfit] = useState([]);

    console.log("outfit OH JE", outfit);

    function handleGenerator() {
        axios.get("/wardrobe").then((result) => {
            getRandomOutfit(result.data);
            // console.log("RESULT OF AXIOSSSSS", result);
        });
    }

    function getRandomOutfit(results) {
        const categories = ["top", "bottom", "shoes", "accessories", "hats"];
        const finalOutfit = [];
        for (let i = 0; i < categories.length; i++) {
            let items = results.filter((item) => {
                return item.category === categories[i];
            });
            console.log("items", items);
            let index = getRandomNumber(0, items.length - 1);
            finalOutfit.push(items[index]);
        }

        // console.log("THIS IS THE ARRAY:", finalOutfit);
        setRandomtop(finalOutfit[0].item_url);
        setRandombottom(finalOutfit[1].item_url);
        setRandomshoes(finalOutfit[2].item_url);
        setRandomaccessory(finalOutfit[3].item_url);
        setRandomhat(finalOutfit[4].item_url);
        setOutfit(finalOutfit);

        // setOutfit(finalOutfit);
        console.log("finalOutfit: ", finalOutfit);
    }
    // SAVE OUTFIT FN
    function handleSaveFavourite(outfit) {
        // console.log("handleSaveFavourite saving a fave outfit:", outfit);
        // const outfitItems = [];
        // for (let i = 0; i < outfit.length; i++) {
        //     outfitItems.push(outfit[i].item_url);
        // }
        axios
            .post("/favourite", outfit)
            .then((response) => {
                console.log("added fave outfit to the database", response);
            })
            .catch(function (err) {
                console.log(
                    "error in handleSaveFavourites generator.js: ",
                    err
                );
            });
    }
    //     axios
    //         .post("/favourite", outfitItems)
    //         .then((response) => {
    //             console.log("added fave outfit to the database", response);
    //         })
    //         .catch(function (err) {
    //             console.log(
    //                 "error in handleSaveFavourites generator.js: ",
    //                 err
    //             );
    //         });
    // }

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <div className="generator-container">
            <p className="title">GENERATE AN OUTFIT FOR THE DAY</p>
            <button onClick={(e) => handleGenerator(e)}>GENERATE</button>
            <button onClick={(e) => handleSaveFavourite(outfit)}>
                SAVE OUTFIT
            </button>
            <div className="outfit-container">
                <div className="top-bottom-display">
                    {/* <img src={finalOutfit[0]}></img> */}
                    <img src={randomtop || "/defaultimg.jpg"} alt="top"></img>
                    <img
                        src={randombottom || "/defaultimg.jpg"}
                        alt="bottom"
                    ></img>
                </div>
                <div className="extras-display">
                    <img src={randomhat || "/defaultimg.jpg"} alt="hat"></img>
                    <img
                        src={randomaccessory || "/defaultimg.jpg"}
                        alt="accessory"
                    ></img>
                    <img
                        src={randomshoes || "/defaultimg.jpg"}
                        alt="shoes"
                    ></img>
                </div>
            </div>
        </div>
    );
}

// const handleGenerator = (e) => {
//     e.preventDefault();
//     console.log("handleClick for generator runs!");

//     axios.get("/wardrobetops").then((result) => {
//         console.log("axios TOPS in generator.js result.data", result.data);
//         setTops(result.data);
//         console.log("tops:", tops);
//         let index = getRandomNumber(0, tops.length - 1);
//         console.log(index);

//         setRandomtop(tops[index].item_url);
//         // console.log("axios.get result.data: ", result.data.rows);
//     });
// };

// useEffect(() => {
//     console.log("component mounted");
// }, []);

// function getData() {
//     return axios.get("/wardrobetops");
// }
// function getData() {
//     return axios.get("/wardrobe");
// }
/////////////////////////////////////////////
/////////////////////////////////////////////

// function handleGenerator() {
//     // getData().then((result) => {
//     //     console.log(result);
//     //     let index = getRandomNumber(0, result.data.length - 1);
//     //     setRandomtop(result.data[index].item_url);
//     // });
//     axios.get("/wardrobetops").then((result) => {
//         console.log("result axios.get  /wardrobetops", result);
//         let index = getRandomNumber(0, result.data.length - 1);
//         setRandomtop(result.data[index].item_url);
//     });
//     axios.get("/wardrobebottoms").then((result) => {
//         console.log("result axios.get  /wardrobebottoms", result);
//         let index = getRandomNumber(0, result.data.length - 1);
//         setRandombottom(result.data[index].item_url);
//     });
//     axios.get("/wardrobeshoes").then((result) => {
//         console.log("result axios.get  /wardrobebottoms", result);
//         let index = getRandomNumber(0, result.data.length - 1);
//         setRandomshoes(result.data[index].item_url);
//     });
//     axios.get("/wardrobeaccessories").then((result) => {
//         console.log("result axios.get  /wardrobebottoms", result);
//         let index = getRandomNumber(0, result.data.length - 1);
//         setRandomaccessory(result.data[index].item_url);
//     });
//     axios.get("/wardrobehats").then((result) => {
//         console.log("result axios.get  /wardrobebottoms", result);
//         let index = getRandomNumber(0, result.data.length - 1);
//         setRandomhat(result.data[index].item_url);
//     });
// }
