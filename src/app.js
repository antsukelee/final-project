import React, { useState } from "react";
import Uploader from "./uploader";
import Wardrobe from "./wardrobe";
import Generator from "./generator";
import Cupboard from "./cupboard";
import About from "./about";

import { Link, BrowserRouter, Route } from "react-router-dom";

export default function App() {
    const [file, setFile] = useState();
    const [categories, setCategories] = useState([]);
    return (
        <BrowserRouter>
            <div className="all">
                <header>
                    <h3>Style genie</h3>
                    <h4>
                        Upload photos of your clothes and get creative outift
                        combinations!
                    </h4>
                    <div className="nav-links">
                        <Link className="nav-links-link" to="/">
                            Generator
                        </Link>
                        <Link className="nav-links-link" to="/favourites">
                            Favourites
                        </Link>
                        <Link className="nav-links-link" to="/wardrobe">
                            Wardrobe
                        </Link>
                        <Link className="nav-links-link" to="/about">
                            About
                        </Link>
                    </div>
                </header>

                {/* trying */}
                <Route
                    exact
                    path="/"
                    render={() => (
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
                    )}
                />
                <Route path="/wardrobe" component={Cupboard} />
                <Route path="/about" component={About} />

                {/* trying */}

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
