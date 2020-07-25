import React, { useState } from "react";
import Uploader from "./uploader";
import Wardrobe from "./wardrobe";
import Generator from "./generator";

import { Link, BrowserRouter, Route } from "react-router-dom";

export default function App() {
    const [file, setFile] = useState();
    return (
        <BrowserRouter>
            <h3>Style gen</h3>
            <div className="app-layout">
                <div className="left-nav">
                    <Uploader setFile={setFile} file={file} />

                    <Wardrobe imageFile={file} />
                </div>
                <div>
                    <Generator />
                </div>
            </div>
        </BrowserRouter>
    );
}
