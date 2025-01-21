const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

// Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://ft24bscs0022:JsjVv48qBGbnM7VA@login-nimrah.rc9uc.mongodb.net/Login-Nimrah"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

// Routes

// Home/Login Page
app.get("/", (req, res) => {
  res.render("login", { errorMessage: null });
});

// Handle Login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });
    if (user) {
      res.render("welcome", { username: user.name });
    } else {
      res.render("login", { errorMessage: "Invalid username or password!" });
    }
  } catch (error) {
    console.error("Error during authentication:", error);
    res.render("login", { errorMessage: "An error occurred. Please try again." });
  }
});

// Registration Page
app.get("/register", (req, res) => {
  res.render("register", { errorMessage: null });
});

// Handle Registration
app.post("/register", async (req, res) => {
  const { name, username, password, confirmPassword } = req.body;

  try {
    // Check if passwords match
    if (password !== confirmPassword) {
      return res.render("register", { errorMessage: "Passwords do not match!" });
    }

    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.render("register", { errorMessage: "Username already exists!" });
    }

    // Create new user
    const newUser = new User({ name, username, password });
    await newUser.save();
    res.redirect("/"); // Redirect to login page
  } catch (error) {
    console.error("Error during registration:", error);
    res.render("register", { errorMessage: "An error occurred. Please try again." });
  }
});

// Catch-All Route for Undefined Paths
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
