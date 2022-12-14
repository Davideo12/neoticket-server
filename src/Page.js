const DB = require("./DbManager")

require('dotenv').config()

var dbConfig = new Object()
dbConfig.host = process.env.DB_HOST
dbConfig.user = process.env.DB_USER
dbConfig.password = process.env.DB_PASSWORD
dbConfig.port = process.env.DB_PORT
dbConfig.database = process.env.DATABASE


class Page {

    constructor(req, res) {
        this.req = req
        this.res = res
        this.hash = this.req.params.hash
    }

    getData() {
        return new Promise((resolve, reject) => {
            const db = new DB(dbConfig)
            db.getTicket(this.hash, (err, data) => {
                if(err) reject(err)
                resolve(data[0])
                db.close()
            })
        })
    }

    renderPage(data) {
        this.res.render('page', {
            nombre: data.nombre,
            role: data.role,
            auth: Number(data.auth) ? "Autorizado" : "No-Autorizado"
        })
    }

    create() {
        this.getData()
        .then( data => {
            this.renderPage(data)
        })
        .catch( err => {
            this.res.status(404).render('notfound')
        })
    }
}

module.exports = Page
