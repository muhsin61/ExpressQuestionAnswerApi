const express = require("express");
const dotenv = require("dotenv");

const routers = require("./routers/index");

//env variables
dotenv.config({
  path: "./env/config.env",
});

const app = express();
const PORT = process.env.PORT;

app.use("/api", routers); //middleware

//npm run dev için "dev": nodemon.
//env içine istenilen dosyalara ulaşmak için.

app.listen(PORT, () => {
  console.log(`App started on ${PORT}:${process.env.NODE_ENV}`);
});
