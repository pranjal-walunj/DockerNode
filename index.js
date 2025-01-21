var express = require('express');
 
var app = express();//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('कभी रूठ जाऊ तो मना लेना,
गुस्से से कहूं तो दिल पर मत लेना, 
कल क्या पता हम रहे या न रहे, 
इसलिए जब भी मैं आपको मिलूं, 
तो कभी समोसा, कभी पानी पूरी खिला देना।');
});//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
