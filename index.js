const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const port = process.env.port || 5555;
const courseData =require('./Data/course.json')

app.get('/', (req, res) => {
  res.send(' Server Choltache')
});

app.get('/courses', (req, res) => {
  res.send(courseData);
});


// app.get('/course/:id', (req, res) => {
  
//   const id = req.params.id;
//   const getItem = pcd?.find((display) => display.id == id);
  
//   if (!getItem) {
//     res.send('sorry bhaia khuje pelam na')
//   }

//   res.send(getItem);
// });

app.listen(port, () => {
  console.log('server is runnig', port);
})

module.exports = app;