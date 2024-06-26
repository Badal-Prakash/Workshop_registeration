const express = require("express");
const router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const participantControllers = require("../controllers/participantController");

router.post("/register", participantControllers.register);

module.exports = router;
