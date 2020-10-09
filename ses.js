// WILL NEED THIS FOR EMAILS / FORGOT YOUR PASSWORD?

// const aws = require("aws-sdk");

// let secrets;
// if (process.env.NODE_ENV == "production") {
//     secrets = process.env;
// } else {
//     secrets = require("./secrets");
// }

// const ses = new aws.SES({
//     accessKeyId: secrets.AWS_ID,
//     secretAccessKey: secrets.AWS_SECRET,
//     region: "eu-west-1",
// });

// exports.sendEmail = function (to, subject, message) {
//     return ses
//         .sendEmail({
//             Source: "Social Network Email <roomy.arrow@spicedling.email>",
//             Destination: {
//                 ToAddresses: [to],
//             },
//             Message: {
//                 Body: {
//                     Text: {
//                         Data: message,
//                     },
//                 },
//                 Subject: {
//                     Data: subject,
//                 },
//             },
//         })
//         .promise()
//         .then(() => console.log("it worked"))
//         .catch((err) => console.log(err));
// };
