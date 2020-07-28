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
    userRegistration,
    checkLogin,
} = require("./db.js");

const s3 = require("./s3.js");
const { s3Url } = require("./config.json");

/// REG AND LOG IN
const cookieSession = require("cookie-session");
const csurf = require("csurf");
const { hash, compare } = require("./bc.js");
/////

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

////// REQ AND LOG IN MIDDLEWARE //////////
app.use(
    cookieSession({
        secret: `Ì am always angry.`,
        maxAge: 1000 * 60 * 60 * 24 * 14,
    })
);

app.use(csurf());

app.use(function (req, res, next) {
    res.cookie("mytoken", req.csrfToken());
    next();
});
///////////////////////////////////////////

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

/////////////// REG AND LOG IN ROUTES ////////////////
app.get("/welcome", (req, res) => {
    if (req.session.userId) {
        // to check if the user is logged in, if yes, redirect to / route
        res.redirect("/");
    } else {
        // else block runs if user is not logged in
        res.sendFile(__dirname + "/index.html");
    }
});

app.post("/registration", function (req, res) {
    // console.log("LOG in app.post /welcome route");
    // console.log("LOG BODY in app.post /welcome route", req.body);
    // console.log("LOG PARAMS in app.post /welcome route", req.params);
    hash(req.body.password)
        .then((hashedPw) => {
            // console.log("hashed password: ", hashedPw);
            userRegistration(
                req.body.f_name,
                req.body.l_name,
                req.body.email,
                hashedPw
            )
                .then((result) => {
                    // console.log("result from userRegistration: ", result);
                    if (result.rows[0].id) {
                        // console.log("INSIDE IF in userRegistration");
                        req.session.userId = result.rows[0].id;
                        res.json({ success: true });
                    } else {
                        console.log(
                            "error in the POST /registration if-else: "
                        );
                        res.sendStatus(500);
                    }
                })
                .catch((err) => {
                    console.log(
                        "ERROR in the app.post /registration userRegistration",
                        err
                    );
                });
        })
        .catch((err) => {
            console.log("catch error in registration hashing", err);
            res.sendStatus(500);
        });
});

app.post("/login", (req, res) => {
    // login
    let userId;
    checkLogin(req.body.email)
        .then((result) => {
            userId = result.rows[0].id;
            // console.log("result from CHECK LOGIN: ", result);
            return compare(req.body.password, result.rows[0].password);

            // .catch((err) => {
            //     console.log("error in POST /login compare: ", err);
            //     res.sendStatus(500);
            // });
        })
        .then((match) => {
            if (match) {
                req.session.userId = userId;
                res.json({ success: true });
            } else {
                res.json({ success: false });
            }
        })
        .catch((err) => {
            console.log("error in POST /login: ", err);
            res.sendStatus(500);
        });
});

/////////////////////////////////////////////////////

// UPLOADING A PICTURE //
app.post("/upload", uploader.single("file"), s3.upload, (req, res) => {
    console.log("RES.BODY in index.js: ", res.body);
    console.log("req.body in index.js: ", req.body);
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
// app.get("/app", (req, res) => {
//     //res.redirect("/app");
//     res.sendFile(__dirname + "/index.html");
// });

// app.get("*", function (req, res) {
//     res.sendFile(__dirname + "/index.html");
// });

app.get("/logout", (req, res) => {
    req.session = null;
    res.redirect("/");
});

app.get("*", function (req, res) {
    if (!req.session.userId) {
        res.redirect("/welcome");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});

app.listen(8080, function () {
    console.log("I'm listening.");
});
