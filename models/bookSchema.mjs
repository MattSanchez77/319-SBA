import mongoose from 'mongoose';


const bookSchema = new mongoose.Schema({
    title: {
      type: String,
      minLength: [5, 'Title must be at least 5 characters'],
      required: true,
      index: true
    },
    author: {
      type: String,
      required: true,
      index: true
    },
    genre: {
      type: String,
      enum: ['Mystery/Thriller', 'Memoir', 'Historical Fiction'],
      required: true,
      index: true
    }, 
  });

  export default mongoose.model('Books', bookSchema);