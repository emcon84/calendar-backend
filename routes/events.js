
/**
 * 
    Rutas de usuario / auth
    host + /api/events
 * 
 */

const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { validarJWT } = require('../middlewares/validar-jwt')
const { Router } = require('express');
const router = Router()

router.use(validarJWT);

router.get('/', getEvents);
router.post('/', createEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

module.exports = router;