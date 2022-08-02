const messages =[
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello there!",
    user: "Sanjay kandpal",
    added: new Date()
  },
  {
    text: "mini ifja",
    user: "meena kandpal",
    added: new Date()
  }
]
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini MessageBoard',messages: messages });
});
router.post('/new',function(req,res,next){
  messages.push({text: req.body.comment,user: req.body.aname,added: new Date()});
  res.redirect('/');  
})

module.exports = router;
