import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import {connectDB} from './server/db/connectDB.js';
import {authroutes} from './server/routes/routes.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors())

app.use(express.json());
app.use("/api/auth", authroutes)

app.listen(PORT, () => {
    connectDB()
    console.log('server is up and running on port!', PORT );
})



