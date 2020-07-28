const bcrypt = require("bcryptjs");
let { genSalt, hash, compare } = bcrypt;
const { promisify } = require("util");

// promisifying so you can use them in promises?!
genSalt = promisify(genSalt);
hash = promisify(hash);
compare = promisify(compare);

module.exports.hash = (plainTxtPw) =>
    genSalt().then((salt) => hash(plainTxtPw, salt)); // this does same as the long demo.
module.exports.compare = compare;
// .then((result) => {
//     console.log(result);
// })
// .catch((e) => console.log(e));
