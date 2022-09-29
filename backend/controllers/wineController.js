const asyncHandler = require('express-async-handler')

//desc: get all wines
//route: GET api/wines
//access: private
const getWines = asyncHandler(async (req, res) => {

        res.status(200).json({ message: 'Get wines' })
        
})

//desc: add wine
//route: POST api/wines
//access: private
const addWine =  asyncHandler(async (req, res) => {

    if (!req.body.text) { 
        res.status(400)
        throw new Error('no text field')
    }

    console.log(req.body)
    res.status(200).json({message: 'Add wine'})
})

//desc: get one wine
//route: GET api/wines/:id
//access: private
const getWine = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Get wine ${req.params.id}`})
})

//desc: edit wine
//route: PUT api/wines/:id
//access: private
const editWine = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update wine ${req.params.id}`})
})

//desc: delete wine
//route: DELETE api/wines/:id
//access: private
const deleteWine = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete wine ${req.params.id}`})
})

module.exports = {
    getWines,
    addWine,
    getWine,
    editWine,
    deleteWine
}