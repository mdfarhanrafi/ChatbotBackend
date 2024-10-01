import express from "express"
import "dotenv/config.js"
import cors from "cors"
const app = express()
const port = process.env.PORT || 5001;


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Replace with your domain
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
// Rest of your code
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
app.use(cors({
    origin: '*'
}));

import ApiRoutes from "./routes/api.js"

app.use('/api', ApiRoutes)

app.listen(port, () => {
    console.log("i am online")
})
