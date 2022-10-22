const router = require('express').Router()
const Page = require('./Page')

router.get("/", (req, res) => {
    try {
        res.render('index')
    } catch (error) {
        res.status(500)
        res.json(error)
    }
}) 

router.get("/:hash", (req, res) => {
    try {
        var page = new Page(req, res)
        page.create()
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