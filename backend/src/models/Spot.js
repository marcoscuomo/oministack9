const mongoose = require('mongoose');

const spotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    toJSON: {
        virtuals: true,
    },
});

//Virtual - para  pegar o endereço completo da imagem
spotSchema.virtual('thumbnail_url').get( function() {
    return `http://localhost:3333/files/${this.thumbnail}`
});

module.exports = mongoose.model('Spot', spotSchema);

