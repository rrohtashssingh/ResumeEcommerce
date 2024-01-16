import express from "express";
import dotenv from "dotenv"
import morgan from "morgan";
import connectDb from "./config/db.js";
import authRouter from './routes/authRoute.js'
import cors from 'cors';

//configuring the env file 
dotenv.config();

//database config
connectDb();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json())
app.use(morgan(`dev`))

//routes
app.use('/api/v1/auth', authRouter)

//api handling here
app.get('/', (req, res) => {
    res.status(200).send(`<h1>Welcome to the E-commerce web app</h1>`)
})

//PORT
const PORT = process.env.PORT || 8080;

//listening on port
const port = app.listen(PORT, () => {
    console.log("Server running on port");
})