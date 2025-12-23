import express from 'express'
import cors from "cors";
import morgan from 'morgan';
const app = express()

app.use(express.json());
app.use(morgan('dev'))
// Habilitar CORS
app.use(cors());
app.set('PORT', 3000)

app.get('/',(req,res)=>{
    res.send('Hola mundo')
})
const usuarios =[
    {
        id:1,
        user:'Federico',
        password: 'Fede2121',
        accessType: 2
    },
    {
        id:2,
        user:'Andres',
        password: 'Andy25',
        accessType: 1
    },
]
app.get('/users',(req,res)=>{
    res.json(usuarios)
})


app.listen(app.get('PORT'))
console.log(`Escuchando en el puerto ${app.get('PORT')}`);
