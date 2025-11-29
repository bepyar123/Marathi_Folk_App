import express from "express";
import jwt from "jsonwebtoken";
import Community from "../models/Community.js";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// ✅ Middleware: verify token (user authentication)
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = decoded; // attach user ID
    next();
  });
};

// Inside POST /add route
router.post("/add", verifyToken, async (req, res) => {
  try {
    const { title, category, location, content, images } = req.body;

    const newEntry = new Community({
      userId: req.user.id,  // 👈 logged-in user ID
      title,
      category,
      location,
      content,
      images: images || [],
    });

    await newEntry.save();
    res.status(201).json({ message: "Contribution saved successfully!" });
  } catch (error) {
    console.error("Error saving contribution:", error);
    res.status(500).json({ message: "Error saving contribution" });
  }
});


// ✅ Route: Get all community contributions
router.get("/all", async (req, res) => {
  try {
    const data = await Community.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch contributions" });
  }
});

// ✅ Route: Get single contribution by ID
router.get("/:id", async (req, res) => {
  try {
    const item = await Community.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Contribution not found" });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: "Error fetching contribution" });
  }
});

export default router;
