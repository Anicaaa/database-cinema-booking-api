const express = require("express");
const { getScreens, createScreen } = require("../controllers/screen");

const router = express.Router();
router.get("/", getScreens);
router.post("/", createScreen);

module.exports = router;
