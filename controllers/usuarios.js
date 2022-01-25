const { response, request } = require('express');


const usuariosGET = (req = request, res = response) => {

    const { q , nombre , apikey} = req.query;
    res.json({
        msg: 'get API - controlador',
        query
    });
}

const usuarioPOST = (req, res = response) => {
    const body = req.body;
    res.json({
        msg: 'post API',
        body
    });
}

const usuariosDELETE = (req, res = response) => {
    res.json({
        msg: 'delete API'
    });
}

module.exports = {
    usuariosGET,
    usuarioPOST,
    usuariosDELETE
}