import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

//Middlewares
app.use(cors());
app.use(express.json());


//Todo lo demas (solo pruebas por el momento)
app.get('/', (req, res) => {
    res.json({
        mensaje: "hola, esta es una prueba"
    });
});


app.get('/talleres', (req, res) => {
    const talleresPrueba = [
        { id: 1, nombre: "godot", tallerista: "jorge martinez" },
        { id: 2, nombre: "skibidi", tallerista: "filipito" },
        { id: 3, nombre: "toilet", tallerista: "buenas tardes" }
    ];
    res.json(talleresPrueba);
});


app.get('/pago', (req, res) => {
    res.json({
        mensaje: "aqui usted puede subir su pago y asi"
    });
});


app.listen(PORT, () => {
    console.log('Servidor corriendo en http://localhost:' + PORT);
});