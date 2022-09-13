const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

// app.get("/", (req, res) => {
//   res.send("Express + TypeScript Server");
// });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://mongodb:27017/mongodb", { useNewUrlParser: true })
  .then(() => console.log("mongoDB Connected"))
  .catch((err) => console.log(err));

const Item = require("./models/Laptops");

app.get("/", (req, res) => {
  Item.find()
    .then((items) => res.send(items))
    .catch((err) => res.status(404).json({ msg: "No Item found" }));
});

app.post("/item/add", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity,
  });

  newItem
    .save()
    .then((item) => {
      res.send(item);
    })
    .catch((err) => console.log(err.message));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
