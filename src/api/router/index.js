const express = require('express')
const router = express.Router();
import video from './video';

router.use("/video", video);

