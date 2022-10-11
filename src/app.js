const express = require("express")
const DB = require("./DbManager")
const app = express()

const Page = require('./Page')

var db = new DB('localhost', 'root', 'olacocacola');

app.set('view engine', 'pug')

app.get("/", (req, res) => {
    try {
        res.send("NEOTICKET")
    } catch (error) {
        res.status(500)
    }
})

function page(element) {
    app.get("/" + element.hash, (req, res) => {
        try {
            res.render('monitor', {
                nombre: element.nombre,
                role: element.role,
                auth: element.auth
            })
        } catch (error) {
            res.status(500)
        }
    })
}

db.connect()
db.getAllTickets((err, result) => {
    if(err) throw err
    result.forEach(element => {
        page(element)
    });
})


app.listen(4040 || process.env.PORT, () => {
    console.log("+ Servidor online")
})