/* eslint-disable no-unused-vars */
const router = require('express').Router();
const Recipe = require('./recipes-model')

router.get('/:recipe_id', async (req, res, next) => {
    try {
        const recipe = await Recipe.getRecipeById(req.params.recipe_id)
        res.status(200).json(recipe)
    } catch (err) {
        next(err)
    }
})

router.use( (err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });
});

module.exports = router;