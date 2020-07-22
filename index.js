const express = require("express");
const app = express();
const compression = require("compression");

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

app.get("/upload", uploader.single("file"), s3.upload, (req, res) => {
    const { filename } = req.file;
    const { garmentImg } = `${s3Url}${filename}`;

    if (req.file) {
        uploadGarmentImg(garmentImg).then((result) => {
            res.json(result.rows[0]).catch((err) => {
                console.log("error in uploadGarmentImg index.js", err);
            });
        });
    }
});

app.get("*", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function () {
    console.log("I'm listening.");
});
