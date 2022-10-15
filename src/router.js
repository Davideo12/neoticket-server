const router = require('express').Router()
const Page = require('./Page')

router.get("/", (req, res) => {
    try {
        res.send("<h1> NEOTICKET </h1>")
    } catch (error) {
        res.status(500)
        res.json(error)
    }
}) 

router.get("/:hash", (req, res) => {
    try {
        var page = new Page()
        page.create(req, res)
    } catch (error) {
        res.status(500)
    }
})

router.post("/edit", (req, res) => {
    try {
        var hash = req.hash
        
    } catch (error) {
        res.status
    }
})

module.exports = router