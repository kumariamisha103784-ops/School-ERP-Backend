const Student = require("../models/Student");
const Teacher = require("../models/Teacher");
const Fee = require("../models/Fee");
const Attendance = require("../models/Attendance");
const Notice = require("../models/Notice");
const Class = require("../models/Class");

// Dashboard Statistics
const getDashboard = async (req, res) => {
  try {
    const totalStudents = await Student.countDocuments();
    const totalTeachers = await Teacher.countDocuments();
    const totalFees = await Fee.countDocuments();
    const totalAttendance = await Attendance.countDocuments();
    const totalNotices = await Notice.countDocuments();
    const totalClasses = await Class.countDocuments();

    res.status(200).json({
      success: true,
      data: {
        totalStudents,
        totalTeachers,
        totalFees,
        totalAttendance,
        totalNotices,
        totalClasses,
      },
    });
  } catch (error) {
    console.error("Dashboard Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  getDashboard,
};