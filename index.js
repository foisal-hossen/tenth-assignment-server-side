const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const port = process.env.port || 5555;

app.listen(port, () => {
  console.log('server is runnig', port);
})
