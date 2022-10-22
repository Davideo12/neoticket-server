const express = require("express")
const router = require("./router")
const app = express()

const PORT = process.env.PORT || 4040

app.set('view engine', 'ejs')

app.use(router)

app.listen(PORT, () => {
    console.log("+ Servidor online | Puerto: " + PORT)
})