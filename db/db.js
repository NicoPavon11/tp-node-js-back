const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'mysql-grupo11.alwaysdata.net',
    user: 'gruppo11',
    password: 'Nsnada_22',
    database: 'db_autos'
});

connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos', err);
        return;
    }
    console.log('Conectado a la base de datos');
});

module.exports =connection;
 
