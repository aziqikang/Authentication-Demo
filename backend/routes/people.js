let router = require('express').Router();       // Import and create router
const Person = require('../models/PersonModel');    // Import model
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.get('/:firstName', async (req, res) => {     // Create route for GET request
    try {
        const person = await Person.findOne({       // Find one person in database based on firstName. Returns null if
            firstName: req.params.firstName         // not in database
        });

        if (person == null || person == []) {
            res.status(404).json({ message: "No entry found" });    // Return error if person is not in database
        } else {
            res.json(person)                        // Return person if in database
        }
    } catch (err) {
        res.status(500).json({ message: err.message });             // Return error if created
    }
});

router.post('/', async (req, res) => {              // Create route for POST request
    const person = new Person({                     // Create new person based on body of request
        firstName: req.body.firstName,
        lastName: bcrypt.hash(req.body.lastName),
    });
    try {
        const newPerson = await person.save();      // Add newPerson to database
        res.status(201).json(newPerson);            // Return response with newPerson
    } catch(err) {
        res.status(400).json({ message: err.message });     // Return error if caught
    }
});

module.exports = router;        // Export router