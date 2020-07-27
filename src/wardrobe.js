import React, { useState, useEffect } from "react";
import axios from "./axios";

export default function Wardrobe({ imageFile }) {
    const [pics, setPics] = useState([]);
    const [tops, setTops] = useState([]);
    const [bottoms, setBottoms] = useState([]);
    const [shoes, setShoes] = useState([]);
    const [accessories, setAccessories] = useState([]);
    const [hats, setHats] = useState([]);
    // console.log("pics in setState in Wardrobe", pics);
    //

    // useEffect(() => {
    //     axios.get("/wardrobe").then((result) => {
    //         setPics(result.data);
    //         console.log("axios.get result.data: ", result.data);
    //     });
    // }, [imageFile]);
    useEffect(() => {
        axios.get("/wardrobetops").then((result) => {
            setTops(result.data);
            // console.log("axios.get result.data: ", result.data);
        });
    }, [imageFile]);
    useEffect(() => {
        axios.get("/wardrobebottoms").then((result) => {
            setBottoms(result.data);
            // console.log("axios.get result.data: ", result.data);
        });
    }, [imageFile]);
    useEffect(() => {
        axios.get("/wardrobeshoes").then((result) => {
            setShoes(result.data);
            // console.log("axios.get result.data: ", result.data);
        });
    }, [imageFile]);
    useEffect(() => {
        axios.get("/wardrobeaccessories").then((result) => {
            setAccessories(result.data);
            // console.log("axios.get result.data: ", result.data);
        });
    }, [imageFile]);
    useEffect(() => {
        axios.get("/wardrobehats").then((result) => {
            setHats(result.data);
            // console.log("axios.get result.data: ", result.data);
        });
    }, [imageFile]);

    return (
        <div className="wardrobe-container">
            <p className="nav-text">YOUR WARDROBE</p>
            {/* <p>Tops</p>
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
            </ul> */}
            <p className="nav-text">TOPS</p>
            <ul className="wardrobe-items">
                {tops.length > 0 &&
                    tops.map((top) => {
                        return (
                            <div key={top.id}>
                                <li>
                                    <img
                                        className="wardrobe-item"
                                        src={top.item_url}
                                    />
                                </li>
                            </div>
                        );
                    })}
            </ul>
            <p className="nav-text">BOTTOMS</p>
            <ul className="wardrobe-items">
                {bottoms.length > 0 &&
                    bottoms.map((bottom) => {
                        return (
                            <div key={bottom.id}>
                                <li>
                                    <img
                                        className="wardrobe-item"
                                        src={bottom.item_url}
                                    />
                                </li>
                            </div>
                        );
                    })}
            </ul>
            <p className="nav-text">SHOES</p>
            <ul className="wardrobe-items">
                {shoes.length > 0 &&
                    shoes.map((shoe) => {
                        return (
                            <div key={shoe.id}>
                                <li>
                                    <img
                                        className="wardrobe-item"
                                        src={shoe.item_url}
                                    />
                                </li>
                            </div>
                        );
                    })}
            </ul>
            <p className="nav-text">ACCESSORIES</p>
            <ul className="wardrobe-items">
                {accessories.length > 0 &&
                    accessories.map((accessory) => {
                        return (
                            <div key={accessory.id}>
                                <li>
                                    <img
                                        className="wardrobe-item"
                                        src={accessory.item_url}
                                    />
                                </li>
                            </div>
                        );
                    })}
            </ul>
            <p className="nav-text">HATS</p>
            <ul className="wardrobe-items">
                {hats.length > 0 &&
                    hats.map((hat) => {
                        return (
                            <div key={hat.id}>
                                <li>
                                    <img
                                        className="wardrobe-item"
                                        src={hat.item_url}
                                    />
                                </li>
                            </div>
                        );
                    })}
            </ul>
        </div>
    );
}
