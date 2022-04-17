import styled from "styled-components";

export const ProfileTagContainer = styled.div`
  width: ${(props) => props.width}rem;
  height: 4.4rem;
  display: flex;
  align-items: center;
  background: ${(props) => props.bg_color};
  border: 1px solid ${(props) => props.border_color};
  border-radius: 2.5rem;
`;

export const Image = styled.div`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  margin-left: 3px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid ${(props) => props.border_color};
  background-image: url(${(props) => props.usr_img});
`;

export const UserName = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  font-family: Roboto;
  letter-spacing: 0.1rem;
  line-height: 1.6rem;
  padding-left: 1rem;
  text-transform: uppercase;
  color: ${(props) => props.font_color};
`;
