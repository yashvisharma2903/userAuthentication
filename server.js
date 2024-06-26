// server.js
import express from "express";
import userRoutes from './src/routes/signup.routes.js'; 
import cors from "cors";

const app = express();
app.use(cors())

app.use(express.json());

app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
    res.status(200).json({ success: true, msg: "Welcome to CN E-Comm App" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});