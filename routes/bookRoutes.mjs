import express from "express";
import Books from "../models/bookSchema.mjs"



const router = express.Router();


router.post('/', async (req, res) => {

    const newBook = await Books.create(req.body);

    res.json(newBook);
});


router.get('/', async (req, res) => {

    const allBooks = await Books.find({});


    res.json(allBooks);
});


router.put('/:id', async (req, res) => {

    const editBook = await Books.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    if (!editBook) res.status(400).json({ msg: 'Book not found' });


    res.json(editBook);
});


router.delete('/:id', async (req, res) => {

    const deleteBook = await Books.findByIdAndDelete(req.params.id);

    if (!deleteBook) res.status(400).json({ msg: 'Book not found' });


    res.json(deleteBook);
});

export default router;