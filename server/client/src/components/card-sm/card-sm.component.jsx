import {
  CardOuterContainer,
  CardImageCon,
  CardContentCon,
  CardContentL1,
  CardCatTag,
  CardPostTime,
  CardContentL2,
  CardTitle,
} from './card-sm.styles';

import SMCardImg from '../../assets/card-imgs/card-img-sm.svg';

const Card = () => {
  return (
    <CardOuterContainer>
      <CardImageCon>
        <img src={SMCardImg} alt="" />
      </CardImageCon>
      <CardContentCon>
        <CardContentL1>
          <CardCatTag>Productivity</CardCatTag>
          <CardPostTime>3 days ago</CardPostTime>
        </CardContentL1>
        <CardContentL2>
          <CardTitle>7 Skills of Highly Effective Programmers</CardTitle>
        </CardContentL2>
      </CardContentCon>
    </CardOuterContainer>
  );
};

export default Card;
