import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

export const connectDB = async () => {
    await mongoose
        .connect(process.env.MONGODB)
        .then(() => {
            console.log('Connected to MongoDB!')
        })
        .catch((err) => {
            console.log(err)
        })
}