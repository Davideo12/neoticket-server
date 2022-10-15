const DB = require("./DbManager")

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DATABASE_NAME
}

class Page {
    constructor() {

    }

    create(req, res) {
        const db = new DB(dbConfig);
            
        const reqHash = req.params.hash

        db.connect()
        db.getAllTickets((err, result) => {
            if(err) throw err

            result.forEach(element => {
                if(element.hash == reqHash) {
                    var auth
                    if(element.auth == "TRUE") {
                        auth = "Autorizado"
                    } else {
                        auth = "No Autorizado"
                    }
                    res.render('page', {
                        nombre: element.nombre,
                        role: element.role,
                        auth: auth
                    })
                    res.end()
                }
            })
        })
    }
}

module.exports = Page
