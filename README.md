# Laboratorio 2 - Base de Datos Avanzada

## Integrantes
* Gaspar Catalán
* Paolo Demarchi
* Elena Guzmán
* Ignacio Moreira
* Fernando Pérez

## Descripción del proyecto
Para esta entrega se realiza una "versión" de la entrega anterior (1 y 2), pero ahora utilizando una base de datos no relacional (NoSQL), lo cual fue realizado con MongoDB y para el backend con se utilizó Java.

## Requisitos y herramientas de desarrollo
Para la correcta ejecucion del proyecto, se debe contar con las siguientes tecnologías además de los archivos que se encuentran dentro del repositorio:

* IntelliJ IDEA Community versión 2023.1.2.
* JDK Versión 17 (Se debe configurar tanto en el proyecto como en Maven)
* Docker 24.0.2 o superior
* Postman (sirve cualquier versión)
* Studio 3T 2023.5.0
* MongoDB Community Edition versión 6.0.8
  
Además de lo anterior, también se utilizó en el desarrollo del poyecto:

* GitKraken

## Instrucciones de intalación

*Tener en cuenta: este laboratorio se realizó con un contenedor de docker para la base de datos, pero de igual forma se puede descargar MongoDB*
1. Para instalar MongoDB tenemos dos opciones, descargar el instalador desde su pagina oficial o utilizar una imagen de docker.

Para la instalación de MongoDB, debe descargar el package [aquí](https://www.mongodb.com/try/download/community) e instalarlo en su computador/notebook. Luego seguir desde el punto 5.

En caso de optar por la segunda opcion, primero es necesario tener instalado Docker. 
Puedes encontrar instrucciones para instalar Docker en su [sitio web oficial](https://docs.docker.com/get-docker/)
Una vez que Docker esté instalado, sigue los siguientes pasos:
  1. Abrir Docker e iniciar sesión.

  2. Desde una cmd crear un contenedor con la imagen de mongo con el siguiente comando:

    `docker run --name mongodb -p 27017:27017 -d mongo:latest`
    Este comando servirá para la primera vez que se realiza, creará un contenedor llamando 'mongodb', que correrá la ultima imagen disponible de mongo, exponiendo el puerto 27017.

    En caso de ya tener el contenedor creado, se debe iniciar con este comando
    `docker start mongodb`
    y usar
    `docker stop mongodb`

    Una vez creado el contenedor "mongodb" podemos acceder a la consola interna del contenedor, ejecutando
    `docker exec -it mongodb bash`

    Finalmente, al escribir `mongosh` podemos acceder a la consola de mongo y ejecutar comandos en caso de que sea necesario.

2. Clonar el repositorio: Para clonarlo desde la cmd, se debe usar el siguiente comando en el directorio deseado:
```
git clone https://github.com/IgnaMoreirakx/Laboratorio_2.git
```

3. Instalar IntelliJ IDEA Community: Ingresar al sitio web oficial de IntelliJ IDEA y seleccionar el instalador dependiendo del Sistema Operativo en uso:
Para Windows, ingresar al siguiente [link](https://www.jetbrains.com/idea/download/#section=windows).
Para Linux, ingresar al siguiente [link](https://www.jetbrains.com/es-es/idea/download/#section=linux).
Para MacOs, ingresar al siguiente [link](https://www.jetbrains.com/es-es/idea/download/#section=mac).

4. Al abrir IntelliJ IDEA Community, abrir un nuevo proyecto y seleccionar la carpeta Backend. Debemos esperar a que el proyecto se configure y se instalen los plugins necesarios.

5. Configurar el JDK: Al abrir una clase IntelliJ nos solicitará configurar un JDK. Debemos asegurarnos de seleccionar JDK versión 17. Si no tenemos JDK 17, IntelliJ nos proporciona una opción para instalarlo automáticamente.
   
6. Ir al siguiente [link](https://www.postman.com/downloads/) e instalar la última versión de Postman.

*Ya con esto contamos con las tecnologías necesarias para el proyecto y su correcta instalación.*

## Instrucciones de uso

* Si se opta por utilizar docker, recordar tener activo el contenedor con la imagen de mongodb

* En caso de haber descargado MongoDB, debe abrir una terminal (cmd) y ejecuta el siguiente comando para iniciar el servicio de MongoDB, esto iniciará el servidor y estará listo para seguir con el paso 1.
 ```
mongod
```

1. En la carpeta del proyecto, abrir un cmd y ejecutar los siguientes comandos:
   `npm install mongodb` : Esto instalará el controlador de mongodb para poder ejecutar el archivo javascript que se encargará de crear la base de datos 'voluntariadodb'
   `node dbCreate.js` : Creará la base de datos 'voluntariadodb'
   `node dataImport.js` : Poblará la BD con datos de prueba.

2. Utilizando IntelliJ IDEA Community, asegurarse de que se detecte correctamente Spring Boot y Maven. Ejecutar la aplicación haciendo click en la opción "Run" dentro de IntelliJ IDEA. Con esto ya tenemos levantado el Backend.

3. Para probar las funcionalidades solicitadas en el enunciado, debe abrir postman y hacer las siguientes peticiones GET y POST:
    * Obtener Coleccion completa de voluntarios (GET): http://localhost:8080/voluntario
    * Obtener solo un voluntario (GET): http://localhost:8080/voluntario/{id}
    *(Siendo el parametro id el identificador del voluntario)*
    * Obtener promedio habilidades de un usuario(GET): http://localhost:8080/voluntario/{id}/averageSkills
    * Obtener habilidades de 1 usuario (GET): http://localhost:8080/voluntario/{id}/habilidades 
    *(Siendo el parametro id el identificador del voluntario)*

