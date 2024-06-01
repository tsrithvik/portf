require('dotenv').config();

const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

contactEmail.verify((error) => {
  if (error) {
    console.log("Error verifying email:", error);
  } else {
    console.log("Email transporter ready");
  }
});

router.post("/feedback", (req, res) => {
  const { name, email, message } = req.body;

  const mail = {
    from: email,
    to: process.env.DESTINATION_EMAIL,
    subject: "Feedback Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log("Feedback email sent successfully");
      res.status(200).json({ message: "Feedback sent successfully" });
    }
  });
});

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
