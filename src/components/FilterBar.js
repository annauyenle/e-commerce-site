import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Rating from './Rating';

const FilterBar = () => {

  const [rating, setRating] = useState(2);

  return (
    <Container fluid className='filter-bar'>
      <Row>
        <Col className="filter-title">Refine Your Browsing Experience</Col>
        <Col className='filter-options'>
          <Form.Check
            label="Price Ascending"
            name="group1"
            type="radio"
            id={`inline-1`}
          />
          <Form.Check

            label="Price Descending"
            name="group1"
            type="radio"
            id={`inline-2`}
          />
        </Col>
        <Col className='filter-options'>
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
        </Col>
        <Col className="rating">
          <div>Customer Rating</div>
          <Rating
            rating={rating}
            onClick={(i) => setRating(i)}
          />
        </Col>
        <Col>
          <Button variant="secondary" size="sm">Clear Filters</Button>
        </Col>
      </Row>
    </Container>
  )
};

export default FilterBar;
