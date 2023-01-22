import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { removeFromCart } from './redux/actions/cart';

const CartModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: ${props => props.show ? 'block' : 'none'};
`;

const CartModalContent = styled.div`
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  width: 80%;
  max-width: 600px;
`;

const CartModalTitle = styled.h2`
  margin-top: 0;
`;

const CartModalProductList = styled.ul`
  list-style-type: none;
  margin-top: 20px;
  padding: 0;
  li {
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    button {
      background-color: transparent;
      border: none;
      color: #666;
      font-size: 18px;
      &:hover {
        color: #333;
      }
    }
  }
`;

const CartModalTotal = styled.p`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
`;

const CartModalCloseButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
  &:before {
    content: 'x';
  }
`;

function CartModal({ cartItems, removeFromCart, showModal, setShowModal }) {
    return (
        <CartModalContainer show={showModal}>
            <CartModalContent>
                <CartModalTitle>Carrinho</CartModalTitle>
                <CartModalProductList>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.title} - R${item.price}
                            <button onClick={() => removeFromCart(item.id)}>Remover</button>
                        </li>
                    ))}
                </CartModalProductList>
                <CartModalTotal>Total: R{cartItems.reduce((total, item) => total + item.price, 0)}</CartModalTotal>
                <CartModalCloseButton onClick={() => setShowModal(false)} />
            </CartModalContent>
        </CartModalContainer>
    );
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);