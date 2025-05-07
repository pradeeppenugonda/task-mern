console.log(` 
    Welcome to Server 
    `);

const express = require('express');
const cors = require('cors');

const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./connect/database');

const dotenv = require('dotenv').config();

//By default, config will look for a file called .env in the current working directory.
/* 
config will read your .env file, parse the contents, assign it to process.env, 
and return an Object with a parsed key containing the loaded content or an error key if it failed.
*/
const port = process.env.PORT || 5000; //8000;
/* console.log(`Port from .env file is ${process.env.PORT}`) */
connectDB();
const app = express ();





/*

As we are implementing the Routes commented the below code 


 const fetchAllTasks = (req, res)=> {
    // console.log(`Came to Fetch All Tasks`, req)

    console.log(`Came to Fetch All Tasks`);
    // res.send('Get All Tasks')
    res.status(200).json({message: 'Get All Tasks'});
} 


app.get('/api/tasks', (req, res) => {
    fetchAllTasks(req, res);
    }
)
    
*/



app.use(express.json());

app.use(express.urlencoded({extended: false}))
app.use(cors());


app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(port, ()=> {
    console.log(`
    Server is Listening on ${port}
    `)
})