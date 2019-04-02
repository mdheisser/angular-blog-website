const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((requ, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.post('/api/posts', (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added succesffuly!'
  });
});

app.get('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: '2j34j23v',
      title: 'First server-side post',
      content: 'This is coming from the server.'
    },
    {
      id: '2j34g234',
      title: 'Second server-side post',
      content: 'This is coming from the server.'
    },
    {
      id: '2j34we34',
      title: 'Third server-side post',
      content: 'This is coming from the server.'
    }
  ];
  res.status(200).json({
    message: 'Posts fetch successfully!',
    posts: posts
  });
});

module.exports = app;
