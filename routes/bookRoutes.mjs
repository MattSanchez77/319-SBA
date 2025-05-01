import express from "express";
import books from "../utilities/bookData.mjs";


const router = express.router();


router.post('/', async (req, res) => {

    const newBook = await Book.create(req.body);

    res.json(newBook);
});


router.get('/', async (req, res) => {

    const allBooks = await Book.find({});


    res.json(allBooks);
});


router.put('/:id', async (req, res) => {

    const editBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    if (!editBook) res.status(400).json({ msg: 'Book not found' });


    res.json(editBook);
});


router.delete('/:id', async (req, res) => {

    const deleteBook = await Book.findByIdAndDelete(req.params.id);

    if (!deleteBook) res.status(400).json({ msg: 'Book not found' });


    res.json(deleteBook);
});

export default router;