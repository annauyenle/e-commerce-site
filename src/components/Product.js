import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { CartState } from '../context/Context';
import Rating from './Rating';

const Product = ({ product }) => {

  const {
    state: { cart }, dispatch } = CartState();

  return (
    <div className="product-card" >
      <Card>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle>
            <div>${product.price.split(".")[0]}</div>
            {product.instantDelivery ?
              <div>Instant Delivery</div> :
              <div>Ships within 3-5 business days</div>
            }
            <Rating rating={product.rating} />
          </Card.Subtitle>
          {
            cart.some(p => p.id === product.id) ?
              <Button
                onClick={() => {
                  dispatch({
                    type: 'removeFromCart',
                    payload: product
                  });
                }} variant="danger">Remove from cart</Button> :
              <Button
                onClick={() => {
                  dispatch({
                    type: 'addToCart',
                    payload: product
                  });
                }}
                disabled={!product.inStock}>
                {!product.inStock ? "Out of Stock" : "Add to Cart"}
              </Button>
          }
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
