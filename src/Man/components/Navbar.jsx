import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="light" style={{position:"fixed", width:"100%"}}>
        <Container fluid>
          <Navbar.Brand href="">
            <img
              alt=""
              src="/logo.png"
              width="60"
              height="40"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <div style={{float:"right"}}>
	            Log Out
	      </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;