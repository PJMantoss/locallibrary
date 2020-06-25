let BookInstance = require('../models/bookinstance');

//Display list of all book instances
exports.bookinstance_list = function(req, res){
    res.send('NOT IMPLEMENTED: BookInstance list')
}

//Display detail page for a specific Book instance
exports.bookinstance_detail = function(req, res){
    res.send('NOT IMPLEMENTED: BookInstance detail: ' + req.params.id)
}

//Display BookInstance create form on GET
exports.bookinstance_create_get = function(req, res){
    res.send('NOT IMPLEMENTED: BookInstance create GET')
}

//Handle BookInstance create on POST
exports.bookinstance_create_post = function(req, res){
    res.send('NOT IMPLEMENTED: BookInstance create POST')
}

//Display BookInstance delete form on GET
exports.bookinstance_delete_get = function(req, res){
    res.send('NOT IMPLEMENTED: BookInstance delete GET')
}

//Handle BookInstance delete on POST
exports.bookinstance_delete_post = function(req, res){
    res.send('NOT IMPLEMENTED: BookInstance delete POST')
}