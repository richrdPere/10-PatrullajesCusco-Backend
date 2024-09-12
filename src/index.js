const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const userRoutes = require("./routes/users");

const app = express();

const PORT = process.env.PORT || 9000;
const URL = "mongodb+srv://richrdPere:<db_password>@cluster0.agj5n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// Middleware
app.use('/api', userRoutes)
app.use(express.json());

// Route
app.get('/', (req, res) => {
    res.send("Welcome to my API");
})

// MongoDB Connection
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((error) => console.error(error))

app.listen(PORT, () => console.log("Server listening on port", PORT));