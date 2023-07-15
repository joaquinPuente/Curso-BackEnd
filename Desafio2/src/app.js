import express from "express";
import usersRouter from "./routes/userRoutes.js"
import petsRouter from "./routes/petsRouter.js"

const app = express();
app.use(express.json())
app.use(express.static('./src/public'))

app.use('/api/users', usersRouter)
app.use('/api/pets', petsRouter)
app.use('/health', (req,res)=> res.send('OK'))

app.listen(8080)