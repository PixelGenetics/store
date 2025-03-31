import express from 'express';
const route = express.Router();
import inventarioController from '../controllers/inventario.js'
// import invetario from '../controllers/invetario';

route.post('/', inventarioController.create);
route.get('/', inventarioController.getAll);
route.get('/:id', inventarioController.getOne);
route.put('/:id', inventarioController.update);
route.delete('/:id', inventarioController.delete);

export default route;