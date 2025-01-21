var express = require('express');
 
var app = express();//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('If you ever get angry, take it for granted.
Gusse se kahun to dil par mat lena, 
Kal kya pata hum rahe ya na rahe, 
So whenever I meet you, 
To kabhi samosa, kabhi pani puri khila dena.');
});//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
