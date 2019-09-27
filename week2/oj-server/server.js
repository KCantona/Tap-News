var express = require('express')
var app = express()
const port = 3000
var restRouter = require("./routes/rest");



app.use('/api/v1', restRouter);

app.listen(port, () => console.log(`App listening on port v2 ${port}!`))