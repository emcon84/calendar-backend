/**
 * 
    Rutas de usuario / auth
    host + /api/auth
 * 
 */

const { createUser, login, renewToken } = require('../controllers/auth')
const { validarJWT } = require('../middlewares/validar-jwt')
const { check } = require('express-validator')
const { validarCampos } = require('../middlewares/validar-campos')
const { Router } = require('express');
const router = Router()


router.post(
    '/new',
    [ // midlewares
        check('name', 'El nombre de usuario es obligatorio').not().isEmpty(),
        check('email', 'El email de usuario es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    createUser);


router.post(
    '/',
    [
        //midlewares
        check('email', 'El email de usuario es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    login);


router.get('/renew', validarJWT, renewToken);

module.exports = router;