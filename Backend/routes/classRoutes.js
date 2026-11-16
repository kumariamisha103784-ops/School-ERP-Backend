const express = require("express");
const router = express.Router();

const {
  addClass,
  getClasses,
  getClassById,
  updateClass,
  deleteClass,
} = require("../controllers/classController");

// Add Class
router.post("/", addClass);

// Get All Classes
router.get("/", getClasses);

// Get Single Class
router.get("/:id", getClassById);

// Update Class
router.put("/:id", updateClass);

// Delete Class
router.delete("/:id", deleteClass);

module.exports = router;
