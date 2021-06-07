const express = require("express");
const router = express.Router();
const playerController = require("../controllers/playerController");

router.get("/", playerController.display);
router.get("/create", playerController.create);

router.post("/create_player", playerController.create_player);

module.exports = router;