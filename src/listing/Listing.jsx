import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Listing(props) {
  return (
    <div>
      <Card>
        <Card.Body>
          <Row>
            <Col>
              <div>
                <Carousel>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block img-lg-height img-md-height"
                      src={`${props.img1}`}
                      alt="First slide"
                      height="150px"
                      width="170px"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block img-lg-height img-md-height"
                      src={`${props.img2}`}
                      alt="Second slide"
                      height="150px"
                      width="170px"
                    />
                  </Carousel.Item>
                </Carousel>
                </div>
              </Col>
              <Col>
                <Table>
                  <thead>
                    <tr>
                      <th>{props.name}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>₹{props.price} / {props.unit}</td>
                    </tr>
                    <tr>
                      <td>Min Qty: {props.min} {props.unit}</td>
                    </tr>
                    <tr>
                      <td>
                        <Button onClick={props.onStock} variant={props.stock?"primary":"secondary"}>{props.stock?"In Stock":"Out of Stock"}</Button>{' '}
                        <Button variant="success" onClick={props.onEdit}>Edit</Button>{' '}
                        <Button variant="danger" onClick={props.onDelete}>Delete</Button>{' '}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col>
                <Row className="justify-content-center">
                  <Button variant="warning" style={{width:"50%"}}>{props.type}</Button>
                </Row>
                <Row><p/></Row>
                <Row>
                  <Accordion defaultActiveKey="">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Properties</Accordion.Header>
                      <Accordion.Body>
                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Property</th>
                              <th>Value</th>
                            </tr>
                          </thead>
                          <tbody>
                            {props.prop.map(function (val, id) {
                              return (
                                <tr>
                                  <td>{id+1}</td>
                                  <td>{val.prop}</td>
                                  <td>{val.value}</td>
                                </tr>
                              );})}
                          </tbody>
                        </Table>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Description</Accordion.Header>
                      <Accordion.Body>
                        {props.desc}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Row>
              </Col>
            </Row>
        </Card.Body>
      </Card>
      <p/>
    </div>
  );
}

export default Listing;