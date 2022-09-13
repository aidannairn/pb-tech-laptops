const express = require('express');
const cors = require('cors')
require('dotenv').config()
const { graphqlHTTP } = require('express-graphql');
const connectDB = require('./config/atlasDb');
const schema = require('./schema/laptopSchema')

const app = express();
const port = process.env.PORT;

connectDB()

app.use(cors())
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'development'
}))

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
})