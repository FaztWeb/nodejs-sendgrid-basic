const dotenv = require("dotenv");
dotenv.config();
const sgMail = require("@sendgrid/mail");

const API_KEY = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(API_KEY);

const message = {
  to: "fazttech@gmail.com",
  // to: ["fazttech@gmail.com", "fazt@faztweb.com"],
  // from: "fazt@faztweb.com",
  from: {
    name: "Fazt Tech SendGrid Tutorial ",
    email: "fazt@faztweb.com",
  },
  subject: "Hello from sendgrid",
  text: "Hello, this is the content of the email",
  html: "<h1>Hello, this is the content in html</h1>",
};

sgMail
  .send(message)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
