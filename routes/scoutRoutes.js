const express = require("express");
const router = express.Router();
const scoutController = require("../controllers/scoutController");

router.get("/", scoutController.login);
router.get("/register", scoutController.register);
router.get("/profile",scoutController.profile);
router.get("/edit",scoutController.edit);

router.post("/register_scout", scoutController.register_scout);
router.post("/login", scoutController.login_scout);
router.post("/edit_scout", scoutController.edit_scout);

module.exports = router;