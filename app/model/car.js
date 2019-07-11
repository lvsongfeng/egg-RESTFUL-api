module.exports = app => {
  const mongoose = app.mongoose
  const Carchema = new mongoose.Schema({
    name: {
      type: String,
      unique: true,
      required: true
    },
    id: {
      type: String,
      unique: true,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  })

  return mongoose.model('Car', Carchema)
}