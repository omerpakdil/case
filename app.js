import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db.js';
import countryRoute from './routes/countryRoute.js';
import salesrepRoute from './routes/salesrepRoute.js';


// load env variables
dotenv.config();

// connect to database
connectDB();

const app = express();
const port = process.env.PORT;

// middleware
app.use(express.json());

// routes

app.use('/countries', countryRoute);
app.use('/salesrep', salesrepRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
    }
);