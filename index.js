const express = require('express');
const app = express();


/*
app.use((req, res)=>{
    console.log('WE GOT A NEW RESQUEST!!!')
    res.send("<h1>this is a default massage for all request.")
})
*/

app.get('/', (req, res)=>{
    res.send('<h2>Welcome to the home page')
})

app.get('/aniruddh', (req, res)=>{
    res.send({
        name: 'Aniruddh'
    })
})

/*
app.get('/r/:subreddit', (req, res)=>{
    const {subreddit} = req.params;
    res.send(`<h2>this is a subreddit related to ${subreddit}</h2>`)
})
*/

app.get('/r/:subreddit/:postId', (req, res)=>{
    const {subreddit, postId} = req.params;
    res.send(`<h2>vewing Post Id ${postId} on the ${subreddit} subreddit on the Internet!</h2>`)
})

app.post('/cats', (req, res)=>{
    res.send("post request to /Cats, THIS IS DIFFERENT THAN GET REQUEST.");
})

app.listen(5000, ()=>{
    console.log("server started on port 5000.")
})