const express = require("express");
const router = express.Router();

router.get("/movies", (req, res) => {
    res.send("this is the homepage of movies GET");
});

router.get("/movies/:id", (req, res) => {
    res.send("this is the homepage of movies GET");
});

router.post("/movies", (req, res) => {
    res.send("this is the homepage of movies POST");
});

router.patch("/movies/:id", (req, res) => {
    res.send("this is the homepage of movies PATCH");
});

router.delete("/movies/:id", (req, res) => {
    res.send("this is the homepage of movies DELETE");
});

module.exports = router;
