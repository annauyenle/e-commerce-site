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
          <div className='product-name'>{product.name}</div>
          <div>
            <div className='product-details'>${product.price.split(".")[0]}</div>
            {product.instantDelivery ?
              <div className='product-details'>Instant Delivery!</div> :
              <div className='product-details'>Ships within 3-5 business days</div>
            }
            <div className='product-details'>
              <Rating rating={product.rating} />
            </div>
          </div>
          {
            cart.some(p => p.id === product.id) ?
              <Button
                size="sm"
                variant="Secondary"
                onClick={() => {
                  dispatch({
                    type: 'removeFromCart',
                    payload: product
                  });
                }}>Remove from cart</Button> :
              <Button
                size="sm"
                variant="dark"
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
