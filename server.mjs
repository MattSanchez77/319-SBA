// Imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs';
import Books from './routes/bookRoutes.mjs';
import { globalError } from './middleware/errorMiddleware.mjs';
import bookSchema from './models/bookSchema.mjs';





// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
connectDB()


// Middleware
app.use(express.json());


// Routes
// app.use("/api/Books", bookRoutes); My app.use is not allowing it to run. I am not sure what I am missing for it to work



// Err handling middleware
app.use(globalError);

// Listener
app.listen(PORT, () => {
    console.log((`Server running on Port: ${PORT}`));
});