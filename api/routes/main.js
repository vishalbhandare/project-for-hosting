const express = require("express");
const router = express.Router();
const Contact = require('../modal/contact.model')

router.post("/save", async (req, res) => {
    try {
        // console.log('body', req.body)
        Contact.create({
            name: req.body.name,
            description: req.body.description,
            dob: req.body.dob,
        })
        res.end('record created')
    } catch(e) {
        console.log(e, 'error')
    }
});

module.exports = router;