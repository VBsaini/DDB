const express       = require('express'),
    app             = express();

app.set('views', './views');
app.use(express.static('public'))
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('./front-end/index')
})

app.get('/features', (req, res) =>{
    res.render('./front-end/features')
});

app.listen(3000, error => {
    if(error){
        return console.log(error)
    }
    console.log('server started')
})