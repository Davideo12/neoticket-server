const DB = require("./DbManager")

const dbConfig = {
    host: 'db-mysql-nyc1-jdavideo-do-user-12644913-0.b.db.ondigitalocean.com',
    user: 'doadmin',
    password: 'AVNS_4JxICbu61YArzZoom1c',
    port: 25060,
    database: 'neoticket'
}


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
        .catch( err => console.error(err))
    }
}

module.exports = Page
