const { response } = require('express');

const getEvents = (req, res = response) => {

    return res.status(200).json({
        ok: true,
        msg: 'getEvents'
    })
}

const createEvent = (req, res = response) => {

    return res.status(200).json({
        ok: true,
        msg: 'createEvents'
    })
}

const updateEvent = (req, res = response) => {

    return res.status(200).json({
        ok: true,
        msg: 'updateEvents'
    })
}
const deleteEvent = (req, res = response) => {

    return res.status(200).json({
        ok: true,
        msg: 'deleteEvents'
    })
}


module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}
