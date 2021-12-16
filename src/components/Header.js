import { Badge, Button, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap';
import { FiShoppingBag } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';

const Header = () => {
  const { state: { cart }, dispatch } = CartState();

  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <FormControl
          type="search"
          placeholder="Search a product"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
        <Nav>
          <Dropdown>
            <Dropdown.Toggle>
              <FiShoppingBag color="white" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {cart.length > 0 ?
                cart.map(product =>
                  <Dropdown.Item key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <div>{product.name}</div>
                    <div>${product.price}</div>
                    <AiFillDelete onClick={() => {
                      dispatch({
                        type: "removeFromCart",
                        payload: product
                      });
                    }} />
                  </Dropdown.Item>)
                :
                <div>Your cart is empty.</div>}
              <Link to="/cart"><Button>Go to Checkout</Button></Link>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
