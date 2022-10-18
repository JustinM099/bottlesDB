//TODO: 'text' is a placeholder req parameter. update with correct parameters once the model has been updated.

const asyncHandler = require('express-async-handler')

const Bottle = require('../models/bottleModel')
const User = require('../models/userModel')

//desc: get all wines
//route: GET api/wines
//access: private
const getWines = asyncHandler(async (req, res) => {

    const bottles = await Bottle.find({user: req.user.id})

    res.status(200).json(bottles)

})

//desc: add wine
//route: POST api/wines
//access: private
const addWine = asyncHandler(async (req, res) => {

    if (!req.body.producer) { 
        res.status(400)
        throw new Error('no producer field')
    }

    const bottle = await Bottle.create({
        producer: req.body.producer,
        vintage: req.body.vintage,
        wineName: req.body.wineName,
        variety: req.body.variety,
        region: req.body.region,
        quantity: req.body.quantity,
        notes: req.body.notes,
        location: req.body.location,
        user: req.user.id
    })
    res.status(200).json(bottle)
})

//desc: get one wine
//route: GET api/wines/:id
//access: private
const getWine = asyncHandler(async (req, res) => {

    const bottle = await Bottle.findById(req.params.id)

    if (!bottle) {
        res.status(400)
        throw new Error('no such bottle found')
    }

    res.status(200).json(bottle)
})

//desc: edit wine
//route: PUT api/wines/:id
//access: private
const editWine = asyncHandler(async (req, res) => {
    const bottle = await Bottle.findById(req.params.id)

    if (!bottle) {
        res.status(400)
        throw new Error('no such bottle found')
    }


    //check for user
    // if (!req.user) {
    //     res.status(401)
    //     throw new Error('no user')
    // }

    //confirm req comes from bottle creator
    // if (bottle.user.toString() !== req.user.id) {
    //     res.status(401)
    //     throw new Error('unauthorized user')
    // }


    const updatedBottle = await Bottle.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    console.log('UPDATED BOTTLE: ', updatedBottle)

    res.status(200).json(updatedBottle)
})

//desc: delete wine
//route: DELETE api/wines/:id
//access: private
const deleteWine = asyncHandler(async (req, res) => {

    const bottle = await Bottle.findById(req.params.id)

    if (!bottle) {
        res.status(400)
        throw new Error('no such bottle found')
    }


    //check for user
    if (!req.user) {
        res.status(401)
        throw new Error('no user')
    }

    //confirm req comes from bottle creator
    if (bottle.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('unauthorized user')
    }


    const deletedBottle = await Bottle.deleteOne(bottle)
    
    res.status(200).json(deletedBottle)
})

module.exports = {
    getWines,
    addWine,
    getWine,
    editWine,
    deleteWine
}