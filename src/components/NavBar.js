import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductUl=styled.ul`
    width:100%;
    display:grid;
    grid-template-columns:45% 45%;
    grid-template-rows:auto;
    list-style:none;
    justify-content:center;
`

const NavBar = () => {

  return (
    <ProductUl>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/basket">Basket</Link>
      </li>
      
    </ProductUl>
  );
}

export default NavBar;