const express = require("express");
const router = express.Router();
const fileController = require("../Controllers/fileController");

router.post("/files", fileController.createFile); 
router.get("/files/title/:titleId", fileController.getFilesByTitle); 
router.get("/files/:id", fileController.getFileById); 
router.put("/files/:id", fileController.updateFile); 
router.delete("/files/:id", fileController.deleteFile); 

module.exports = router;