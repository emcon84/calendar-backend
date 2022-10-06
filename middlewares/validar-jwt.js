const { response } = require('express')
const jwt = require('jsonwebtoken')

const validarJWT = (req, res = response, next) => {

    //x-token en los headers
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no existe'
        })
    }

    try {

        const { uid, name } = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        );

        req.uid = uid;
        req.name = name;

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token inválido'
        })
    }

    next();
}


module.exports = {
    validarJWT
}