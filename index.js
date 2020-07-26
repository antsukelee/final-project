const express = require("express");
const app = express();
const compression = require("compression");
const {
    uploadItem,
    getWardrobeItems,
    getTops,
    getBottoms,
    getShoes,
    getAccessories,
    getHats,
} = require("./db.js");

const s3 = require("./s3.js");
const { s3Url } = require("./config.json");

app.use(compression());

if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/",
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.use(express.static("public"));
app.use(express.json());

app.use(
    express.urlencoded({
        extended: false,
    })
);

/////////////////////////////////////////////////////////
/////////////// FILE UPLOAD BOILERPLATE /////////////////
const multer = require("multer"); // npm package
const uidSafe = require("uid-safe"); // npm package
const path = require("path"); // part of node. a core module

const diskStorage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, __dirname + "/uploads");
    },
    filename: function (req, file, callback) {
        uidSafe(24).then(function (uid) {
            callback(null, uid + path.extname(file.originalname));
        });
    },
});

const uploader = multer({
    storage: diskStorage,
    limits: {
        fileSize: 2097152, // important to have that limit. 2MB
    },
});
///////////// UP HERE: FILE UPLOAD BOILERPLATE //////////

// UPLOADING A PICTURE //
app.post("/upload", uploader.single("file"), s3.upload, (req, res) => {
    console.log("RES.BODY: ", res.body);
    console.log("req.body: ", req.body);
    const { filename } = req.file;
    const item_url = `${s3Url}${filename}`;

    if (req.file) {
        console.log("req.file", req.file);
        uploadItem(item_url, req.body.category)
            .then((response) => {
                console.log(
                    "uploadItem RESULT log in /upload index.js",
                    response
                );
                res.json(response.rows[0]);
            })
            .catch((err) => {
                console.log("error in uploadItem index.js", err);
            });
    }
});

// TO RENDER WARDROBE ITEMS //
app.get("/wardrobe", (req, res) => {
    getWardrobeItems().then((response) => {
        //console.log("Response in getWardrobeItems index.js: ", response);
        res.json(response.rows);
    });
});
app.get("/wardrobetops", (req, res) => {
    getTops().then((response) => {
        //console.log("Response in getWardrobeItems index.js: ", response);
        res.json(response.rows);
    });
});
app.get("/wardrobebottoms", (req, res) => {
    getBottoms().then((response) => {
        //console.log("Response in getWardrobeItems index.js: ", response);
        res.json(response.rows);
    });
});
app.get("/wardrobeshoes", (req, res) => {
    getShoes().then((response) => {
        //console.log("Response in getWardrobeItems index.js: ", response);
        res.json(response.rows);
    });
});
app.get("/wardrobeaccessories", (req, res) => {
    getAccessories().then((response) => {
        //console.log("Response in getWardrobeItems index.js: ", response);
        res.json(response.rows);
    });
});
app.get("/wardrobehats", (req, res) => {
    getHats().then((response) => {
        //console.log("Response in getWardrobeItems index.js: ", response);
        res.json(response.rows);
    });
});

// TO RENDER APP
app.get("/app", (req, res) => {
    //res.redirect("/app");
    res.sendFile(__dirname + "/index.html");
});

app.get("*", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function () {
    console.log("I'm listening.");
});
