const express = require('express');
const path = require('path');
const {getPicsAsync}  = require('./getRover');

//const post ||env
const app = express();

app.set('view engine','ejs'); 
app.set('views', path.join(__dirname,'../views'));

app.use(express.static(path.join(__dirname,'../public'))); 


app.get('/',(req, res)=> {
    res.render('index');
});


app.get('/photos',(req,res)=>{ //! send back json only here
    if(req.query.date && req.query.camera){
        (async () => {
            const res1 = await getPicsAsync(req.query.date,req.query.camera,req.query.page);
            if(res1){
                return res.send(res1);
            }
            res.send({error:'NASA API Error'});
        })();
    }
})

app.get('/about',(req, res)=> {
    return res.render('about');  
});

app.get('/cameras',(req, res)=> {
    res.render('cameras');  
});

app.get('/*',(req, res)=> {
    res.status(404);
    res.render('404');  
});

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log('Server listening on port: '+ PORT));