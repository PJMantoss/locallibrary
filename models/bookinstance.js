let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let BookInstanceSchema = new Schema(
    {
        book: {},
        imprint: {},
        status: {},
        due_back: {}
    }
)