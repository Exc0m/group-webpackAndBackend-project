const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(require ('/.routes'));
app.use(express.json());

mongoose
.connect(
  "mongodb+srv://Ali:Remark@cluster0.qfxel.mongodb.net/NewBase?retryWrites=true&w=majority"
)
.then(() => {
  console.log("успешное подключение к MongoDB");
  app.listen(3400, () => {
    console.log("OK!");
  });
});
