const express = require("express")
const cors = require("cors")
const DB = require("./DbManager")
const Page = require("./Page")
const app = express()

//var page = new Page(app)
//var db = new DB('db-mysql-nyc1-jdavideo-do-user-12644913-0.b.db.ondigitalocean.com', 'doadmin', 'AVNS_4JxICbu61YArzZoom1c', 25060, 'neoticket');
//var db = new DB('localhost', 'root', 'olacocacola', 3306, 'neoticket');

const PORT = process.env.PORT || 4040

const corsOptions = {
    origin: "http://187.224.64.165"
}

app.use(cors(corsOptions))

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    try {
        res.send("NEOTICKET")
    } catch (error) {
        res.status(500)
    }
})


/* db.connect()
db.getAllTickets((err, result) => {
    if(err) throw err
    result.forEach(element => {
        console.log("Hash: ", element.hash)
        page.create(element)
    });
}) */


app.listen(PORT, () => {
    console.log("+ Servidor online")
})