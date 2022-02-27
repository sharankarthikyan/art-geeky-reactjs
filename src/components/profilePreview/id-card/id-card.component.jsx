import React from "react";

import { connect } from 'react-redux';

import Avatar from '@mui/material/Avatar';

import {CardHook, 
     Designation,
     IdCardContainer, 
     Name,
     Email,
     IdCardContentContainer,
     IdCardBoxContainer,BloodImgContainer, BloodGroup,
    BloodImg} from './id-card.styles'

import UserImage from '../../../assets/profile-imgs/user1.svg';
import DropBlood from '../../../assets/profile-page-img/drop-blood.svg'

const IdCard = ({currentUser})=>{
  
    return (
        <IdCardContainer>
            <IdCardBoxContainer>
         <IdCardContentContainer>
        
        <CardHook/>
         <Avatar alt="Remy Sharp" src={UserImage}  sx={{ width: 188,height: 182 }}/>
         <Name>Adam Wills</Name>
          <Designation>Software Engineer</Designation>
          <Email>{currentUser.email}</Email>
          
          </IdCardContentContainer>
          <BloodImgContainer>
         <BloodImg src={DropBlood}></BloodImg>
           <BloodGroup>0+</BloodGroup>
          </BloodImgContainer>
          
         </IdCardBoxContainer>
        </IdCardContainer>
  

    )
}
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(IdCard);
