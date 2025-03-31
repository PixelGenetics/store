import inventarioModel from '../models/inventarios.js';


class inventarioController{
    constructor(){

    }

    async create(req,res){
        try{
            const data = inventarioModel.create(req.body);
            res.status(201).json(data)
        }catch(e) {
            res.status(500).send(e);
        }
    }

    async update(req,res){
        try{
            res.status(201).json({status : 'ok'})
        }catch(e) {
            res.status(500).send(e);
        }
    }

    async delete(req,res){
        try{
            res.status(201).json({status : 'ok'})
        }catch(e) {
            res.status(500).send(e);
        }
    }

    async getAll(req,res){
        try{
            res.status(201).json({status : 'ok'})
        }catch(e) {
            res.status(500).send(e);
        }
    }
    async getOne(req,res){
        try{
            res.status(201).json({status : 'ok'})
        }catch(e) {
            res.status(500).send(e);
        }
    }
}

export default new inventarioController()