
class Page {
    constructor(app) {
        this.app = app
    }

    create(data) {
        this.app('/' + data.hash, (req, res) => {
            res.render('page', {
                role: data.role,
                nombre: data.nombre,
                auth: data.auth
            })
        })
    }
}

module.exports = Page