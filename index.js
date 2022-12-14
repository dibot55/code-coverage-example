console.log("Hola Mundo");

const { read } = require('fs');//para ocupar el __dirname
/****----------API de un Hola Mundo-----------****/

const http = require('http'); //Constante que llama al modulo de Node -require-
const host = '127.0.0.1'; //Donde se hostea (localhost)
const port = '3000'; //puerto

//crear un servidor http con request y response
const server = http.createServer( (req, res) => {
    res.statusCode = 200; //Estado de respuesta http
    res.setHeader('Content-Type','text/plain'); //se define que el contenido es texto plano en la cabecera 
    res.end("Hola mundo uwu"); //el contenido de la respuesta
});

//hostear el servidor y mostrar su ip y puerto en consola
server.listen(port, host, () => {
    console.log("Servidor Encendido en " + host + "/" + port);
});