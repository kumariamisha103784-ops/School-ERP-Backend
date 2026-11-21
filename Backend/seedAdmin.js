require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin");

const createAdmin = async () => {
  try {
    // MongoDB Connect
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected");

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({
      email: "admin@gmail.com",
    });

    if (existingAdmin) {
      console.log("⚠️ Admin already exists");
      process.exit();
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash("123456", 10);

    // Create Admin
    await Admin.create({
      name: "Amisha",
      email: "admin@gmail.com",
      password: hashedPassword,
      role: "admin",
    });

    console.log("✅ Admin Created Successfully");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

createAdmin();