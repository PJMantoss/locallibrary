let Book = require('../models/book');
let Author = require('../models/author');
let Genre = require('../models/genre');
let BookInstance = require('../models/bookinstance');

let async = require('async');

exports.index = function(req, res, next){
    async.parallel({
        book_count: function(callback){
            Book.countDocuments({}, callback);
        },
        book_instance_count: function(callback){
            BookInstance.countDocuments({}, callback);
        },
        book_instance_available_count: function(callback){
            BookInstance.countDocuments({status: 'Available'}, callback);
        },
        author_count: function(callback){
            Author.countDocuments({}, callback);
        },
        genre_count: function(callback){
            Genre.countDocuments({}, callback);
        },
    }, function(err, results){
        res.render('index', {title: 'Local Library Home', error: err, data: results});
    });
};

//Display list of all Books
exports.book_list = function(req, res, next){
    Book.find({}, 'title author').populate('author').exec(function(err, list_books){
        if(err){return next(err);};
        //If successful, render
        res.render()
    });
}

//Display detail page for a specific Book
exports.book_detail = function(req, res){
    res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id)
}

//Display Book create form on GET
exports.book_create_get = function(req, res){
    res.send('NOT IMPLEMENTED: Book create GET')
}

//Handle Book create on POST
exports.book_create_post = function(req, res){
    res.send('NOT IMPLEMENTED: Book create POST')
}

//Display Book delete form on GET
exports.book_delete_get = function(req, res){
    res.send('NOT IMPLEMENTED: Book delete GET')
}

//Handle Book delete on POST
exports.book_delete_post = function(req, res){
    res.send('NOT IMPLEMENTED: Book delete POST')
}

//Display Book update form on GET
exports.book_update_get = function(req, res){
    res.send('NOT IMPLEMENTED: Book update GET')
}

//Handle Book update on POST
exports.book_update_post = function(req, res){
    res.send('NOT IMPLEMENTED: Book update POST')
}