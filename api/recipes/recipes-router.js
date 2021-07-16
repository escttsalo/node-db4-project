/* eslint-disable no-unused-vars */
const router = require('express').Router();


router.use( (err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });
});

module.exports = router;