var recipes = require('../recipes.json');
var router = require('express').Router();


router.get('/', (req, res) =>{

  let page = req.query.page || 1;
  let per_page = req.query.limit || 3;
  let offset = (page - 1) * per_page;

  let paginatedItems = recipes.slice(offset).slice(0, per_page);
  
  res.status(200).send(paginatedItems);

})

module.exports = router;