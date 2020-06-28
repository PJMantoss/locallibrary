let Genre = require('../models/genre');
let Book = require('../models/book');
let async = require('async');

let mongoose = require('mongoose');

//Display list of all genre
exports.genre_list = function(req, res, next){
    Genre.find()
        .populate('genre')
        .sort([['genre_name', 'ascending']])
        .exec(function(err, list_genres){
            if(err){
                return next(err);
            }
            //If successful render
            res.render('genre_list', {title: 'Genre List', genre_list: list_genres});
        })
}

//Display detail page for a specific genre
exports.genre_detail = function(req, res, next){

    let id = mongoose.Types.ObjectId(req.params.id);

    async.parallel({
        genre: function(callback){
            Genre.findById(id).exec(callback);
        },
        genre_books: function(callback){
            Book.find({ 'genre': id }).exec(callback);
        }
    }, function(err, results){
        if(err){return next(err);}
        if(results.genre == null){
            let err = new Error('Genre Not Found');
            err.status = 404;
            return next(err);
        }
        //Successful, so render
        res.render('genre_detail', {title: 'Genre Detail', genre: results.genre, genre_books: results.genre_books});
    });
    
};

//Display Genre create form on GET
exports.genre_create_get = function(req, res){
    res.send('NOT IMPLEMENTED: Genre create GET')
}

//Handle Genre create on POST 
exports.genre_create_post = function(req, res){
    res.send('NOT IMPLEMENTED: Genre create POST')
}

//Display Genre delete form on GET
exports.genre_delete_get = function(req, res){
    res.send('NOT IMPLEMENTED: Genre delete GET')
}

//Handle Genre delete on POST 
exports.genre_delete_post = function(req, res){
    res.send('NOT IMPLEMENTED: Genre delete POST')
}

//Display Genre update form on GET
exports.genre_update_get = function(req, res){
    res.send('NOT IMPLEMENTED: Genre update GET')
}

//Handle Genre update on POST 
exports.genre_update_post = function(req, res){
    res.send('NOT IMPLEMENTED: Genre update POST')
}