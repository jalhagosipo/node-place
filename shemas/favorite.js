const mongoose = require('mongoose');

const { Schema } = mongoose;
const favoriteSchema = new Schema({
  placeId: { // 장소 아이디
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  location: { type: [Number], index: '2dsphere' }, // 경도와 위도가 배열로 들어감
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Favorite', favoriteSchema);