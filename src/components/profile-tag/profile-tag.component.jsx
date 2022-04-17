import React from "react";
import PropTypes from "prop-types";

import { ProfileTagContainer, UserName, Image } from "./profile-tag.styles";

import UsrProfileImg from "../../assets/card-imgs/user-profile.png";

const ProfileTag = (props) => {
  const { bg_color, border_color, width, font_color } = props;

  return (
    <ProfileTagContainer
      bg_color={bg_color}
      border_color={border_color}
      width={width}
    >
      <Image usr_img={UsrProfileImg} border_color={border_color} />
      <UserName font_color={font_color}>Jennifer</UserName>
    </ProfileTagContainer>
  );
};

ProfileTag.defaultProps = {
  bg_color: "#ffffff",
  border_color: "rgba(0, 0, 0, .15)",
  font_color: "rgba(0, 0, 0, .75)",
};

export default ProfileTag;
