import express from "express"
import "dotenv/config.js"

const app = express()
const port = process.env.PORT || 5001;


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

import ApiRoutes from "./routes/api.js"

app.use('/api', ApiRoutes)


app.listen(port, () => {
    console.log("i am online")
})
