import React from 'react';
import styled from 'styled-components';

const ProductContainer = styled.div`
    width: 300px;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
`;

const ProductImage = styled.img`
  width: 100%;
`;

const ProductTitle = styled.h3`
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 20px;
`;

const ProductDescription = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #555;
`;

const ProductPrice = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: #333;
`;

const AddToCartButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  &:hover {
    background-color: #555;
  }
`;

function Product(props) {
    return (
        <ProductContainer>
            <ProductImage src={props.image} alt={props.title} />
            <ProductTitle>{props.title}</ProductTitle>
            <ProductDescription>{props.description}</ProductDescription>
            <ProductPrice>R${props.price}</ProductPrice>
            <AddToCartButton onClick={() => props.addToCart(props.productId)}>Adicionar ao carrinho</AddToCartButton>
        </ProductContainer>
    );
}

export default Product;