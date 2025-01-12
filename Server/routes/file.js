const express = require("express");
const router = express.Router();
const fileController = require("../Controllers/fileController");
const verifyJWT=require("../middleware/verifyJWT")


router.post("/",verifyJWT, fileController.createFile); 
router.get("/title/:titleId", fileController.getFilesByTitle); 
router.get("/:id", fileController.getFileById); 
router.put("/:id",verifyJWT, fileController.updateFile); 
router.delete("/:id",verifyJWT, fileController.deleteFile); 

module.exports = router;