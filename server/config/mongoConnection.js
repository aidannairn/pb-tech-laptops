const mongoose = require('mongoose')

const connectDB = async () => {
  const conn = await mongoose.connect('mongodb://mongodb:27017/mongodb')

  console.log(`MongoDB Connected: ${conn.connection.host}`)
}

module.exports = connectDB