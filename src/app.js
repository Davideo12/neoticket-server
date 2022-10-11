const express = require("express")
const DB = require("./DbManager")
const Page = require("./Page")
const app = express()

var page = new Page(app)
var db = new DB('localhost', 'root', 'olacocacola')

app.set('view engine', 'pug')

app.get("/", (req, res) => {
    try {
        res.send("NEOTICKET")
    } catch (error) {
        res.status(500)
    }
})


db.connect()
db.getAllTickets((err, result) => {
    if(err) throw err
    result.forEach(element => {
        page.create(element)
    });
})


app.listen(process.env.PORT || 4040, () => {
    console.log("+ Servidor online")
})