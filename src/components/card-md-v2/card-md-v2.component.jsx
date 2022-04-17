import React from "react";
import {
  CardOuterContainer,
  CardContentCon,
  CardTitle,
  Image,
  CardDescrip,
} from "./card-md-v2.styles";

import MDCardImg from "../../assets/card-imgs/card-md-img.png";
import ProfileTag from "../profile-tag/profile-tag.component";

const CardMdV2 = () => {
  return (
    <CardOuterContainer>
      <Image img={MDCardImg} />
      <CardContentCon>
        <CardTitle>Id accumsan iaculis mauris sed enim velit sit.</CardTitle>
        <CardDescrip>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, dui et,
          id gravida sed a...
        </CardDescrip>
        <ProfileTag width={20} />
      </CardContentCon>
    </CardOuterContainer>
  );
};

export default CardMdV2;
