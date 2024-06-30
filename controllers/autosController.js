//importamos el objeto db
const db = require ('../db/db');

const getAllAutos = (req, res) => {
    const sql = 'SELECT * FROM autos';
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.json(results);
    });
};
const getAutoById = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM autos WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};
const deleteAuto = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM autos WHERE id = ?';
    db.query(sql, [id], (err, results) => {
        if(err) throw err;
        res.json({'message': 'auto borrado'});
    });
};

module.exports = {
    getAllAutos,
    getAutoById,
    deleteAuto
    
}