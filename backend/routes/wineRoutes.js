const express = require('express')
const router = express.Router()
const { getWines, addWine, editWine, deleteWine, getWine } = require('../controllers/wineController')

router.route('/').get(getWines).post(addWine)
router.route('/:id').get(getWine).put(editWine).delete(deleteWine)


module.exports = router