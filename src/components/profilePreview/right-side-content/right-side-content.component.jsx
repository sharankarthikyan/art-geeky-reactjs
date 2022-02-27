import React from "react";

import {RightSideContainer,
RightSideContentBox,ContentSection,
Section,
Heading,Description,List,UnorderLi,SocialMediaID,
SocialMedias} from './right-side-content.styles'

import FBImg from '../../../assets/social-media-icons/facebook.svg'
import InstaImg from '../../../assets/social-media-icons/instagram.svg'

const RightSideContent =()=>{
    return(
         <RightSideContentBox>
        <RightSideContainer>
       
        <ContentSection>
       <Section>
        <Heading>About me</Heading>  
        <Description>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, placeat nesciunt dolorum sit tempora provident ducimus veniam aliquam ab quisquam laudantium incidunt necessitatibus vel error sapiente pariatur. Debitis, rem sapiente.</Description>
       </Section>
       <Section>
        <Heading>Interests</Heading>  
        <UnorderLi>
            <List>Music</List>
            <List>Music</List>
            <List>Music</List>
            <List>Music</List>
           
        </UnorderLi>
       </Section>
       <Section>
        <Heading>Social</Heading>  
        <SocialMedias>
            <img src={FBImg} alt="" />
            <SocialMediaID>adam.gills</SocialMediaID>
        </SocialMedias>
         <SocialMedias>
            <img src={InstaImg} alt="" width='18' height ='18' />
            <SocialMediaID>adam.gills</SocialMediaID>
        </SocialMedias>
       </Section>
        </ContentSection>
           
        </RightSideContainer>
        </RightSideContentBox> 
    )
}
export default RightSideContent