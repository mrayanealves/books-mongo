const Book = require('../model/book');

exports.findAll = async (req, res) => {
    try {
        const books = await Book.find();
        return res.status(200).jsonp(books);
    } catch (err) {
        res.status(500).jsonp({error : 'Internal server error'});
    }
};

exports.findById = async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findById(id);

        if(!book){
            return res.status(404).jsonp({error : 'Book not found'});
        }

        return res.status(200).jsonp(books);

    } catch (err) {
        res.status(500).jsonp({error : 'Internal server error'});
    }
};


exports.save = async (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author
    });

    try {
        const response = await Book.save(book);

        res.status(200).send(response);
    } catch (err) {
        res.status(500).jsonp({error : 'Internal server error'});
    }
};