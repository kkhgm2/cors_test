const express = require('express')
const app = express()
const port = 3030

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.post('/corsTest', (req, res) => {
  console.log("post recieve")
  res.set({
    'Access-Control-Allow-Origin': 'http://localhost:8080',
  });
  res.json({
    message:"cors allowed!!"
  });
})

app.options('/corsTest', (req, res) => {
  console.log("options recieved")
  res.set({
    'Access-Control-Allow-Origin': 'http://localhost:8080',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': 86400
  });
  res.json({
    message:"cors allowed!!"
  });
});

app.listen(port, () => {
    console.log(`example app listning at ${port}`)
})