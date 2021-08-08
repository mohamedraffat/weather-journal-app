// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
// Start up an instance of app
const app = express();
//the port number 
const port = 3000;
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// to get data from the API
app.post('/saveWeatherDetails',function(req, res){
    //we use spread syntax to get all values 
    projectData = {...req.body};
    res.send(projectData);
} );
// to send data to clint  side 
app.get('/getWeatherDetails',(req,res)=>{
    res.send(projectData);
})
// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
app.listen(port, () => {
    console.log(`Hello from port ${port}!`)
});