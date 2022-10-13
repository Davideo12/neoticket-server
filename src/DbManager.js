const mysql = require("mysql")

class DB {
    constructor(host, username, password, port, dbName) {
        this.host = host
        this.username = username
        this.password = password
        this.port = port
        this.database = dbName
        this.sqlInstance = undefined
    }

    connect() {
        this.sqlInstance = mysql.createConnection({
            host: this.host,
            user: this.username,
            password: this.password,
            database: this.database,
            port: this.port
        })
        this.sqlInstance.connect((error) => {
            if(error) {
                console.log("! Error conenctando DB")
            } else {
                console.log("+ DB Conectada")
            }
        })
    }

    //  Guarda los datos de un ticket en la DB
    saveTicket(data) {
        this.sqlInstance.query("INSERT ")
    }

    //  Retorna los datos de un solo ticket guardado, necesita el ID
    getTicket(id) {
        
    }

    //  Retorna los datos de todos los tickets en una tabla
    async getAllTickets(callback) {      
        this.sqlInstance.query("SELECT * FROM test", (err, result, fields) => {
            if(err) callback(err, null)
            callback(null, result)
        })  
    }

    //  Elimina un solo ticket, necesita el ID
    deleteTicket(id) {

    }

    //  Edita un solo ticket, necesita el ID
    editTicket(id) {
        
    }
}

module.exports = DB