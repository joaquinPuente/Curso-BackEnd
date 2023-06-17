import express from 'express'

const app = express();

app.get('/saludo', (req,res)=>{
    res.send(`<h1 style="color:blue">Hola a todos!</h1>`)
} )

app.listen(8080, ()=> console.log("servidor en puerto 8080"))