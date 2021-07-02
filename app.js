const express = require("express");
const connectDB = require("./db");
const app = express();
const cors = require("cors");
require("dotenv").config();
var corsOptions = {
  origin: [
    "https://goofy-hawking-cd4051.netlify.app","https://fervent-agnesi-05be8e.netlify.app/"
    "http://localhost:3000",
  ],
};
app.use(cors(corsOptions));
app.use(express.json({ extended: false }));

connectDB();

var ur = require("./routes/user");

app.use("/", ur);

app.listen(process.env.PORT, () => {
  console.log("running on port:" + process.env.PORT);
});
