let BookInstance = require('../models/bookinstance');

//Display list of all book instances
exports.bookinstance_list = function(req, res){
    res.send('NOT IMPLEMENTED: BookInstance list')
}

//Display detail page for a specific Book instance
exports.bookinstance_detail = function(req, res){
    res.send('NOT IMPLEMENTED: BookInstance detail: ' + req.params.id)
}

//Display Book instance create form on GET
exports.bookinstance_create_get = function(req, res){
    res.send('NOT IMPLEMENTED: BookInstance create GET')
}