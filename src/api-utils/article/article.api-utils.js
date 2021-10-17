import axios from 'axios';

export const createArticleUtil = (userId, callback) => {
  axios
    .post('/api/article', {
      userId: userId,
      status: 'created',
      content: '',
      category: [],
    })
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      callback(err);
    });
};

export const saveArticleUtil = (articleId, content) => {
  axios
    .put('/api/article', {
      articleId,
      content,
      category: [],
      status: 'drafted',
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
