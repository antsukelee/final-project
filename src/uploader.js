// user uploads images of their garments
// selection of garment category
// setting a temperature range for each item

import React, { useState } from "react";
import axios from "./axios";

export default function Uploader(props) {
    const [categories, setCategories] = useState("");

    const handleUpload = (e) => {
        e.preventDefault();
        console.log("handleUpload runs!");

        var formData = new FormData();
        formData.append("file", props.file);

        axios
            .post("/upload", formData, categories)
            .then((response) => {
                console.log(
                    "respnse from axios post /upload IMG UPLOAD: ",
                    response
                );
                props.setFile(response.data.item_url);
                //setCategories(response.data.category);
            })
            .catch(function (err) {
                console.log("error in POST /upload axios: ", err);
            });
    };

    const handleChange = (e) => {
        props.setFile(e.target.value);
    };

    const handleCategory = (e) => {
        console.log("e.target in uploader.js:", e.target);
        setCategories(e.target.category);
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
            <select
                onChange={(e) => handleCategory(setCategories(categories))}
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
