import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import { connectDB } from './config/db.js'
import cookieParser from 'cookie-parser'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import listingRouter from './routes/listing.route.js'

const app=express()

app.use(express.json())
app.use(cookieParser())

connectDB()
dotenv.config()

app.listen(process.env.PORT,()=>{
    console.log('Server is running on port 4000!')
})

app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)
app.use('/api/listing',listingRouter)

const __dirname=path.resolve()

app.use(express.static(path.join(__dirname,'/client/dist')))

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'client','dist','index.html'))
})

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500
    const message=err.message || 'Internal Server Error'
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})