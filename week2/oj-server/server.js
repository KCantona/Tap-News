var express = require('express')
var app = express()
const port = 3000
var restRouter = require("./routes/rest");
var mongoose = require("mongoose");

connectionString = 'mongodb+srv://hao:wh300036@cooperationplatform-mqvc2.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(connectionString, { useUnifiedTopology: true, useNewUrlParser: true }).then(
    () => {console.log('success connect')},
    err => {console.log(err)}
);
app.use('/api/v1', restRouter);

app.listen(port, () => console.log(`App listening on port v2 ${port}!`))
