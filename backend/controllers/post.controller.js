const {User,Produit} = require("../models/post.model");


module.exports.SetUsers = async (req, res) => {   // avec  /get/..
    try {
        console.log("Avant la création de l'utilisateur");
        const post = await User.create({
            username: req.body.username,
            motDePasse: req.body.motDePasse
        });
        console.log("Après la création de l'utilisateur");
        res.status(200).json(post);
    } catch (error) {
        console.error("Erreur lors de la création de l'utilisateur :", error);
        res.status(500).json({ message: "Erreur lors de la création de l'utilisateur, Il manque les keys (username, motDePasse)" });
    }
};

module.exports.SetProduit = async (req, res) => {   // avec    /get/..
    console.log("Creation De Produit");
    try {
        console.log("Avant la creation du produit");
        const post = await Produit.create({
             nom: req.body.nom,
            description: req.body.description,
            prix: req.body.prix,
            quantiteEnStock: req.body.quantiteEnStock   // quelque part dans la creation de produit, regarde dans le modele, PS t'est beau
        });
        console.log("Après la création du Produit");
        res.status(200).json(post);
    } catch (error) {
        console.error("Erreur lors de la création du Produit :", error);
        res.status(500).json({ message: "Erreur lors de la création du Produit, Il manque les keys (nom, description, prix, quantiteEnStock)" });
    }
};

module.exports.GetProduits = async (req, res) => {
    console.log("Affichage de la liste des Produits");
    try {
        const produits = await Produit.find();
        res.status(200).json(produits);
    } catch (error) {
        console.error("Erreur lors de la récupération de la liste des produits :", error);
        res.status(500).json({ message: "Erreur lors de la récupération de la liste des produits, Enleves les keys" });
    }
};

module.exports.GetUsers = async (req, res) => {
    console.log("Affichage de la liste des Users");
    try {
        const Users = await User.find();
        res.status(200).json(Users);
    } catch (error) {
        console.error("Erreur lors de la récupération de la liste des Users :", error);
        res.status(500).json({ message: "Erreur lors de la récupération de la liste des Users, Enleves les keys" });
    }
};

module.exports.GetProduitById = async (req, res) => {
    const productId = req.params.id;
    console.log("Affichage de le produit par l'id");

    try {
        const produit = await Produit.findById(productId);
        
        if (!produit) {
            return res.status(404).json({ message: "Produit non trouvé" });
        }

        res.status(200).json(produit);
    } catch (error) {
        console.error("Erreur lors de la récupération du produit par ID :", error);
        res.status(500).json({ message: "Erreur lors de la récupération du produit par ID" });
    }
};
module.exports.UpdateProduit = async (req, res) => {
    const productId = req.params.id;
    console.log("Mise à jour du produit par l'id");

    try {
        const produit = await Produit.findByIdAndUpdate(productId, req.body, { new: true });

        if (!produit) {
            return res.status(404).json({ message: "Produit non trouvé" });
        }

        res.status(200).json(produit);
    } catch (error) {
        console.error("Erreur lors de la mise à jour du produit par ID :", error);
        res.status(500).json({ message: "Erreur lors de la mise à jour du produit par ID" });
    }
};

module.exports.DeleteProduit = async (req, res) => {
    const productId = req.params.id;
    console.log("Suppression du produit par l'id");

    try {
        const produit = await Produit.findByIdAndDelete(productId);

        if (!produit) {
            return res.status(404).json({ message: "Produit non trouvé" });
        }

        res.status(200).json({ message: "Produit supprimé avec succès" });
    } catch (error) {
        console.error("Erreur lors de la suppression du produit par ID :", error);
        res.status(500).json({ message: "Erreur lors de la suppression du produit par ID" });
    }
};


