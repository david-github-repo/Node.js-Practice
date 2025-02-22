import express from 'express';

const app = express();

app.get('/', (req, res) => {
  console.log('Request received.');
  res.send(
    `Hello world from Express! It's ${new Date().toLocaleString()}. These are the headers: ${JSON.stringify(
      req.headers
    )}`
  );
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
