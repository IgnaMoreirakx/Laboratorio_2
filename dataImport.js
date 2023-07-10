// Para trabajar con MongoDB
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';

// Nombre de la base de datos
const nombreDb = 'voluntariadodb';

async function importarDatos(){
    const conexion = await MongoClient.connect(url);
    const db = conexion.db(nombreDb);

    // Coleccion emergencias
    const emergencia = db.collection('emergencia');
    await emergencia.insertMany([
        // falta ver la foranea id_institucion
        {nombre: 'Terremoto', descrip: 'Terremoto de 8.5 grados en la escala de Richter', finicio: '2023-03-01', ffin: '2023-03-10', estado: {nombre: 'Activa'}},
        {nombre: 'Inundación', descrip: 'Inundación en Santiago', finicio: '2023-04-01', ffin: '2023-04-10', estado: {nombre: 'Activa'}},
        {nombre: 'Incendio', descrip: 'Incendio en Valparaíso', finicio: '2023-05-01', ffin: '2023-05-10' , estado: {nombre: 'Pendiente'}},
        {nombre: 'Erupción volcánica', descrip: 'Erupción volcánica en el sur de Chile', finicio: '2023-06-01', ffin: '2023-06-10', estado: {nombre: 'Pendiente'}},
        {nombre: 'Tsunami', descrip: 'Tsunami en la costa de Chile', finicio: '2023-07-01', ffin: '2023-07-10', estado: {nombre: 'Finalizada'}},
    ]);
    // Coleccion habilidad
    const habilidad = db.collection('habilidad');
    await habilidad.insertMany([
        {nombre: 'Cocina', codigo: 'COC', puntaje: 5},
        {nombre: 'Carpintería', codigo: 'CAR', puntaje: 4},
        {nombre: 'Electricidad', codigo: 'ELE', puntaje: 3},
    ]);
    // Coleccion institucion
    const institucion = db.collection('institucion');
    await institucion.insertMany([
        {nombre: 'Cruz Roja', descrip: 'Cruz Roja de Chile'},
        {nombre: 'Bomberos', descrip: 'Bomberos de Chile'},
        {nombre: 'Carabineros', descrip: 'Caribneros de Chile'},
        {nombre: 'PDI', descrip: 'PDI de Chile'},
        {nombre: 'Fuerzas Armadas', descrip: 'Fuerzas Armadas de Chile'},
    ]);
    // Coleccion ranking
    const ranking = db.collection('ranking');
    await ranking.insertMany([
        {puntaje: 1, flg_invitado: 0, flg_participa: 0},
        {puntaje: 2, flg_invitado: 0, flg_participa: 0},
        {puntaje: 3, flg_invitado: 0, flg_participa: 0},
        {puntaje: 4, flg_invitado: 0, flg_participa: 0},
        {puntaje: 5, flg_invitado: 0, flg_participa: 0},
    ]);
    // Coleccion tarea
    const tarea = db.collection('tarea');
    await tarea.insertMany([
        {nombre: 'Cocina', descrip: 'Cocinar para los damnificados', cant_vol_inscritos: 2, finicio: '2023-03-01', ffin: '2023-03-10'},
        {nombre: 'Carpintería', descrip: 'Reparar muebles', cant_vol_inscritos: 3, finicio: '2023-04-01', ffin: '2023-04-10'},
        {nombre: 'Electricidad', descrip: 'Reparar instalaciones eléctricas', cant_vol_inscritos: 4, finicio: '2023-05-01', ffin: '2023-05-10'},
        {nombre: 'Plomería', descrip: 'Reparar instalaciones de agua', cant_vol_inscritos: 5, finicio: '2023-06-01', ffin: '2023-06-10'},
        {nombre: 'Albañilería', descrip: 'Reparar instalaciones de albañilería', cant_vol_inscritos: 6, finicio: '2023-07-01', ffin: '2023-07-10'},
    ]);
    // Coleccion voluntario
    const voluntario = db.collection('voluntario');
    await voluntario.insertMany([
        {nombre: 'Armin van Buuren', contrasena: '123456', habilidades: [
            {nombre: 'DJ', codigo: 'DJM', puntaje: 100},
            {nombre: 'Productor', codigo: 'PRO', puntaje: 100},
        ]},
        {nombre: 'Joris Voorn', contrasena: '123456', habilidades: [
            {nombre: 'DJ', codigo: 'DJM', puntaje: 90},
            {nombre: 'Improvisacion', codigo: 'IMP', puntaje: 80},
        ]},
        {nombre: 'Carl Cox', contrasena: '123456', habilidades: [
            {nombre: 'DJ', codigo: 'DJM', puntaje: 100},
            {nombre: 'Productor', codigo: 'PRO', puntaje: 100},
        ]},
        {nombre: 'Oliver Heldens', contrasena: 'heldeep', habilidades: [
            {nombre: 'DJ', codigo: 'DJM', puntaje: 90},
            {nombre: 'Estilo', codigo: 'EST', puntaje: 80},
        ]},
    ]);
    // Coleccion estado
    const estado = db.collection('estado');
    await estado.insertMany([
        {nombre: 'Pendiente'},
        {nombre: 'En Curso'},
        {nombre: 'Finalizado'},
    ]);

    console.log('Datos importados correctamente');
    conexion.close();
}

importarDatos();