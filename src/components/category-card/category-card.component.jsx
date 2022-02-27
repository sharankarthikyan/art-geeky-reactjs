import Button from '@mui/material/Button';
import React from "react";

import {
  CategoryCardOuterContainer,
  CategoryCardTitle,
} from './category-card.styles';

const CategoryCard = () => {
  return (
    <CategoryCardOuterContainer>
      <CategoryCardTitle>
        Learn Python Programming Mastercalss
      </CategoryCardTitle>
      <Button variant="outlined" 
        style={{
        color: '#FF6188',
        display: 'block',
        backgroundColor: '#ffffff',
        border: 'none',
        boxShadow: '0px 4px 4px rgb(0 0 0 / 7%)',
        height: '3.4rem',
        boxSizing: 'border-box',
        borderRadius: '8px',
        paddingTop: '0.2rem',
        textAlign: 'center',
        marginRight: '1.6rem',
        marginLeft: 'auto',
        font: '1.6rem/3.2rem Roboto',
        letterSpacing: '1.25px',
        textTransform: 'capitalize',
        }}
        >
          More
        </Button>
    </CategoryCardOuterContainer>
  );
};

export default CategoryCard;
