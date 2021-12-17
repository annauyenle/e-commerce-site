import { Badge, Button, Container, Dropdown, FormControl, Form, Nav, Navbar } from 'react-bootstrap';
import { FiShoppingBag } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';
import Logo from '../assets/Logo.png';

const Header = () => {
  const { state: { cart }, dispatch } = CartState();

  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <Navbar.Brand className="nav-bar">
        
        <Link to="/">
          <img
            src={Logo}
            alt="Shop Logo"
            className='logo'
          />
        </Link>

        <Form className="search-bar">
          <FormControl
            size="sm"
            type="search"
            placeholder="Search a product..."
            aria-label="Search" />
        </Form>
        
        <Dropdown className="cart-icon">
          <Dropdown.Toggle variant="secondary" size="sm">
            <FiShoppingBag color="white" />
            <Badge bg="secondary">{cart.length}</Badge>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {cart.length > 0 ?
              cart.map(product =>
                <Dropdown.Item
                  className="cart-item"
                  key={product.id}>
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

      </Navbar.Brand>
    </Navbar >
  );
};

export default Header;
