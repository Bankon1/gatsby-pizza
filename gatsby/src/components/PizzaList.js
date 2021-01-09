import { Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const PizzaGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto 200px;
`;

const PizzaStyles = styled.div`
  display: grid;
  /* Take your row sizing no from the pizzaSyles div, but from the PizzaGridStyles grid */
  @supports not (grid-template-rows: subgrid) {
    --rows: auto auto 1fr;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 3;
  grid-gap: 1rem;
  h2,
  p {
    margin: 0;
  }
`;

const SinglePizza = ({ pizza }) => (
  <PizzaStyles>
    <Link to={`/pizza/${pizza.slug.current}`}>
      <h2>
        <span className="mark">{pizza.name}</span>
      </h2>
    </Link>
    <p>{pizza.toppings.map((topping) => topping.name).join(', ')}</p>
    <Img fluid={pizza.image.asset.fluid} alt={pizza.name} />
  </PizzaStyles>
);

const PizzaList = ({ pizzas }) => (
  <PizzaGridStyles>
    {pizzas.map((pizza) => (
      <SinglePizza pizza={pizza} key={pizza.id} />
    ))}
  </PizzaGridStyles>
);

export default PizzaList;
