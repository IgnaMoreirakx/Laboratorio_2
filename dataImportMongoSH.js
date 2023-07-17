// Conectar con la base de datos
var db = connect("mongodb://localhost:27017/voluntariadodb");

// Coleccion emergencias
var emergencia = db.getCollection('emergencia');
emergencia.insertMany([
        {nombre: 'Terremoto', descrip: 'Terremoto de 8.5 grados en la escala de Richter', finicio: '2023-03-01', ffin: '2023-03-10', estado: {nombre: 'Activa'}},
        {nombre: 'Inundación', descrip: 'Inundación en Santiago', finicio: '2023-04-01', ffin: '2023-04-10', estado: {nombre: 'Activa'}},
        {nombre: 'Incendio', descrip: 'Incendio en Valparaíso', finicio: '2023-05-01', ffin: '2023-05-10' , estado: {nombre: 'Pendiente'}},
        {nombre: 'Erupción volcánica', descrip: 'Erupción volcánica en el sur de Chile', finicio: '2023-06-01', ffin: '2023-06-10', estado: {nombre: 'Pendiente'}},
        {nombre: 'Tsunami', descrip: 'Tsunami en la costa de Chile', finicio: '2023-07-01', ffin: '2023-07-10', estado: {nombre: 'Finalizada'}},
    ]);

// Coleccion habilidad
var habilidad = db.getCollection('habilidad');
habilidad.insertMany([
        {nombre: 'Cocina', codigo: 'COC', puntaje: 5},
        {nombre: 'Carpintería', codigo: 'CAR', puntaje: 4},
        {nombre: 'Electricidad', codigo: 'ELE', puntaje: 3},
    ]);


// Coleccion institucion
var institucion = db.getCollection('institucion');
institucion.insertMany([
        {nombre: 'Cruz Roja', descrip: 'Cruz Roja de Chile'},
        {nombre: 'Bomberos', descrip: 'Bomberos de Chile'},
        {nombre: 'Carabineros', descrip: 'Caribneros de Chile'},
        {nombre: 'PDI', descrip: 'PDI de Chile'},
        {nombre: 'Fuerzas Armadas', descrip: 'Fuerzas Armadas de Chile'},
    ]);

//Coleccion ranking 
var ranking = db.getCollection('ranking');
ranking.insertMany([
        {puntaje: 1, flg_invitado: 0, flg_participa: 0},
        {puntaje: 2, flg_invitado: 0, flg_participa: 0},
        {puntaje: 3, flg_invitado: 0, flg_participa: 0},
        {puntaje: 4, flg_invitado: 0, flg_participa: 0},
        {puntaje: 5, flg_invitado: 0, flg_participa: 0},
    ]);

//Coleccion tarea
var tarea =  db.getCollection('tarea');
tarea.insertMany([
        {nombre: 'Cocina', descrip: 'Cocinar para los damnificados', cant_vol_inscritos: 2, finicio: '2023-03-01', ffin: '2023-03-10'},
        {nombre: 'Carpintería', descrip: 'Reparar muebles', cant_vol_inscritos: 3, finicio: '2023-04-01', ffin: '2023-04-10'},
        {nombre: 'Electricidad', descrip: 'Reparar instalaciones eléctricas', cant_vol_inscritos: 4, finicio: '2023-05-01', ffin: '2023-05-10'},
        {nombre: 'Plomería', descrip: 'Reparar instalaciones de agua', cant_vol_inscritos: 5, finicio: '2023-06-01', ffin: '2023-06-10'},
        {nombre: 'Albañilería', descrip: 'Reparar instalaciones de albañilería', cant_vol_inscritos: 6, finicio: '2023-07-01', ffin: '2023-07-10'},
    ]);

// Coleccion voluntario
var voluntario = db.getCollection('voluntario');
voluntario.insertMany([
        {nombre: 'Armin van Buuren', contrasena: '123456', habilidades: [
            {_id: 1, nombre: 'Cocina', codigo: 'COC', puntaje: 100},
            {_id: 2,nombre: 'Carpinteria', codigo: 'CAR', puntaje: 100},
        ]},
        {nombre: 'Joris Voorn', contrasena: '123456', habilidades: [
            {_id: 1, nombre: 'Carpinteria', codigo: 'CAR', puntaje: 90},
            {_id: 2, nombre: 'Electricidad', codigo: 'ELE', puntaje: 80},
        ]},
        {nombre: 'Carl Cox', contrasena: '123456', habilidades: [
            {_id: 1, nombre: 'Electricidad', codigo: 'ELE', puntaje: 100},
            {_id: 2, nombre: 'Carpinteria', codigo: 'CAR', puntaje: 100},
        ]},
        {nombre: 'Oliver Heldens', contrasena: 'heldeep', habilidades: [
            {_id: 1, nombre: 'Carpinteria', codigo: 'COC', puntaje: 90},
            {_id: 2, nombre: 'Electricidad', codigo: 'ELE', puntaje: 80},
        ]},
    ]);

// Coleccion estado
var estado = db.getCollection('estado');
estado.insertMany([
        {nombre: 'Pendiente'},
        {nombre: 'En Curso'},
        {nombre: 'Finalizado'},
    ]);

print('Datos importados correctamente');