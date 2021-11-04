const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")

const app = express();

app.use(express.json());

app.use(cors());

app.use(require ('./routes'));

mongoose
.connect(
  "mongodb+srv://exc0m:Salewa119@cluster0.esshs.mongodb.net/groupNewsProject?retryWrites=true&w=majority"
)
.then(() => {
  console.log("успешное подключение к MongoDB");
  app.listen(3400, () => {
    console.log("OK!");
  });
});
