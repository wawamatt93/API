const express = require("express");
const { SetUsers,SetProduit,GetProduits,GetUsers,GetProduitById, UpdateProduit, DeleteProduit  } = require("../controllers/post.controller");
const router = express.Router();

router.get("/essaie", (req, res) => {
    res.json({ message: "Voici les données" }); // /get/essaie
});

router.post("/recu", (req, res) => {
    res.json({ message: req.body.message }); // get/recu
});

router.post("/CreateUser", SetUsers);

router.post("/CreateProduit", SetProduit);

router.get("/GetProduits", GetProduits);

router.get("/GetUsers", GetUsers);

router.get("/GetProduits/:id", GetProduitById);

router.put("/updateProduit/:id", UpdateProduit);

router.delete("/deleteProduit/:id", DeleteProduit);

module.exports = router;