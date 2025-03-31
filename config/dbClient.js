import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config(); // Carga las variables de entorno correctamente

class DBClient {
    constructor() {
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&replicaSet=atlas-vtalo1-shard-0&appName=tienda`;
        
        this.client = new MongoClient(queryString);
        this.db = null; // Inicialmente null
    }

    async conectarBD() {
        if (!this.db) {
            try {
                await this.client.connect();
                this.db = this.client.db("tienda");
                console.log("✅ Conectado a la base de datos");
            } catch (error) {
                console.error("❌ Error conectando a la base de datos:", error);
            }
        }
        return this.db;
    }
}

export default new DBClient();
