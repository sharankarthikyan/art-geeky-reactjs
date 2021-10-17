import { makeStyles } from '@mui/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

import {
  EditorLeftOuter,
  EditorLeftBox,
  EditorLeftBoxInner,
} from './editor-left.styles';
import { Tooltip } from '@mui/material';

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

  return (
    <EditorLeftOuter>
      <EditorLeftBox>
        <EditorLeftBoxInner>
          <Tooltip title="Publish" arrow>
            <SendIcon fontSize="medium" className={classes.SendIcon} />
          </Tooltip>
          <Tooltip title="Delete" arrow>
            <DeleteIcon fontSize="medium" className={classes.delIcon} />
          </Tooltip>
        </EditorLeftBoxInner>
      </EditorLeftBox>
    </EditorLeftOuter>
  );
};

export default EditorLeft;
