const express = require('express');
const app = express();
const port = 4000;
const fs = require("fs");
const cors = require('cors');
const path = require("path");

app.use(cors());


app.get('/', (req, res) => {
    res.send("Server is ready");
})

app.get("/Scanner/Front/Data/dashboard.html", (req, res) => {
    fs.readFile(path.join(__dirname, "data.json"), "utf-8", (err, jsonData) => {
      if (err) {
        return res.status(500).json({ error: "Failed to load data" });
      }
      res.json(JSON.parse(jsonData));
    });
  });

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}/`);
})