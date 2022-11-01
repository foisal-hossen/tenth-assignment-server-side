const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const port = process.env.port || 5555;
const courseData = require('./Data/course.json')
const dataOne =require('./Data/data01.json')
const dataTwo =require('./Data/data02.json')
const dataThree =require('./Data/data03.json')
const dataFour =require('./Data/data04.json')
const dataFive =require('./Data/data05.json')
const dataSix =require('./Data/data06.json')

app.get('/courses', (req, res) => {
  res.send(courseData);
});

app.get('/courses/1', (req, res) => {
  res.send(dataOne);
})

app.get('/courses/2', (req, res) => {
  res.send(dataTwo);
})

app.get('/courses/3', (req, res) => {
  res.send(dataThree);
})

app.get('/courses/4', (req, res) => {
  res.send(dataFour);
})

app.get('/courses/5', (req, res) => {
  res.send(dataFive);
})

app.get('/courses/6', (req, res) => {
  res.send(dataSix);
})


app.get('/checkout/1', (req, res) => {
  
res.send(dataOne)
  })

app.get('/checkout/2', (req, res) => {
  
res.send(dataTwo)
  })

app.get('/checkout/3', (req, res) => {
  
res.send(dataThree)
  })

app.get('/checkout/4', (req, res) => {
  
res.send(dataFour)
  })

app.get('/checkout/5', (req, res) => {
  
res.send(dataFive)
  })

app.get('/checkout/6', (req, res) => {
  
res.send(dataSix)
  })



app.get('/courses/:id', (req, res) => {
  
  const id = req.params.id;
  const getItem = courseData?.filter((display) => display.id == id);
  
  if (!getItem) {
    res.send('sorry bhaia khuje pelam na')
  }
  else {
    res.send(getItem);
}
  
});

app.listen(port, () => {
  console.log('server is runnig', port);
})

module.exports = app;