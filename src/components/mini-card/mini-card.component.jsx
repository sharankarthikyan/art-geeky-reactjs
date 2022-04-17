import React from "react";
import {
  CardOuterContainer,
  CardContentCon,
  Image,
  CardTitle,
} from "./mini-card.styles";

import MiniCardImg from "../../assets/card-imgs/mini-card-img.png";
import ProfileTag from "../profile-tag/profile-tag.component";

const MiniCard = () => {
  return (
    <CardOuterContainer>
      <Image img={MiniCardImg} />
      <CardContentCon>
        <CardTitle>Id accumsan iaculis mauris sed enim velit sit.</CardTitle>
        <ProfileTag
          bg_color="#46BCAE"
          font_color="#1D5553"
          border_color="#1D5553"
          width={14.3}
        />
      </CardContentCon>
    </CardOuterContainer>
  );
};

export default MiniCard;
