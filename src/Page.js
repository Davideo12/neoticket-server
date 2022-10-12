class Page {
    constructor(app) {
        this.app = app
    }

    create(data) {
        var route = '/' + data.hash
        this.app.get(route, (req, res) => {
            try {
                var nombre = data.nombre
                var role = data.role
                var auth = ""

                if(data.auth == "TRUE") {
                    auth = "Autorizado"
                } else if (data.auth == "FALSE") {
                    auth = "NO Autorizado"
                }

                res.render('page', {
                    nombre,
                    role,
                    auth
                })
            } catch (error) {
                res.status(500)
            }
        })
    }
}

module.exports = Page
