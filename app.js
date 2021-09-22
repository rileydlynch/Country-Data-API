const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const getcountry = require('./country-middleware')
app.use('/getcountry', getcountry)

const port = 3010;

app.listen(port, (err) => {
    if (err) throw err
    console.log(`Server running in port ${port}`)
})
