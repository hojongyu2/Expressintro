const express = require('express')
const app = express()
const port = 4000

//localhost:port number
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//if search is there after '/', it will route here
app.get('/search', (req, res)=>{
    // throw Error('error in search')
    res.status(200).send('Yes this is a page!')
})
//returns my name
app.get('/myname', (req, res)=> {
    res.status(204).send('Ho Jong Yu')
})

//wild card. This will send it to this route if route is not found
app.get('*', (req, res)=> {
    throw Error('404')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// node app.js
//nodemon app.js
//npm start - set start in script at package.json to start node when type npm start
//npm run dev - set dev in script at package.json to start nodemon when type npm run dev
//control c to exit/kill terminal
//touch is to create file
//npm install express
//npm install nodemon
//npm install nodemon -g to install grobally/ desktop