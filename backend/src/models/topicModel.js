const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true }
},
);

const topicSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    reviews: [reviewSchema],
},
    {
        timestamps: true,
    }

);

const Topic = mongoose.model('Topic', topicSchema);
module.exports = Topic;


