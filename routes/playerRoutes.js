const express = require("express");
const router = express.Router();
const playerController = require("../controllers/playerController");

router.get("/", playerController.display);
router.get("/create", playerController.create);
router.get("/display_position", playerController.display_position);
router.get("/player_edit", playerController.player_edit);
router.get("/player_delete", playerController.player_delete);

router.post("/create_player", playerController.create_player);
router.post("/player_update", playerController.player_update);

module.exports = router;