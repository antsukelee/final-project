import React from "react";
import Uploader from "./uploader";
import Wardrobe from "./wardrobe";

import { Link, BrowserRouter, Route } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <p>This is the App component</p>

                <Uploader />

                <Wardrobe />
            </div>
        </BrowserRouter>
    );
}
