var express = require('express');
var router = express.Router();

const Article = require('../../../db/models/article/article.model');

router.post('/', (req, res) => {
  const data = req.body;

  console.log('data: ', data);

  new Article({
    userId: data.userId,
    content: data.content,
    category: data.category,
    status: data.status,
  })
    .save()
    .then((success) => {
      res.status(201).send({ output: success, message: 'Article created.' });
    })
    .catch((error) => {
      res
        .status(400)
        .send({ output: error, message: 'Article creation failed.' });
    });
});

router.put('/', (req, res) => {
  const data = req.body;

  // this data.id is article id.
  Article.updateOne(
    { _id: data.articleId },
    {
      content: data.content,
      category: data.category,
      status: data.status,
    }
  )
    .then(() => {
      res.status(201).json({
        message: 'Article updated successfully!',
      });
    })
    .catch((err) => {
      res.status(400).json({
        output: err,
        message: 'Article update error.',
      });
    });
});

module.exports = router;
