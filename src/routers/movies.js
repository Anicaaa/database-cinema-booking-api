const express = require("express");
const { getMovies, createMovie, movieID } = require("../controllers/movies");

const router = express.Router();

router.get("/", getMovies);
router.post("/", createMovie);
router.get("/:id", movieID);

module.exports = router;
