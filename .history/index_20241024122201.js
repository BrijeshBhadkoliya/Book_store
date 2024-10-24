const express =  require('express');

const port = 8100;
const db = require('./config/db')
const app = express()

const UserModel =  require('./modules/BookModels');

app.set('view engine','ejs');

app.use(express.urlencoded({ extended: true }));

app.get('/app', (req, res) => {
    return res.render('add');
});
app.post('/addData', (req, res) => {
    const {name,price,pages,description} = req.body;
    UserModel.create({
        name,
        price,
        pages,
        description
    }).then((data,err)=>{
        if(err){
            console.log(err);
            return false;
        }
        console.log('record add');
        return  res.redirect('/app');
        
    })
    
});
app.listen(port,(err)=>{
    if(err){
        console.log(err); 
    }
    console.log(`server is runing http://localhost:${port}/app `);
    
});