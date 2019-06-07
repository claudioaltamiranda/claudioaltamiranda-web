const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, {
        'content-type': 'application/json'
    });

    const pais = {
        nombre: 'Argentina',
        capital: 'Buenos Aires',
        idioma: 'Castellano',
        poblacion: 45000000,
        democracia: true
    }

    res.write(JSON.stringify(pais));

    res.end();

}).listen(8080);


console.log('Escuchando en el puerto 8080¡');