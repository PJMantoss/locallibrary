let express = require('express');

let router = express.Router();

// Require controller modules.
let author_controller = require('../controllers/authorController');
let book_controller = require('../controllers/bookController');
let genre_controller = require('../controllers/genreController');
let bookinstance_controller = require('../controllers/bookinstanceController');

// BOOK ROUTES //

// GET catalog home page.
router.get('/', book_controller.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/book/create', book_controller.book_create_get);

// POST request for creating Book.
router.post('/book/create', book_controller.book_create_post);