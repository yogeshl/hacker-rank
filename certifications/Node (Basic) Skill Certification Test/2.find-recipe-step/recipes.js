var recipes = require('../recipes.json');
var router = require('express').Router();

function getIndex(numArray, num){
  for(let i =0; i < numArray.length; i++){
    if(numArray[i] >= num ){
      return i;
    }
  }
};

router.get('/step/:id', (req, res) => {
  
    let id = req.params.id;
    let elapsedTime = req.query.elapsedTime || 0;

    // If ID is not a number or Recipe Not found, should return 400.
    let statusCode = 400;
    let body = 'NOT_FOUND';

    if(!isNaN(id)){
      let selectedItems = recipes.filter(item => {
        return item.id === Number(id);
      });
      
      if(selectedItems.length > 0){
        let { timers } = selectedItems[0];
        let currentIndex = getIndex(timers, elapsedTime);
        
        statusCode = 200;
        body = {index: currentIndex};
      }
    }

    res.status(statusCode).send(body);
});

module.exports = router;