import { makeStyles } from '@mui/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Tooltip } from '@mui/material';

import {
  EditorLeftOuter,
  EditorLeftBox,
  EditorLeftBoxInner,
} from './editor-left.styles';

import BasicModal from '../../category-selection-modal/category-selection-modal.component';
import { useState } from 'react';

const useStyles = makeStyles((theme) => {
  return {
    delIcon: {
      color: 'red',
      cursor: 'pointer',
    },
    SendIcon: {
      cursor: 'pointer',
    },
  };
});

const EditorLeft = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handlePublishBtn = () => {
    setOpen(true);
  };

  const handleOpen = (action) => {
    setOpen(action);
  };

  return (
    <EditorLeftOuter>
      <EditorLeftBox>
        <EditorLeftBoxInner>
          <Tooltip title="Publish" arrow>
            <SendIcon
              fontSize="medium"
              className={classes.SendIcon}
              onClick={handlePublishBtn}
            />
          </Tooltip>
          <Tooltip title="Delete" arrow>
            <DeleteIcon fontSize="medium" className={classes.delIcon} />
          </Tooltip>
          <BasicModal open={open} setOpen={handleOpen} />
        </EditorLeftBoxInner>
      </EditorLeftBox>
    </EditorLeftOuter>
  );
};

export default EditorLeft;
