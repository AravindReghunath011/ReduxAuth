import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js'
import cookieParser from 'cookie-parser'
const port = process.env.PORT || 5000
import userRoutes from './routes/userRoutes.js'
import { errorHandler, notFound } from './middleware/errormiddleware.js'
import cors from 'cors'
import bodyParser from 'body-parser'
connectDB()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/images',express.static('backend/public/images'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser())
app.use('/api/users',userRoutes)
// app.use('/api/admin',adminRoutes)

app.get('/',(req,res)=>console.log('server is ready'))

app.use(notFound)
app.use(errorHandler)

app.listen(port,()=>console.log(`server running on ${port}`))       