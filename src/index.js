//call in installed dependencies
const express = require('express')
//set up express app
const app = express()
//set up port number
const port = process.env.port || 3000
//set up home router
const handlebars = require('express-handlebars');
const bodyParse = require('body-parser')
const route = require('./routers/index')
const morgan = require('morgan')
const path = require('path')

const db = require('./config/db/db')
db.connect()
//connect db



app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers:{
            sum:(a,b) => a+b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({extended:false}))
app.use(morgan('combined'))

//router init
route(app)


app.listen(port,(reqest,respond)=>{
    console.log('object :>> ');
})