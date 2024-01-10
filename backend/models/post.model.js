const mongoose = require("mongoose");


// Schéma pour les utilisateurs
const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: false,
    },
    username: {
        type: String,
        required: true,
    },
    motDePasse: {
        type: String,
        required: true,
    },
    dateInscription: {
        type: Date,
        default: Date.now,
    },
});

// Schéma pour les produits
const produitSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: false,
    },
    nom: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    prix: {
        type: Number,
        required: true,
    },
    quantiteEnStock: {
        type: Number,
        default: 0,
    },
});

userSchema.pre('validate', async function (next) {
    if (!this.id) {
        try {
            const lastProduit = await this.constructor.findOne({}, {}, { sort: { id: -1 } });
            this.id = lastProduit ? lastProduit.id + 1 : 0;
            next();
        } catch (error) {
            next(error);
        }
    } else {
        next();
    }
});

produitSchema.pre('validate', async function (next) {
    if (!this.id) {
        try {
            const lastProduit = await this.constructor.findOne({}, {}, { sort: { id: -1 } });
            this.id = lastProduit ? lastProduit.id + 1 : 0;
            next();
        } catch (error) {
            next(error);
        }
    } else {
        next();
    }
});

// Modèles MongoDB basés sur les schémas
const User = mongoose.model("User", userSchema);
const Produit = mongoose.model("Produit", produitSchema);

module.exports = {
    User,
    Produit,
};
