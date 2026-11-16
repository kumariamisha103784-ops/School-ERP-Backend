const Fee = require("../models/Fee");

// Add Fee
const addFee = async (req, res) => {
  try {
    const fee = await Fee.create(req.body);

    res.status(201).json({
      success: true,
      message: "Fee Added Successfully",
      data: fee,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Fees
const getFees = async (req, res) => {
  try {
    const fees = await Fee.find()
      .populate("student", "name rollNo class")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: fees.length,
      data: fees,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Fee
const getFeeById = async (req, res) => {
  try {
    const fee = await Fee.findById(req.params.id).populate(
      "student",
      "name rollNo class"
    );

    if (!fee) {
      return res.status(404).json({
        success: false,
        message: "Fee Record Not Found",
      });
    }

    res.status(200).json({
      success: true,
      data: fee,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Fee
const updateFee = async (req, res) => {
  try {
    const fee = await Fee.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!fee) {
      return res.status(404).json({
        success: false,
        message: "Fee Record Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Fee Updated Successfully",
      data: fee,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Fee
const deleteFee = async (req, res) => {
  try {
    const fee = await Fee.findByIdAndDelete(req.params.id);

    if (!fee) {
      return res.status(404).json({
        success: false,
        message: "Fee Record Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Fee Deleted Successfully",
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
  addFee,
  getFees,
  getFeeById,
  updateFee,
  deleteFee,
};