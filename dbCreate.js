// Para trabajar con MongoDB
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';

// Nombre de la base de datos
const nombreDb = 'voluntariadodb';

// Las colecciones presentes en la BD
const colecciones = ['emergencia', 'estado', 'habilidad', 'institucion', 'ranking', 'tarea', 'voluntario'];

// Función para crear la base de datos junto a las colecciones necesarias
async function crearBd() {
    // Conectar con el servidor
    const conexion = await MongoClient.connect(url);
    const db = conexion.db(nombreDb);
    try{
        for(const coleccion of colecciones){
            await db.createCollection(coleccion);
        }
        console.log('Base de datos creada correctamente');
    }catch(error){
        console.log('Error al crear la base de datos: ', error);
    }
    conexion.close();
}


// Crear base de datos
crearBd();