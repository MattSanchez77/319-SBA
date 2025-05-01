const albumSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    releaseYear: {
      type: Number,
      required: true,
    }, 
  });