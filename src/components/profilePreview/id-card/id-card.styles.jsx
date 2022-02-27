import styled from "styled-components";

export const IdCardContentContainer= styled.div`
display:flex;
flex-direction:column;
align-items:center;` 

export const IdCardContainer = styled.div`
padding-block:100px;
`;

export const IdCardBoxContainer = styled.div`
width: 400px;
height: 500px;
background: linear-gradient(155.07deg, rgba(120, 94, 110, 0.2) 0.88%, rgba(185, 155, 139, 0.2) 24.32%, rgba(238, 205, 163, 0.2) 99.59%);
border: 1px solid #785E6E;
box-sizing: border-box;
border-radius: 8px;
`;

export const CardHook = styled.div`
width: 80px;
height: 14px;
background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.55);
box-sizing: border-box;
border-radius: 20px;
margin:20px 0px 40px 0px;
`;

export const Name = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;
letter-spacing: 0.1px;
color: #785E6E;
margin:27px 0px 12px 0px;
`;

export const Designation = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
letter-spacing: 3px;
text-transform: uppercase;
color: #785E6E;`;

export const Email = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 23px;
letter-spacing: 1.1px;
margin-top:12px;
color: #785E6E;
` ;

export const BloodImgContainer = styled.div`
display:flex;
flex-direction:row;
height:16px;
width:16px;
margin:87px 0px 0px 18px;
`;

export const BloodGroup = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
letter-spacing: 1px;
color: #785E6E;`;

export const BloodImg = styled.img`
margin-right:6px;
`;