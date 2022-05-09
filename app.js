const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require("path");

const app = express();
app.use(express.json());

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))

//Static folder
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(__dirname));

mongoose.connect(
    `mongodb+srv://cisc4900wpdb:cisc4900wpdb@cisc4900wp.owken.mongodb.net/CISC4900DB?retryWrites=true&w=majority`, {
        useUnifiedTopology: true
    }
)

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", dunction => {
    console.log("Connection Succefully!")
})


app.use('/', require('./route/index'));
app.use('/registration', require('./route/index'));
app.use('/login', require('./route/index'));
app.use('/home_prof', require('./route/index'));
app.use('/reg_prof', require('./route/index'));
app.use('/submission_check', require('./route/index'));
app.use('/home_student', require('./route/index'));

app.listen(3001, () => {
    console.log("Server is running at port 3001")
})




