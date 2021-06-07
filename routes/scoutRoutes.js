const express = require("express");
const router = express.Router();
const scoutController = require("../controllers/scoutController");

router.get("/register_scout", scoutController.register);

module.exports = router;