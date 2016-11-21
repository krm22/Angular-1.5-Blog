'use strict'

let express = require('express');

//assigning post.json to the posts variable.
let posts = require('../../mock/posts.json');

//router method of express
let router = express.Router();

//mounting router method to get
router.get('/posts', function(req, res){
    res.json(posts);
})

//TODO: Add POST route to create new entries

//TODO: Add PUT route to create new entries

//TODO: Add DELETE route to create new entries


//exposing the router by exporting
module.exports = router;
