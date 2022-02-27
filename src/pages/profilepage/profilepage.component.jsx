import React from "react";

import {Container} from "./proflepage.styles"

import IdCard from "../../components/profilePreview/id-card/id-card.component"
import RightSideContent from "../../components/profilePreview/right-side-content/right-side-content.component";

const ProfilePage = ()=>{
    return(
     <Container>
        <IdCard/>
        <RightSideContent/>
    </Container>
    )
}
export default ProfilePage;