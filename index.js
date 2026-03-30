const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
// const todoRoutes = require("./routes/todoRoutes");
// const errorHandler = require("./middlewares/errorMiddleware");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// app.use("/api/todos", todoRoutes);

// app.use(errorHandler);
//comflet yaradannn........
app.listen(3000, () => {
  console.log("Server running on port 3000");
});