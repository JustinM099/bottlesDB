
//desc: get all wines
//route: GET api/wines
//access: private
const getWines = (req, res) => {
    res.status(200).json({message: 'Get wines'})
}

//desc: add wine
//route: POST api/wines
//access: private
const addWine = (req, res) => {
    console.log(req.body)
    res.status(200).json({message: 'Add wine'})
}

//desc: get one wine
//route: GET api/wines/:id
//access: private
const getWine = (req, res) => {
    res.status(200).json({message: `Get wine ${req.params.id}`})
}

//desc: edit wine
//route: PUT api/wines/:id
//access: private
const editWine = (req, res) => {
    res.status(200).json({message: `Update wine ${req.params.id}`})
}

//desc: delete wine
//route: DELETE api/wines/:id
//access: private
const deleteWine = (req, res) => {
    res.status(200).json({message: `Delete wine ${req.params.id}`})
}

module.exports = {
    getWines,
    addWine,
    getWine,
    editWine,
    deleteWine
}