import express from 'express';
import 'dotenv/config';
import routeInventario from './routes/inventario.js'
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/inventario', routeInventario)
try{
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, ()=> console.log('Servidor activo en el puerto: ', + PORT))
}catch(e){
    console.log(e);
}