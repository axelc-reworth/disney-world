const express = require("express");
const router = express.Router();

router.get("/character", (req, res) => {
    res.send("This is the homepage of character GET");
});

router.get("/character/:id", (req, res) => {
    res.send("this is the homepage of character GET:id");
});

router.post("/character", (req, res) => {
    res.send("this is the homepage of character POST");
});

router.patch("/character/:id", (req, res) => {
    res.send("this is the homepage of character PATCH");
});

router.delete("/character/:id", (req, res) => {
    res.send("this is the homepage of character DELETE");
});

module.exports = router;
