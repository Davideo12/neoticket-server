const DB = require("./DbManager")

const dbConfig = {
    host: 'db-mysql-nyc1-jdavideo-do-user-12644913-0.b.db.ondigitalocean.com',
    user: 'doadmin',
    password: 'AVNS_4JxICbu61YArzZoom1c',
    port: 25060,
    database: 'neoticket'
}

class Page {
    constructor() {

    }

    create(req, res) {
        try {
            const db = new DB(dbConfig);
            
            const reqHash = req.params.hash

            db.connect()
            db.getAllTickets((err, result) => {
                if(err) throw err

                result.forEach(element => {
                    if(element.hash == reqHash) {
                        res.json(element)
                        res.end()
                    }
                })
            })
        } catch (error) {
            res.status(404).send("<h1>Ticket no escontrado</h1>")
        }
    }
}

module.exports = Page
