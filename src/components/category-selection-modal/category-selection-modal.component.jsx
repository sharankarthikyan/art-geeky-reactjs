import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { publishArticleUtil } from '../../api-utils/article/article.api-utils';
import { useHistory, withRouter } from 'react-router';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

const useStyles = makeStyles({
  categoryTextField: {
    width: '100%',
    marginTop: '1rem !important',
  },
  publishBtn: {
    width: '100% !important',
    marginTop: '1rem !important',
  },
});

function BasicModal({ open, setOpen, match }) {
  const handleClose = () => setOpen(false);
  const [categories, setCategories] = React.useState('');
  const classes = useStyles();
  let history = useHistory();

  const handlePublishBtn = () => {
    if (categories !== '') {
      let listOfCategories = categories.split(',');
      let content = document.querySelector('.ql-editor').innerHTML;
      publishArticleUtil(
        match.params.articleId,
        content,
        listOfCategories,
        (publishArticleRes) => {
          if (publishArticleRes.status === 201) {
            history.push(`/write`);
          }
        }
      );
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>Please enter the article releated Categories.</h1>
          <TextField
            className={classes.categoryTextField}
            id="outlined-basic"
            label="Categories"
            variant="outlined"
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
          />
          <Button
            className={classes.publishBtn}
            variant="outlined"
            onClick={handlePublishBtn}
          >
            Publish
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default withRouter(BasicModal);
