const express = require("express");
const router = express.Router();

const {
  addFee,
  getFees,
  getFeeById,
  updateFee,
  deleteFee,
} = require("../controllers/feeController");

// Add Fee
router.post("/", addFee);

// Get All Fees
router.get("/", getFees);

// Get Single Fee
router.get("/:id", getFeeById);

// Update Fee
router.put("/:id", updateFee);

// Delete Fee
router.delete("/:id", deleteFee);

module.exports = router;