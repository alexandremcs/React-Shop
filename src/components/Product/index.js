import React from 'react';
import styled from 'styled-components';

const ProductContainer = styled.div`
    width: 200px;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
`;

const ProductImage = styled.img`
  width: 100%;
`;

const ProductTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #555;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

function Product(props) {
    return (
        <ProductContainer>
            <ProductImage src={props.image} alt={props.title} />
            <ProductTitle>{props.title}</ProductTitle>
            <ProductDescription>{props.description}</ProductDescription>
            <ProductPrice>R${props.price}</ProductPrice>
        </ProductContainer>
    );
}

export default Product;