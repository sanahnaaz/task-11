import React, { useState } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink to="/" >Dashboard</MenuLink>
        <MenuLink to="/guestTaffic" >Guest traffic</MenuLink>
        <MenuLink to="/profile" >Guestlist</MenuLink>
        <MenuLink href="">Contact</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;

const MenuLink = styled(Link)`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #000;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  font-weight: bold;

  &:hover {
    color: #7b7fda;
  }
`;

const Nav = styled.div`
  padding-top: 85px;
  padding-left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: fit-content;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;

  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 25px;
    background: #000;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
