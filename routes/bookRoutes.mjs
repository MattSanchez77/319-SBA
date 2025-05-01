import express from "express";
import books from "../models/bookSchema.mjs";


const router = express.Router();


router.post('/', async (req, res) => {

    const newBook = await books.create(req.body);

    res.json(newBook);
});


router.get('/', async (req, res) => {

    const allBooks = await books.find({});


    res.json(allBooks);
});


router.put('/:id', async (req, res) => {

    const editBook = await books.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    if (!editBook) res.status(400).json({ msg: 'Book not found' });


    res.json(editBook);
});


router.delete('/:id', async (req, res) => {

    const deleteBook = await books.findByIdAndDelete(req.params.id);

    if (!deleteBook) res.status(400).json({ msg: 'Book not found' });


    res.json(deleteBook);
});

export default router;