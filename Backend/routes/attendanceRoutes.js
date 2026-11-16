const express = require("express");
const router = express.Router();

const {
  addAttendance,
  getAttendance,
  getAttendanceById,
  updateAttendance,
  deleteAttendance,
} = require("../controllers/attendanceController");

// Add Attendance
router.post("/", addAttendance);

// Get All Attendance
router.get("/", getAttendance);

// Get Single Attendance
router.get("/:id", getAttendanceById);

// Update Attendance
router.put("/:id", updateAttendance);

// Delete Attendance
router.delete("/:id", deleteAttendance);

module.exports = router;