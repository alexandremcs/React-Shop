import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const FooterNav = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    li {
      margin-right: 20px;
      a {
        color: #fff;
        text-decoration: none;
        &:hover {
          color: #ccc;
        }
      }
    }
  }
`;

const SocialLinks = styled.div`
  img {
    width: 30px;
    margin-right: 10px;
  }
  a {
    color: #fff;
    &:hover {
      color: #ccc;
    }
  }
`;

function Footer() {
    return (
        <FooterContainer>
            <FooterNav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </FooterNav>
            <SocialLinks>
                <a href="#"><img src='/images/fb.png' alt="Facebook" /></a>
                <a href="#"><img src='/images/tw.png' alt="Twitter" /></a>
                <a href="#"><img src='/images/ig.png' alt="Instagram" /></a>
            </SocialLinks>
        </FooterContainer>
    );
}

export default Footer;