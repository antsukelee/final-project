const express = require("express");
const app = express();

app.use(require("./build.js"));
app.use(express.static("public"));

app.listen(8081, () => console.log(`Ready to compile and serve bundle.js`));
