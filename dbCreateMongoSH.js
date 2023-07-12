// Nombre de la base de datos
var nombreDb = 'voluntariadodb';

// Las colecciones presentes en la BD
var colecciones = ['emergencia', 'estado', 'habilidad', 'institucion', 'ranking', 'tarea', 'voluntario'];

// Conectar con la base de datos
var db = connect("mongodb://localhost:27017/" + nombreDb);

// Crear las colecciones
for (var i in colecciones) {
    db.createCollection(colecciones[i]);
}

print('Base de datos creada correctamente');
