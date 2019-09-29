var express = require('express')
var app = express()
const port = 3000
var restRouter = require("./routes/rest");
var indexRouter = require("./routes/index");
var mongoose = require("mongoose");
var path = require("path");

connectionString = 'mongodb+srv://hao:wh300036@cooperationplatform-mqvc2.mongodb.net/test?retryWrites=true&w=majority'


mongoose.connect(connectionString, { useUnifiedTopology: true, useNewUrlParser: true }).then(
    () => {console.log('success connect')},
    err => {console.log(err)}
);

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/api/v1', restRouter);

app.use(function(req, res) {
    // send index.html to start client side
    res.sendFile("index.html", { root: path.join(__dirname, '../public/') });
});

app.listen(port, () => console.log(`App listening on port v2 ${port}!`))
