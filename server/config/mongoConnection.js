const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect("mongodb://mongodb:27017/mongodb", { useNewUrlParser: true })
    .then(() => console.log("mongoDB Connected"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;