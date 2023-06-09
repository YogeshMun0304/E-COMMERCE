import express from "express"
import colors from "colors"
import dotenv from 'dotenv'
import cors from "cors"
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from './routes/authRoute.js'
import categoryRoute from './routes/CategoryRoute.js'
import ProductRoute from './routes/ProductRoutes.js'
dotenv.config();
connectDB();
const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/v1/auth",authRoute)
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product",ProductRoute)
app.use(morgan('dev'))

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`running on ${PORT}`.bgCyan.white)


})