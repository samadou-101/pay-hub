import { Router } from "express";
const router = Router();

// Home Route
router.get("/", (req, res) => {
  res.send("Welcome to the Test API!");
});

// Login Route
router.post("/login", (req, res) => {
  // Handle login logic here
  res.status(200).send({ message: "Logged in successfully" });
});

// Signup Route
router.post("/signup", (req, res) => {
  // Handle signup logic here
  res.status(201).send({ message: "Signup successful" });
});

// Logout Route
router.get("/logout", (req, res) => {
  // Handle logout logic here
  res.send("Logged out successfully");
});

export default router;
