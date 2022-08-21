import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NavBar() {
  return (
    <>
      <Navbar style={{backgroundColor:"green",position:"fixed",zIndex:"11", width:"100%"}}>
        <Container fluid>
          <Navbar.Brand href="">
            <Link to="/" onClick={()=>{}} className="nav-link" style={{color:"white"}}> 
              <img
                alt=""
                src="logo2.png"
                width="60"
                height="40"
                className="d-inline-block align-top"
              />
            </Link>
          </Navbar.Brand>
          <div style={{float:"right"}}>
            <Row>
              <Col>
    	          <Link to="/signup" onClick={()=>{}} className="nav-link" style={{color:"white"}}>
                  SignUp
                </Link>
              </Col>
              <Col>
                <Link to="/signin" onClick={()=>{}} className="nav-link" style={{color:"white"}}>
                  Login
                </Link>
              </Col>
            </Row>
	      </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;