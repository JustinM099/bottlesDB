const express = require('express')
const router = express.Router()
const { getWines, addWine, editWine, deleteWine, getWine } = require('../controllers/wineController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getWines).post(protect, addWine)
router.route('/:id').get(protect, getWine).put(editWine).delete(protect, deleteWine)


module.exports = router