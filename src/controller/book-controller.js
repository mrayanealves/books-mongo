const Books = require('../model/book');

exports.findAll = async (req, res) => {
    try {
        const books = await Books.find();
        return res.status(200).jsonp(books);
    } catch (err) {
        res.status(500).jsonp({error : 'Internal server error'});
    }
};

exports.findById = async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Books.findById(id);

        if(!book){
            return res.status(404).jsonp({error : 'Book not found'});
        }

        return res.status(200).jsonp(book);

    } catch (err) {
        console.log(err)
        res.status(500).jsonp({error : 'Internal server error'});
    }
};


exports.save = async (req, res) => {
    const book = new Books({
        title: req.body.title,
        author: req.body.author
    });

    try {
        const response = await book.save();

        res.status(200).send(response);
    } catch (err) {
        console.log(err)
        res.status(500).jsonp({error : 'Internal server error'});
    }
};