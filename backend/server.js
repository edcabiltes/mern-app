require(`dotenv`).config()

const express = require(`express`)
const mongoose = require(`mongoose`)
const workoutRoutes = require(`./routes/workouts`)

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.method, req.path)
    next()
})

// routes
app.use(`/api/workouts`, workoutRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for request
        app.listen(process.env.PORT, () => {
            console.log(`connected to database & listening on port`, process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err)
    })

