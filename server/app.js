// Imports
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Creating the app
const app = express();
const port = process.env.PORT; // 5000;

// Middlewares o lógica de intercambio de información entre aplicaciones
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));

// Database conection
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to the database!"))
  .catch((err) => console.log(err));

// Routes prefix (use router)
app.use("/api/post", require("./routes/routes"));

// Start server
app.listen(port, () =>
  console.log(`server  running at http://localhost:${port}`)
);
