
class Page {
    constructor(app) {
        this.app = app
    }

    create(data) {
        var route = '/' + data.hash
        this.app.get(route, (req, res) => {
            try {
                res.render('monitor', {
                    nombre: data.nombre,
                    role: data.role,
                    auth: data.auth
                })
            } catch (error) {
                res.status(500)
            }
        })
    }
}

module.exports = Page