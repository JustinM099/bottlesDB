const User = require('../models/userModel')
const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()

router.post('/', (req, res) => {
    const output = `
    <h1>thank you for choosing bottlesDb</h1>
    <h3>your account details are below:</h3>
    <ul>
        <li>username: ${req.body.name}</li>
        <li>email: ${req.body.email}</li>
    </ul>
    <p>bottlesDb</p>
    `
//create reusable transporter object using the default SMTP transport
const main = async () => {

    let testAccount = await nodemailer.createTestAccount()

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, //change later, change port to 465
        auth: {
            user: testAccount.user,
            pass: testAccount.pass
        }
    })
    let info = await transporter.sendMail({
    from: '"bottlesDb" <bottlesdb@gmail.com>',
    to: req.body.email,
    subject: 'your new bottlesDb account',
    text: 'welcome to bottlesDb',
    html: output
    })
    
    res.status(200).json(info)

}

main().catch(console.error)


})

module.exports = router
