const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'mysql-grupo11.alwaysdata.net',
    user: 'grupo11',
    password: 'grupo_11',
    database: 'grupo11_db_autos'
});

connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos', err);
        return;
    }
    console.log('Conectado a la base de datos');
});

module.exports =connection;
 
