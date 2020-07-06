const express       = require('express'),
    app             = express();

app.set('views', './views');
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))
app.set('view engine', 'ejs');

let user = [
    {name:'vishu', password:'123'},
    {name:'diksha', password:'456'},
    {name:'bgs', password:'bgs'}
]

app.get('/', (req, res) => {
    res.render('./front-end/index')
})

app.get('/features', (req, res) =>{
    res.render('./front-end/features')
});

app.get('/login', (req, res) =>{
    res.render('./front-end/login')
})

app.get('/signup', (req, res) =>{
    res.render('./front-end/signup')
})

app.post('/signup', (req, res) =>{
    const newuser = req.body.user
    user.push(newuser)
    console.log(user)
    res.send('back')
})
app.post('/login', (req, res) =>{
    user.forEach(user1 => {
        if(req.body.name === user1.name && req.body.password === user1.password){
            res.send('welcome');
            return;
        } else  {
            res.send('password or name is incoorect')
            return;
        }
    }); 
})
app.listen(3000, error => {
    if(error){
        return console.log(error)
    }
    console.log('server started')
})