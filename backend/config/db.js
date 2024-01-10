const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.Mongo_URI);
        console.log("Mongo Connecté");
    } catch (err) {
        console.error('Erreur de connexion à la base de données :', err);
        process.exit(1);
    }
};

module.exports = connectDB;