// Para trabajar con MongoDB
const { MongoClient } = require('mongodb');
var ObjectID = require('mongodb').ObjectId;
const url = 'mongodb://localhost:27017';

// Nombre de la base de datos
const nombreDb = 'voluntariadodb';

async function importarDatos(){
    const conexion = await MongoClient.connect(url);
    const db = conexion.db(nombreDb);


    var penid = new ObjectID();
    var encid = new ObjectID();
    var finid = new ObjectID();

    // Coleccion estado
    const estado = db.collection('estado');
    await estado.insertMany([
        {_id: penid, nombre: 'Pendiente'},
        {_id: encid, nombre: 'En Curso'},
        {_id: finid, nombre: 'Finalizado'},
    ]);

    var terid = new ObjectID();
    var inuid = new ObjectID();
    var incid = new ObjectID();
    var eruid = new ObjectID();
    var tsuid = new ObjectID();

    // Coleccion emergencias
    const emergencia = db.collection('emergencia');
    await emergencia.insertMany([
        // falta ver la foranea id_institucion
        {_id: terid, nombre: 'Terremoto', descrip: 'Terremoto de 8.5 grados en la escala de Richter', finicio: '2023-03-01', ffin: '2023-03-10', estado: {_id: encid, nombre: 'En Curso'}},
        {_id: inuid, nombre: 'Inundación', descrip: 'Inundación en Santiago', finicio: '2023-04-01', ffin: '2023-04-10', estado: {_id: encid, nombre: 'En Curso'}},
        {_id: incid, nombre: 'Incendio', descrip: 'Incendio en Valparaíso', finicio: '2023-05-01', ffin: '2023-05-10' , estado: {_id: penid, nombre: 'Pendiente'}},
        {_id: eruid, nombre: 'Erupción volcánica', descrip: 'Erupción volcánica en el sur de Chile', finicio: '2023-06-01', ffin: '2023-06-10', estado: {_id: penid, nombre: 'Pendiente'}},
        {_id: tsuid, nombre: 'Tsunami', descrip: 'Tsunami en la costa de Chile', finicio: '2023-07-01', ffin: '2023-07-10', estado: {_id: finid, nombre: 'Finalizado'}},
    ]);

    var cocid = new ObjectID();
    var carid = new ObjectID();
    var eleid = new ObjectID();

    // Coleccion habilidad
    const habilidad = db.collection('habilidad');
    await habilidad.insertMany([
        {_id: cocid, nombre: 'Cocina', codigo: 'COC', puntaje: 5},
        {_id: carid, nombre: 'Carpintería', codigo: 'CAR', puntaje: 4},
        {_id: eleid, nombre: 'Electricidad', codigo: 'ELE', puntaje: 3},
    ]);
    // Coleccion institucion
    const institucion = db.collection('institucion');
    await institucion.insertMany([
        {nombre: 'Cruz Roja', descrip: 'Cruz Roja de Chile', emergencias:[
            {_id: terid, nombre : 'Terremoto'},
        ]},
        {nombre: 'Bomberos', descrip: 'Bomberos de Chile', emergencias:[
            {_id: inuid, nombre : 'Inundación'},
        ]},
        {nombre: 'Carabineros', descrip: 'Caribneros de Chile', emergencias:[
            {_id: incid, nombre : 'Incendio'},
        ]},
        {nombre: 'PDI', descrip: 'PDI de Chile', emergencias:[
            {_id: eruid, nombre : 'Erupción volcánica'},
        ]},
        {nombre: 'Fuerzas Armadas', descrip: 'Fuerzas Armadas de Chile', emergencias:[
            {_id: tsuid, nombre : 'Tsunami'},
        ]},
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
        {nombre: 'Cocina', descrip: 'Cocinar para los damnificados', cant_vol_inscritos: 2, finicio: '2023-03-01', ffin: '2023-03-10', estado: {_id: encid, nombre: 'En Curso'}},
        {nombre: 'Carpintería', descrip: 'Reparar muebles', cant_vol_inscritos: 3, finicio: '2023-04-01', ffin: '2023-04-10', estado: {_id: encid, nombre: 'En Curso'}},
        {nombre: 'Electricidad', descrip: 'Reparar instalaciones eléctricas', cant_vol_inscritos: 4, finicio: '2023-05-01', ffin: '2023-05-10', estado: {_id: penid, nombre: 'Pendiente'}},
        {nombre: 'Plomería', descrip: 'Reparar instalaciones de agua', cant_vol_inscritos: 5, finicio: '2023-06-01', ffin: '2023-06-10', estado: {_id: penid, nombre: 'Pendiente'}},
        {nombre: 'Albañilería', descrip: 'Reparar instalaciones de albañilería', cant_vol_inscritos: 6, finicio: '2023-07-01', ffin: '2023-07-10', estado: {_id: finid, nombre: 'Finalizado'}},
    ]);
    // Coleccion voluntario
    const voluntario = db.collection('voluntario');
    await voluntario.insertMany([
        {nombre: 'Armin van Buuren', contrasena: '123456', habilidades: [
            {_id: cocid, nombre: 'Cocina', codigo: 'COC', puntaje: 5},
            {_id: carid, nombre: 'Carpintería', codigo: 'CAR', puntaje: 4},
        ]},
        {nombre: 'Joris Voorn', contrasena: '123456', habilidades: [
            {_id: eleid, nombre: 'Electricidad', codigo: 'ELE', puntaje: 3},
            {_id: carid, nombre: 'Carpintería', codigo: 'CAR', puntaje: 4},
        ]},
        {nombre: 'Carl Cox', contrasena: '123456', habilidades: [
            {_id: cocid, nombre: 'Cocina', codigo: 'COC', puntaje: 5},
            {_id: eleid, nombre: 'Electricidad', codigo: 'ELE', puntaje: 3},
        ]},
        {nombre: 'Oliver Heldens', contrasena: 'heldeep', habilidades: [
            {_id: carid, nombre: 'Carpintería', codigo: 'CAR', puntaje: 4},
            {_id: eleid, nombre: 'Electricidad', codigo: 'ELE', puntaje: 3},
        ]},
    ]);
    
    console.log('Datos importados correctamente');
    conexion.close();
}

importarDatos();