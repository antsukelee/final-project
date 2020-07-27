import React, { useState, useEffect } from "react";
import axios from "./axios";

export default function Generator() {
    const [random, setRandom] = useState(0);
    const [tops, setTops] = useState([]);
    const [randomtop, setRandomtop] = useState([]);
    const [randombottom, setRandombottom] = useState([]);
    const [randomshoes, setRandomshoes] = useState([]);
    const [randomaccessory, setRandomaccessory] = useState([]);
    const [randomhat, setRandomhat] = useState([]);

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

    function handleGenerator() {
        // getData().then((result) => {
        //     console.log(result);
        //     let index = getRandomNumber(0, result.data.length - 1);
        //     setRandomtop(result.data[index].item_url);
        // });
        axios.get("/wardrobetops").then((result) => {
            console.log("result axios.get  /wardrobetops", result);
            let index = getRandomNumber(0, result.data.length - 1);
            setRandomtop(result.data[index].item_url);
        });
        axios.get("/wardrobebottoms").then((result) => {
            console.log("result axios.get  /wardrobebottoms", result);
            let index = getRandomNumber(0, result.data.length - 1);
            setRandombottom(result.data[index].item_url);
        });
        axios.get("/wardrobeshoes").then((result) => {
            console.log("result axios.get  /wardrobebottoms", result);
            let index = getRandomNumber(0, result.data.length - 1);
            setRandomshoes(result.data[index].item_url);
        });
        axios.get("/wardrobeaccessories").then((result) => {
            console.log("result axios.get  /wardrobebottoms", result);
            let index = getRandomNumber(0, result.data.length - 1);
            setRandomaccessory(result.data[index].item_url);
        });
        axios.get("/wardrobehats").then((result) => {
            console.log("result axios.get  /wardrobebottoms", result);
            let index = getRandomNumber(0, result.data.length - 1);
            setRandomhat(result.data[index].item_url);
        });
    }

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <div className="generator-container">
            <p className="title">Generate an outfit for the day</p>
            <button onClick={(e) => handleGenerator(e)}>GENERATE</button>
            <div className="outfit-container">
                <div className="top-bottom-display">
                    <img src={randomtop || "/defaultimg.jpg"} alt="top"></img>
                    <img
                        src={randombottom || "/defaultimg.jpg"}
                        alt="bottom"
                    ></img>
                </div>
                <div className="extras-display">
                    <img
                        src={randomshoes || "/defaultimg.jpg"}
                        alt="shoes"
                    ></img>
                    <img
                        src={randomaccessory || "/defaultimg.jpg"}
                        alt="accessory"
                    ></img>
                    <img src={randomhat || "/defaultimg.jpg"} alt="hat"></img>
                </div>
            </div>
        </div>
    );
}
