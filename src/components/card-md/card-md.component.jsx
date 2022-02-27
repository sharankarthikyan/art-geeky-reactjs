import React from "react";
import {
  CardOuterContainer,
  CardImageCon,
  CardContentCon,
  CardContentL1,
  CardCatTag,
  CardPostTime,
  CardContentL2,
  CardTitle,
  CardContentL3,
  CardDescrip,
  CardContentL4,
  CardAuthor,
  CardAuthorName,
  CardReadMore,
} from './card-md.styles';

import MDCardImg from '../../assets/card-imgs/card-img-md.svg';
import User1 from '../../assets/profile-imgs/user1.svg';

const Card = () => {
  return (
    <CardOuterContainer>
      <CardImageCon>
        <img src={MDCardImg} alt="" />
      </CardImageCon>
      <CardContentCon>
        <CardContentL1>
          <CardCatTag>Productivity</CardCatTag>
          <CardPostTime>3 days ago</CardPostTime>
        </CardContentL1>
        <CardContentL2>
          <CardTitle>7 Skills of Highly Effective Programmers</CardTitle>
        </CardContentL2>
        <CardContentL3>
          <CardDescrip>
            Our team was inspired by the seven skills of highly effective
            programmers created by the TechLead. We wanted to provide our own
            take on the topic...
          </CardDescrip>
        </CardContentL3>
        <CardContentL4>
          <CardAuthor>
            <div>
              <img src={User1} alt="user" />
            </div>
            <CardAuthorName>Glen Williams</CardAuthorName>
          </CardAuthor>
          <CardReadMore>Read more..</CardReadMore>
        </CardContentL4>
      </CardContentCon>
    </CardOuterContainer>
  );
};

export default Card;
