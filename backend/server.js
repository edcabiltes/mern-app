require(`dotenv`).config()

const express = require(`express`)

// express app
const app = express()

// middleware
app.use((req, res, next) => {
    console.log(req.method, req.path)
    next()
})

// routes
app.get(`/`, (req, res) => {
    res.json({mssg: `Welcome to the app`})
})


app.listen(process.env.PORT, () => {
    console.log(`listening on port`, process.env.PORT)
})