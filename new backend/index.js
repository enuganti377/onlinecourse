const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { userModel } = require("./db");
const { z } = require("zod");
const cors = require("cors");

const app = express();
const JWT_SECRET = "karthik"; 

app.use(express.json());

app.use(cors({
  origin: "onlinecourse-fu2y.vercel.app", 
  credentials: true
}));

const corsOptions = {
  origin: "onlinecourse-fu2y.vercel.app",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
};
app.use(cors(corsOptions));

// ✅ Auth middleware fixed
function auth(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.auth = decoded; // consistent naming
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

// ✅ Signup route
app.post("/signup", async function(req, res) {
  const requireBody = z.object({
    username: z.string().min(3).max(100),
    email: z.string().min(3).max(300).email(),
    password: z.string().min(2).max(100)
  });

  const parseDatawithsuccess = requireBody.safeParse(req.body);
  if (!parseDatawithsuccess.success) {
    return res.status(400).json({
      message: "Incorrect format",
      error: parseDatawithsuccess.error
    });
  }

  const { username, email, password } = req.body;
  const hashedpassword = await bcrypt.hash(password, 5);

  await userModel.create({
    username,
    email,
    password: hashedpassword
  });

  return res.json({ message: "User signup successfully" });
});

// ✅ Login route
app.post("/login", async function(req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: "Incorrect email or password" });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ message: "Incorrect email or password" });
  }

  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
  return res.json({ message: "User login successfully", token });
});

// ✅ Protected routes
app.get("/course", auth, function(req, res) {
  res.json({
    message: "Fetching our course page",
    auth: req.auth
  });
});

app.get("/campus", auth, function(req, res) {
  res.json({
    message: "Login in campus page",
    auth: req.auth
  });
});

app.listen(3002, () => console.log("Server running on port 3002"));
