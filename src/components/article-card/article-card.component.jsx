import React from "react";
import {
  WriteCard,
  LeftWriteContent,
  RightWriteContent,
  WriteFileName,
  WriteFileUpdateTime,
} from './article-card.styles';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import { red, teal } from '@mui/material/colors';

const Card = () => {
  return (
    <WriteCard>
      <LeftWriteContent>
        <WriteFileName>filename</WriteFileName>
        <WriteFileUpdateTime>5 days ago</WriteFileUpdateTime>
      </LeftWriteContent>
      <RightWriteContent>
        <DeleteIcon
          fontSize="medium"
          sx={{ color: red[500], marginRight: 3 }}
        />
        <EditIcon fontSize="medium" sx={{ color: teal[500], marginRight: 3 }} />
        <SendIcon fontSize="medium" />
      </RightWriteContent>
    </WriteCard>
  );
};

export default Card;
