const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

const userRouter = require('./routes/users');
const subsedditRouter = require('./routes/subseddits');
const postRouter = require('./routes/posts');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use('/users', userRouter);
app.use('/subseddits', subsedditRouter);
app.use('/posts', postRouter);

app.listen(PORT, () => {
  console.log(`Listening: http://localhost:${PORT}`)
});

module.exports = app;