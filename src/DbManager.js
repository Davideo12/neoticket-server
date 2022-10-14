const mysql = require("mysql")

class DB {
    constructor(dbConfig) {
        this.dbConfig = dbConfig
    }

    connect() {
        this.connection = mysql.createConnection(this.dbConfig)
        this.connection.connect((error) => {
            if(error) {
                console.log("! Error conenctando DB")
            } else {
                console.log("+ DB Conectada")
            }
        })
    }

    //  Guarda los datos de un ticket en la DB
    saveTicket(data) {

    }

    //  Retorna los datos de un solo ticket guardado, necesita el ID
    getTicket(id) {
        
    }

    //  Retorna los datos de todos los tickets en una tabla
    async getAllTickets(callback) {      
        this.connection.query("SELECT * FROM test", (err, result, fields) => {
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

    endConnection() {
        this.connection.end()
        console.log("+ DB Cerrada")
    }
}

module.exports = DB