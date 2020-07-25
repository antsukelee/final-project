// user uploads images of their garments
// selection of garment category
// setting a temperature range for each item

import React, { useState } from "react";
import axios from "./axios";

export default function Uploader(props) {
    const [categories, setCategories] = useState([]);

    const handleUpload = (e) => {
        e.preventDefault();
        console.log("handleUpload runs!");
        console.log("categories...:", categories);
        //console.log("PROPS:", props);

        var formData = new FormData();
        formData.append("file", props.file);
        formData.append("category", "categories");

        //const category = categories;

        axios
            .post("/upload", formData)
            .then((response) => {
                console.log(
                    "respnse from axios post /upload IMG UPLOAD: ",
                    response
                );
                props.setFile(response.data.item_url);
                setCategories(response.data.category);
            })
            .catch(function (err) {
                console.log("error in POST /upload axios uploader.js: ", err);
            });
    };

    const handleChange = (e) => {
        console.log(
            "e.target.value in handleChange setFile is: ",
            e.target.value
        );
        props.setFile(e.target.value);
    };

    const handleCategory = (e) => {
        console.log(
            "e.target.value in handleCategory  setCategories in uploader.js:",
            e.target.value
        );
        setCategories(e.target.value);
    };

    return (
        <div className="uploader-container">
            <div>Upload photos</div>
            <input
                onChange={(e) => handleChange(e)}
                type="file"
                accept="image/*"
                id="file"
                name="file"
            />
            {/* <input
                onChange={(e) => handleCategory(e)}
                name="category"
                id="category"
            ></input> */}
            <select
                onChange={(e) => handleCategory(e)}
                id="category"
                name="category"
                value="category"
            >
                <option value="top">Top</option>
                <option value="bottom">Bottom</option>
                <option value="shoes">Shoes</option>
                <option value="accessories">Accessory</option>
                <option value="hats">Hat</option>
            </select>
            <button onClick={(e) => handleUpload(e)}>UPLOAD</button>
            {/* <p onClick={this.props.closeModal} className="modal-x">
                X
            </p> */}
        </div>
    );
}
