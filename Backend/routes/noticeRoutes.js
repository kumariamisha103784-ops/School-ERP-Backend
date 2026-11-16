const express = require("express");
const router = express.Router();

const {
  addNotice,
  getNotices,
  getNoticeById,
  updateNotice,
  deleteNotice,
} = require("../controllers/noticeController");

// Add Notice
router.post("/", addNotice);

// Get All Notices
router.get("/", getNotices);

// Get Single Notice
router.get("/:id", getNoticeById);

// Update Notice
router.put("/:id", updateNotice);

// Delete Notice
router.delete("/:id", deleteNotice);

module.exports = router;