const mysql = require("mysql")

class DB {
    constructor(dbConfig) {
        this.dbConfig = dbConfig
        this.connect()
    }

    connect() {
        this.connection = mysql.createConnection(this.dbConfig)
        this.connection.connect((error) => {
            if(error) {
                console.log("! Error conenctando DB")
            }
        })
    }

    getTicket(hash, callback) {      
        this.connection.query("SELECT * FROM test WHERE hash = ?", [hash], (err, result, fields) => {
            if(err) callback(err, null)
            callback(null, result)
        })  
    }

    editTicket(hash, value, callback) {
        this.connection.query("UPDATE test SET auth = ? WHERE hash = ?", [value, hash], (err, result, fields) => {
            if(err) callback(err, null)
            callback(null, result)
        })  
    }

    close() {
        this.connection.end()
    }
}

module.exports = DB