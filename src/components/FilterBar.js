import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Rating from './Rating';

const FilterBar = () => {

  const [rating, setRating] = useState(2);

  return (
    <div>
      <div>
        <span>Filter Products</span>
        <Form.Check
          inline
          label="Price Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
        />
        <Form.Check
          inline
          label="Price Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
        />
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
        />
        <Form.Check
          inline
          label="Instant Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
        />
      </div>
      <div>
        <label>Rating</label>
        <Rating
          rating={rating}
          onClick={(i)=> setRating(i)}
        />
      </div>
      <Button variant="light">Clear Filters</Button>
    </div>
  );
};

export default FilterBar;
