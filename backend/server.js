const express = require('express')
const path = require('path')
const dotenv = require('dotenv').config()
const colors = require('colors')
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/wines', require('./routes/wineRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/mail', require('./routes/mailRoutes'))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')))
} else {
    app.get('/', (req, res) => res.send('currently in development mode. please set to production.'))
}

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
