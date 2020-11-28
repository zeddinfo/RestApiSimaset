'use strict';

let response = require('./res');
let connection = require('./koneksi');

exports.index = (req, res) => {
    response.ok('Rest Api Is Running', res);
}

exports.asset = (req, res) => {
    connection.query('SELECT * FROM asset ORDER BY id DESC', (error, rows, fileds) => {
        if(error){
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
}
exports.detailAsset = (req, res) => {
    let id = req.params.id;
    connection.query('SELECT * FROM asset WHERE id = '+id+'', (error, rows, fileds) => {
        if(error){
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
}