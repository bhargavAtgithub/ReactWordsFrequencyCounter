const wordCounter = require("./helpers/wordCounter");
// A node back-end

const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

// Creating express server.
const app = express();

// using bady-parser as a middleware to extract body data from the request.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const port = process.env.PORT || 3001;

// Creating an end point that listens to get request from client.
app.get("/ttt/data", (req, res) => {
  return axios
    .get("http://terriblytinytales.com/test.txt")
    .then((response) => {
      console.log(response.data);
      var sortedFrequencyData = wordCounter.getWordsFrequency(response.data);
      res.status(200).send(sortedFrequencyData);
    })
    .catch((err) => console.log("error fetching data!"));
});

app.listen(port, () => {
  console.log("Server Up and running.");
});
