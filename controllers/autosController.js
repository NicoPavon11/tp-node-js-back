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
const createAuto = (req, res) => {
    const sql = 'INSERT INTO autos ( foto, nombre, descripcion, anio, kilometraje, precio) VALUES (?,?,?,?,?,?)';
    const {foto, nombre, descripcion, anio, kilometraje, precio} = req.body;
    db.query(sql, [foto, nombre, descripcion, anio, kilometraje, precio], (err, result) => {
        if(err) throw err;
        res.json({'message': 'Auto creado', 'auto.Id': result.insertID});
    });
};
const updateAuto = (req, res) => {
    const {foto, nombre, descripcion, anio, kilometraje, precio} = req.body;
    const { id } = req.params;
    const sql = 'UPDATE autos SET foto = ?, nombre = ?, descripcion = ?, anio = ?, kilometraje = ?, precio = ? WHERE id = ?';
    db.query(sql, [foto, nombre, descripcion, anio, kilometraje, precio, id], (err, result) => {
        if(err) throw err;
        res.json({'message': 'Auto modificado'});
    });
};

module.exports = {
    getAllAutos,
    getAutoById,
    deleteAuto,
    createAuto,
    updateAuto
}