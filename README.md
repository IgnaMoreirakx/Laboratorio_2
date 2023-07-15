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

Para la instalación de MongoDB, debe descargar el package [aquí](https://www.mongodb.com/try/download/community) e instalarlo en su computador/notebook. Luego seguir desde el punto 5.

En caso contrario, debe tener instalado Docker. Puedes encontrar instrucciones para instalar Docker en su [sitio web oficial](https://docs.docker.com/get-docker/)
Una vez que Docker esté instalado, sigue los siguientes pasos para configurar y ejecutar la aplicación:

1. Clonar el repositorio: Para clonarlo desde la cmd, se debe usar el siguiente comando en el directorio deseado:
```
git clone https://github.com/IgnaMoreirakx/Laboratorio_2.git
```
2. Accede al directorio del proyecto: cd <NOMBRE_DEL_PROYECTO>

3. Levanta el contenedor de MongoDB utilizando Docker
```
docker run -d --name mongodb -p 27017:27017 mongo
```

4. Luego, para que comience a funcionar el contenedor de docker con la base de datos, colocar en la misma cmd
```
docker start mongodb
```
5. Instalar IntelliJ IDEA Community: Ingresar al sitio web oficial de IntelliJ IDEA y seleccionar el instalador dependiendo del Sistema Operativo en uso:
Para Windows, ingresar al siguiente [link](https://www.jetbrains.com/idea/download/#section=windows).
Para Linux, ingresar al siguiente [link](https://www.jetbrains.com/es-es/idea/download/#section=linux).
Para MacOs, ingresar al siguiente [link](https://www.jetbrains.com/es-es/idea/download/#section=mac).

6. Al abrir IntelliJ IDEA Community, abrir un nuevo proyecto y seleccionar la carpeta Backend. Debemos esperar a que el proyecto se configure y se instalen los plugins necesarios.

7. Configurar el JDK: Al abrir una clase IntelliJ nos solicitará configurar un JDK. Debemos asegurarnos de seleccionar JDK versión 17. Si no tenemos JDK 17, IntelliJ nos proporciona una opción para instalarlo automáticamente.
   
8. Ir al siguiente [link](https://www.postman.com/downloads/) e instalar la última versión de Postman.

*Ya con esto contamos con las tecnologías necesarias para el proyecto y su correcta instalación.*

## Instrucciones de uso

* Si está utilizando MongoDB con docker, debe abrir una cmd en la carpeta del proyecto y poner lo siguiente antes de empezar con el punto 1.
```
docker start mongodb
```

* En caso de haber descargado MongoDB, debe abrir una terminal (cmd) y ejecuta el siguiente comando para iniciar el servicio de MongoDB, esto iniciará el servidor y estará listo para seguir con el paso 1.
 ```
mongod
```
1. Utilizando IntelliJ IDEA Community, asegurarse de que se detecte correctamente Spring Boot y Maven. Ejecutar la aplicación haciendo click en la opción "Run" dentro de IntelliJ IDEA. Con esto ya tenemos levantado el Backend.

2. Para probar las funcionalidades solicitadas en el enunciado, debe abrir postman y hacer las siguientes peticiones GET y POST:
    * Obtener Coleccion completa de voluntarios (GET): http://localhost:8080/voluntario
    * Obtener solo un voluntario (GET): http://localhost:8080/voluntario/{id}
    * Obtener promedio habilidades de un usuario(GET): http://localhost:8080/voluntario/{id}/averageSkills
    * Obtener habilidades de 1 usuario (GET): http://localhost:8080/voluntario/habilidades/{id}

