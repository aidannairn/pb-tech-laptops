const express = require('express');
const cors = require('cors')
require('dotenv').config()
const { graphqlHTTP } = require('express-graphql');
const connectDB = require('./config/mongoConnection.js');
const schema = require('./schema/laptopSchema')
require("dotenv").config();

const app = express();
const port = process.env.PORT;

connectDB()

app.use(cors())
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'development'
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
