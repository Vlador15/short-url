const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const cors = require("cors");

const app = express();
const PORT = config.get("serverPort");

app.use(cors());
app.use(express.json());

const linkRouter = require("./routes/redirect.routes");

app.use("/", linkRouter);

const start = async () => {
  try {
    await mongoose.connect(config.get("dbUrl"), {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    app.listen(PORT, () => {
      console.log("Server started");
    });
  } catch (e) {
    console.log(e);
  }
};

start();
