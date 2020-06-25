let Author = require('../models/author');

//Display list of all Authors
exports.author_list = function(req, res){
    res.send('NOT IMPLEMENTED: Author list')
};

//Display Detail page for a specific author
exports.author_detail = function(req, res){
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id)
}

//Display Author Create form on GET
exports.author_create_get = function(req, res){
    res.send('NOT IMPLEMENTED: Author create GET')
}

//Handle Author create on POST
exports.author_create_post = function(req, res){
    res.send('NOT IMPLEMENTED: Author create POST')
}