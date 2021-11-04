const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(require ('/.routes'));
app.use(express.json());

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
