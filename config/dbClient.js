import { MongoClient } from "mongodb"

class dbClient {
    constructor(){
        const queryString = `mongodb+srv://${process.env.USER_DB}:${ProcessingInstruction.env.USER_PASS}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=Tienda`;
        this.client = new MongoClient(queryString)
        this.conectarBD();
    }

    async conectarBD(){
        try{
            await this.client.connect();
            this.db = this.client.db;
            console.log("Conectado al servidor de bd")
        
        }catch(e){
            console.log(e);
        }
    } 
}

export default new dbClient