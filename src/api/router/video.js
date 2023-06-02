const express = require('express');
const router = express.Router();
const { getvideo } = require('../controller/video');



router.get("/:id", getvideo);

