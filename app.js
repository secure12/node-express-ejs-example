var express = require('express')
var path = require('path')
var app = express()

// set view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// load page
app.use('/', require(path.join(__dirname, 'routes/test')))

app.listen(3000, function(){
    console.log('Listening on port 3000...')
})
