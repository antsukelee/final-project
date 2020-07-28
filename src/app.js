import React, { useState } from "react";
import Uploader from "./uploader";
import Wardrobe from "./wardrobe";
import Generator from "./generator";

import { Link, BrowserRouter, Route } from "react-router-dom";

export default function App() {
    const [file, setFile] = useState();
    const [categories, setCategories] = useState([]);
    return (
        <BrowserRouter>
            <div className="all">
                <header>
                    <h3>Style gen</h3>
                    <h4>
                        Upload photos of your clothes and get outift combination
                        suggestions!
                    </h4>
                    <div className="nav-links">
                        <Link className="nav-links-link" to="/profile">
                            Profile
                        </Link>
                        <Link className="nav-links-link" to="/favourites">
                            Favourites
                        </Link>
                        <Link className="nav-links-link" to="/wardrobe">
                            Wardrobe
                        </Link>
                    </div>
                </header>
                <div className="app-layout">
                    <div className="left-nav">
                        <Uploader
                            setFile={setFile}
                            file={file}
                            categories={categories}
                            setCategories={setCategories}
                        />

                        <Wardrobe imageFile={file} />
                    </div>
                    <div>
                        <Generator />
                    </div>
                </div>
                <footer>
                    © 2020 Sandra Raav
                    <a href="/logout" className="nav-links-link">
                        {" "}
                        Log out
                    </a>
                </footer>
            </div>
        </BrowserRouter>
    );
}
