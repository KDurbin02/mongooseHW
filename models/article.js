const mongoose = require('mongoose');

const Schema = mongoose.Schema;


let ArticleSchema = new Schema({

    title: {
        type: String,
        required: true,
    },

    url: {
        type: String,
        required: true,
    },

    notes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Note'
        },
    ]
});


const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;