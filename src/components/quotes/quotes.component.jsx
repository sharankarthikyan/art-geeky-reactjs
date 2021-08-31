import {
  CardOuterContainer,
  CardDoubleQuotes,
  CardContentCon,
  CardContentBlock,
  QuotesDiv,
  QuotesAuthor,
  CardAvatar,
} from './quotes.styles';

import QuotesImg from '../../assets/qoutes/qoutes-img.svg';
import QuotesUserImg from '../../assets/qoutes/quotes-user.svg';

const Quote = () => {
  return (
    <CardOuterContainer>
      <CardDoubleQuotes>
        <img src={QuotesImg} alt="" />
      </CardDoubleQuotes>
      <CardContentCon>
        <CardContentBlock>
          <QuotesDiv>
            Really enjoyed the course. I felt like I was getting what you had
            advertised online and much more!
          </QuotesDiv>
          <QuotesAuthor>Fionn Norris</QuotesAuthor>
        </CardContentBlock>
        <CardAvatar>
          <img src={QuotesUserImg} alt="" />
        </CardAvatar>
      </CardContentCon>
    </CardOuterContainer>
  );
};

export default Quote;
