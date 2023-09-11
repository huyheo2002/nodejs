const express = require('express')
const cors = require("cors")
const connect = require("./config/connectDB");
const initWebRouter = require("./routes/index");
const configViewEngine = require("./config/viewEngine");

const app = express();

app.use(cors({origin: true}))
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

// app.use("/", (req, res) => {
//     res.send("app running :v")
// })
configViewEngine(app);
initWebRouter(app);

connect()

app.listen(8080, () => {
    console.log("backend nodejs is running on the port 8080 :3")
})

