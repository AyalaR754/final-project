const express = require("express");
const router = express.Router();
const fileController = require("../Controllers/fileController");

router.post("/", fileController.createFile); 
router.get("/title/:titleId", fileController.getFilesByTitle); 
router.get("/:id", fileController.getFileById); 
router.put("/:id", fileController.updateFile); 
router.delete("/:id", fileController.deleteFile); 

module.exports = router;