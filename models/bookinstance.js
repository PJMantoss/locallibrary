let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let BookInstanceSchema = new Schema(
    {
        book: {type: Schema.Types.ObjectId, ref: 'Book', required: true},
        imprint: {type: String, required: true},
        status: {type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved']},
        due_back: {type: Date, default: Date.now}
    }
)