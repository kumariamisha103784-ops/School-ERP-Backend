const Teacher = require("../models/Teacher");

// Add Teacher
const addTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.create({
      name: req.body.name,
      subject: req.body.subject,
      qualification: req.body.qualification,
      mobile: req.body.mobile,
      email: req.body.email,
      photo: req.file ? req.file.filename : "",
    });

    res.status(201).json({
      success: true,
      message: "Teacher Added Successfully",
      data: teacher,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Teachers
const getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: teachers.length,
      data: teachers,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Teacher
const getTeacherById = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher Not Found",
      });
    }

    res.status(200).json({
      success: true,
      data: teacher,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Teacher
const updateTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher Not Found",
      });
    }

    teacher.name = req.body.name;
    teacher.subject = req.body.subject;
    teacher.qualification = req.body.qualification;
    teacher.mobile = req.body.mobile;
    teacher.email = req.body.email;

    if (req.file) {
      teacher.photo = req.file.filename;
    }

    await teacher.save();

    res.status(200).json({
      success: true,
      message: "Teacher Updated Successfully",
      data: teacher,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Teacher
const deleteTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndDelete(req.params.id);

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Teacher Deleted Successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addTeacher,
  getTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
};