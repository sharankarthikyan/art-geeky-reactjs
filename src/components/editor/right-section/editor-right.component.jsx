import { Tooltip } from '@mui/material';

import {
  EditorRightOuter,
  EditorRightBox,
  CharCount,
  EditorRightBoxInner,
} from './editor-right.styles';

const EditorRight = () => {
  return (
    <EditorRightOuter>
      <EditorRightBox>
        <EditorRightBoxInner>
          <Tooltip title="Character Count" arrow>
            <CharCount>CC: 0</CharCount>
          </Tooltip>
          <Tooltip title="Word Count" arrow>
            <CharCount>WC: 0</CharCount>
          </Tooltip>
        </EditorRightBoxInner>
      </EditorRightBox>
    </EditorRightOuter>
  );
};

export default EditorRight;
