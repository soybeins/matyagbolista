const express = require("express");
const router = express.Router();
const playerController = require("../controllers/playerController");

router.post("/", playerController.display);

module.exports = router;