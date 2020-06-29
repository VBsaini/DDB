const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('./front-end/index')
})


app.listen(3000, error => {
    if(error){
        return console.log(error)
    }
    console.log('server started')
})