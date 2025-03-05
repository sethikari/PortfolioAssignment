const express = require('express');
const Contact = require('../models/Contact');

const router = express.Router();

// Get all contacts
router.get('/', async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts);
});

// Get contact by ID
router.get('/:id', async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    res.json(contact);
});

// Add new contact
router.post('/', async (req, res) => {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.json(newContact);
});

// Update contact by ID
router.put('/:id', async (req, res) => {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedContact);
});

// Delete contact by ID
router.delete('/:id', async (req, res) => {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Contact deleted" });
});

// DELETE all contacts
router.delete('/', async (req, res) => {
    try {
        const result = await Contact.deleteMany({});
        res.status(200).json({
            message: 'All contacts deleted successfully',
            deletedCount: result.deletedCount
        });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting contacts', error });
    }
});


module.exports = router;