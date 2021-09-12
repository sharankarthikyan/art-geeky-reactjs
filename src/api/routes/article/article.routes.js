var express = require('express');
var router = express.Router();

const Article = require('../../../db/models/article/article.model');

router.post('/', (req, res) => {
  const data = req.body;

  new Article({
    userId: data.userId,
    content: '',
    category: '',
    status: 'draft',
  })
    .save()
    .then(() => {
      res.status(201).send({ message: 'added article' });
    })
    .catch((error) => {
      res.status(400).send({ error });
    });
});

router.put('/:articleId', (req, res) => {
  const data = req.body;

  // this data.id is article id.
  Article.updateOne(
    { _id: data.id },
    {
      content: data.content,
      category: data.category,
    }
  )
    .then(() => {
      res.status(201).json({
        message: 'Thing updated successfully!',
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
});

module.exports = router;
