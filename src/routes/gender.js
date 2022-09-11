const express = require("express");
const router = express.Router();

router.get("/gender", (req, res ) => {
    res.send("this is the homepage of movies GET");
});

router.get("/gender/:id", (req, res ) => {
    res.send("this is the homepage of movies GET/:id");
});

router.post("/gender", (req, res ) => {
    res.send("this is the homepage of movies POST");
});

router.patch("/gender/:id", (req, res ) => {
    res.send("this is the homepage of movies PATCH");
});

router.delete("/gender/:id", (req, res ) => {
    res.send("this is the homepage of movies DELETE");
});

module.exports = router;
