const File = require("../models/File");

// יצירת קובץ חדש
const createFile = async (req, res) => {
  try {
    const { name, path, type, size, title } = req.body;

    // בדיקת שדות חובה
    if (!name || !path || !type || !size || !title) {
      return res.status(400).json({ message: "כל השדות חובה" });
    }

    // יצירת ושמירת הקובץ
    const newFile = await File.create({ name, path, type, size, title });
    res.status(201).json(newFile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// שליפת כל הקבצים לפי כותרת מסוימת
const getFilesByTitle = async (req, res) => {
  try {
    const { titleId } = req.params;

    // חיפוש קבצים ששייכים לכותרת מסוימת
    const files = await File.find({ title: titleId }).populate("title");
    if (!files.length) {
      return res.status(404).json({ message: "No files found for this" });
    }
    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// שליפת קובץ לפי מזהה
const getFileById = async (req, res) => {
  try {
    const { id } = req.params;

    // חיפוש הקובץ לפי מזהה
    const file = await File.findById(id).populate("title");
    if (!file) {
      return res.status(404).json({ message: "קובץ לא נמצא" });
    }
    res.status(200).json(file);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// עדכון קובץ
const updateFile = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, path, type, size, title } = req.body;

    // חיפוש הקובץ לפי מזהה
    const file = await File.findById(id);
    if (!file) {
      return res.status(404).json({ message: "קובץ לא נמצא" });
    }

    // עדכון שדות
    if (name) file.name = name;
    if (path) file.path = path;
    if (type) file.type = type;
    if (size) file.size = size;
    if (title) file.title = title;

    // שמירת השינויים
    const updatedFile = await file.save();
    res.status(200).json(updatedFile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// מחיקת קובץ
const deleteFile = async (req, res) => {
    const { id } = req.params
    const file = await File.findById(id).exec()
    if (!file) {
        return res.status(400).json({ message: 'file not found' })
    }
    const result = await File.deleteOne()
    const files = await File.find().lean().populate("title")
    if (!files?.length) {
        return res.status(400).json({ message: 'No files found' })
    }
    res.json(files)
};

module.exports = {
  createFile,getFilesByTitle,getFileById,updateFile,deleteFile};
