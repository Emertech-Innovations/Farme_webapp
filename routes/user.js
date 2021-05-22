const express = require("express");
const router = express.Router();
const dbobj = require("../db");
const userController = require("../controllers/user");

router.post("/register", userController.register);
router.get("/showall", userController.getAll);

module.exports = router;
