// Imports
import express from 'express';
import dotenv from 'dotenv';

import books from './utilities/bookData.mjs';
import movies from './utilities/movieData.mjs';
import { globalError } from './middleware/errorMiddleware.mjs';





// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
connectDB()


// Middleware
app.use(express.json());


// Routes
app.use("/api/Books", bookRoutes);
app.use("/api/Books", bookRoutes);
app.use("/api/", bookRoutes);


// Err handling middleware
app.use(globalError);

// Listener
app.listen(PORT, () => {
    console.log((`Server running on Port: ${PORT}`));
});