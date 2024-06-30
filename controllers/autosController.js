//importamos el objeto db
const db = require ('../db/db');

const getAllAutos = (req, res) => {
    const sql = 'SELECT * FROM autos';
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.json(results);
    });
};

module.exports = {
    getAllAutos,
    
}