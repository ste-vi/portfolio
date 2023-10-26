import nodemailer from "nodemailer";
import { GOOGLE_EMAIL_FROM, GOOGLE_EMAIL_PASSWORD } from "$env/static/private";

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: GOOGLE_EMAIL_FROM,
    pass: GOOGLE_EMAIL_PASSWORD,
  },
});

transporter.verify(function () {
});

export default transporter;