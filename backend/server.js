const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/wines', require('./routes/wineRoutes'))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
