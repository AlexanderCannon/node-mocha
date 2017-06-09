const express = require('express');

const app = express();
const port = 3000 || process.env.PORT

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'Hello BDD!', body: "Reduce, reuse!" });
});

app.get('/users', (req, res) => {
  res
    .status(200)
    .send([
      { name: 'John', age: 26 },
      { name: 'Sam', age: 76 },
      { name: 'Glenda', age: 27 }
    ]);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports.app = app;