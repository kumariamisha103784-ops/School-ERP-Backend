const express = require("express");
const router = express.Router();

const {
  addStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

const upload = require("../middleware/upload");

// Add Student
router.post("/", upload.single("photo"), addStudent);

// Get All Students
router.get("/", getStudents);

// Get Single Student
router.get("/:id", getStudentById);

// Update Student
router.put("/:id", upload.single("photo"), updateStudent);

// Delete Student
router.delete("/:id", deleteStudent);

module.exports = router;