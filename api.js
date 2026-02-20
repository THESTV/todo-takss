var mongoose = require("mongoose");
var express = require("express");
var router = express.Router();

let envitonment = null;

if (!process.env.ON_DEPLOY) {
    console.log("Cargando variables de entorno desde archivo .env");
    const env = require("node-env-file");
    env(__dirname + "/.env");
}

environment = {
    DBMONGOUSER: process.env.DBMONGOUSER,
    DBMONGOPASS: process.env.DBMONGOPASS,
    DBMONGOSERV: process.env.DBMONGOSERV,
    DBMONGO: process.env.DBMONGO,
};

var query = "mongodb+srv://" + environment.DBMONGOUSER + ":" + environment.DBMONGOPASS + "@" + environment.DBMONGOSERV + "/" + environment.DBMONGO + "?retryWrites=true&w=majority";

const db = (query)

mongoose.Promise = global.Promise;

mongoose.connect(db).then(() => {
    console.log("Conectado a la base de datos");
}).catch((err) => {
    console.log("Error al conectar a la base de datos: " + err);
});

module.exports = router;