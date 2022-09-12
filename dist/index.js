import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
console.log(process.env.PORT);
const app = express();
const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});
