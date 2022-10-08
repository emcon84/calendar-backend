
/**
 * 
    Rutas de usuario / auth
    host + /api/events
 * 
 */

const { Router } = require('express');
const { check } = require('express-validator')

const { validarCampos } = require('../middlewares/validar-campos')
const { isDate } = require('../helpers/isDate');
const { validarJWT } = require('../middlewares/validar-jwt')
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');

const router = Router()

router.use(validarJWT);

router.get(
   '/',
   getEvents
);
router.post(
   '/',
   [
      check('title', 'El tíitulo es obligatorio').not().isEmpty(),
      check('start', 'la fecha de inicio esobligatorio').custom(isDate),
      validarCampos
   ],
   createEvent
);
router.put(
   '/:id',
   [
      check('title', 'El tíitulo es obligatorio').not().isEmpty(),
      check('start', 'la fecha de inicio es obligatoria').custom(isDate),
      check('start', 'la fecha de finalización es obligatoria').custom(isDate),
      validarCampos
   ],
   updateEvent);
router.delete('/:id', deleteEvent);

module.exports = router;