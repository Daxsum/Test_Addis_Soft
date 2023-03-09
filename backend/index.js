const express = require("express");
const mongoose = require("mongoose");
const songs = require("./routes/songs");
let cors = require("cors");
const app = express();
require("dotenv").config();

/////connecting to database
mongoose
  .connect(process.env.MONGO_URI) //mongoDB uri
  .then(() => {
    console.log("I'm connected to mongoDB ;-) ...");
  })
  .catch((err) => {
    console.log(":-( couldn't connect to mongoDb because of: ", err);
  });

app.use(cors());
app.use(express.json());

app.use("/files/images", express.static("files/images"));
/////routes

app.use("/api", songs);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`I'm listening at port ${port} ...`);
});
