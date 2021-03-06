import React from 'react';
import { CartState } from '../context/Context';
import { Product, FilterBar } from '../components';

function Home() {
  const { state: { products } } = CartState();

  return (
    <div>
      <FilterBar />
      <div className='product-container'>
        {products.map(product => <Product product={product} key={product.id} />)}
      </div>
    </div>
  );
}

export default Home;
