let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let BookInstanceSchema = new Schema(
    {
        book: {type: Schema.Types.ObjectId, ref: 'Book', required: true}, //Reference to the associated book
        imprint: {type: String, required: true},
        status: {type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved']},
        due_back: {type: Date, default: Date.now}
    }
)

//Virtualization for BookInstance's URL
BookInstanceSchema.virtual('url').get(function(){
    return '/catalog/bookinstance/' + this._id;
})

//Export module
module.exports = mongoose.model('BookInstance', BookInstanceSchema);