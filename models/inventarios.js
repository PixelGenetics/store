import dbClient from "../config/dbClient.js";

class InventarioModel {
    async create(inventario) {
        const database = await dbClient.conectarBD(); // Esperar la conexión
        if (!database) {
            throw new Error("No se pudo conectar a la base de datos");
        }

        const colInventario = database.collection("Items");
        await colInventario.insertOne(inventario);
    }
}

export default new InventarioModel();
