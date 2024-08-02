import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  position: absolute;
  top: 110px;
  left: 50%;
  transform: translateX(-50%);
  width: 1040px;
  height: 88px;
  display: flex;
  align-items: center;
  padding: 15px 20px;
  gap: 0px;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.4); /* Ensure this has enough contrast */
  opacity: 1; /* Ensure this is visible */
  z-index: 9999; /* High z-index to overlay on other elements */
`;

const NavLink = styled(Link)`
  padding: 10px 20px;
  font-family: Manrope, sans-serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 38.25px;
  letter-spacing: 0.0025em;
  color: ${({ isActive }) => (isActive ? '#ffffff' : '#ff2121')};
  background-color: ${({ isActive }) => (isActive ? '#000000' : 'transparent')};
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;
  text-align: left;
`;

const NavItem = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <NavWrapper>
      <NavLink to="/music" isActive={currentPath === '/music'}>Music</NavLink>
      <NavLink to="/about" isActive={currentPath === '/about'}>About</NavLink>
      <NavLink to="/events" isActive={currentPath === '/events'}>Events</NavLink>
      <NavLink to="/shop" isActive={currentPath === '/shop'}>Shop</NavLink>
      <NavLink to="/gallery" isActive={currentPath === '/gallery'}>Gallery</NavLink>
    </NavWrapper>
  );
};

export default NavItem;
