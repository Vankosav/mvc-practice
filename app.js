const express = require('express');
const { friendCreate, shortForm, showAllFriends } = require('./controllers/functions');
const mongoose = require('mongoose');
const app = express();
const hbs = require('hbs');
const bodyParser = require('body-parser');
hbs.registerPartials(__dirname + '/views/partials');

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

mongoose.connect('mongodb://127.0.0.1:27017/express-mongo')
.then((x) => 
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
)
.catch((err) => console.error('Error connecting to mongo', err));


app.get('/', showAllFriends);

app.get('/create-friend', shortForm)

app.post('/created', friendCreate);



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});