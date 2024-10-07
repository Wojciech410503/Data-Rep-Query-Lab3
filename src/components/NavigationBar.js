// Import necessary components from react-bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Define a functional component named NavigationBar
const NavigationBar = () => {
  return (
    // Create a Navbar with a dark background
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        {/* Brand name that links to the home page */}
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          {/* Navigation links to different pages */}
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/create">Create</Nav.Link>
          <Nav.Link href="/read">Read</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

// Export the NavigationBar component so it can be used in other parts of the application
export default NavigationBar;
