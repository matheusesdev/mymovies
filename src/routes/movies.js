const express = require("express");
const router = express.Router();
const MovieController = require("../controllers/MovieController.js");

router.get("/", MovieController.findAll);
router.get("/:id", MovieController.find);
router.post("/", MovieController.create);
router.delete("/:id", MovieController.delete);

module.exports = router;
