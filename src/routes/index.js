const router = require("express").Router();
const db = require("../models/index");

const initWebRouter = (app) => {
    router.get("/", (req, res) => {
        return res.send("Hello huy handsome :v")
    })

    // test render UI :v
    router.get("/huydz", (req, res) => {
        return res.render("home.ejs")
    })

    router.get("/testdb", async (req, res) => {
        try {
            let data = await db.User.findAll();
            return res.render("testDB.ejs", {
                data: JSON.stringify(data)
            });
        } catch (error) {
            console.log("Cant connect DB: ", error);
        }
    })

    app.use("/", router);
}

module.exports = initWebRouter;