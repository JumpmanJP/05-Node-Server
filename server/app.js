require('dotenv').config();

var express = require('express'); //1
var app = express(); //2
var test = require('./controllers/testcontroller')//1
var authTest = require('./controllers/authtestcontroller');

var user = require('./controllers/usercontroller')


var sequelize = require('./db');

//2
sequelize.sync(); // tip: pass in {force: true} for resetting tables
//3         //4

app.use(express.json()); //1

app.use(require('./middleware/headers')); //1 Add it here.
/******************
 * EXPOSED ROUTES
*******************/
app.use('/test', test);
app.use('/api/user', user);
/******************
 * PROTECTED ROUTES
*******************/

app.use(require('./middleware/validate-session')); 
app.use('/authtest', authTest); 




//3 You could also write it this way without the require statement above.
//app.use('/api/user', require('./controllers/usercontrollers'));

// app.use('/api/test', function(req, res){
    //     res.send("This is data from the /api/test endpoint. It's from the server.");
    // });
    
    //1
    
    // app.listen(3000, function(){
        //     console.log('Hey man!!!') //5
        // });
        
        
        // var express = require('express');
        // var app = express();
        
        //2            //3
        // app.use('/test', test)
        
                app.listen(3000, function(){
                    console.log('App is listening on 3000.')
                });