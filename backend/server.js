const express = require("express");
const connectDB  = require("./config/db");

const dotenv = require("dotenv");
dotenv.config(); // Charge les variables d'environnement à partir du fichier .env

const port = 5000;

// Connection à la DB 
connectDB();



const app = express();
// midlleware qui sert a traiter les donneés de la Request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/get", require("./routes/post.routes"));


app.listen(port, () => console.log("Le serveur est lancé au port " + port));
