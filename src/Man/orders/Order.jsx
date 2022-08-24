import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
const state = {"AP":"Andhra Pradesh","AD":"Andaman and Nicobar Islands","AN":"Arunachal Pradesh","AS":"Assam","BH":"Bihar","CH":"Chandigarh","CG":"Chhattisgarh","DN":"Dadar and Nagar Haveli","DD":"Daman and Diu","DE":"Delhi","LD":"Lakshadweep","PU":"Puducherry","GO":"Goa","GJ":"Gujarat","HY":"Haryana","HP":"Himachal Pradesh","JK":"Jammu and Kashmir","JH":"Jharkhand","KR":"Karnataka","KE":"Kerala","MP":"Madhya Pradesh","MH":"Maharashtra","MN":"Manipur","MG":"Meghalaya","MZ":"Mizoram","NG":"Nagaland","OD":"Odisha","PJ":"Punjab","RJ":"Rajasthan","SK":"Sikkim","TN":"Tamil Nadu","TG":"Telangana","TP":"Tripura","UP":"Uttar Pradesh","UK":"Uttarakhand","WB":"West Bengal"};

function Order(props) {
  return (
    <div>
      <Card>
        <Card.Body>
          <Row lg={2} xs={1}>
              <Col>
                <Table>
                  <tbody>
                    <tr>
                      <td>Qty : {props.order.qty}</td>
                    </tr>
                    <tr>
                      <td>Item Ordered : {props.order.otype}</td>
                    </tr>
                    <tr>
                      <td>Buyer Name : {props.buyer.name}</td>
                    </tr>
                    <tr>
                      <td>Buyer Phone : {props.buyer.phone}</td>
                    </tr>
                    <tr>
                      <td>Buyer's Message : {props.order.notif}</td>
                    </tr>
                    <tr>
                      <td>Buyer Address : {props.buyer.addr},{props.buyer.city}</td>
                    </tr>
                    <tr>
                      <td> 
                        {
                          props.order.status===0?
                          <div>
                            <Button onClick={props.onListing} variant="primary">Show Listed Product</Button>{' '}
                            <Button variant="success" onClick={props.onAccept}>Accept</Button>{' '}
                            <Button variant="danger" onClick={props.decline}>Decline</Button>{' '}
                          </div>: <Button onClick={props.onListing} variant="primary">Show Listed Product</Button>
                        }
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col>
                <Row className="justify-content-center">
                  <Button variant="warning" style={{width:"50%"}}>{props.order.otype}</Button>
                </Row>
                <Row><p/></Row>
                <Row>
                  <Accordion defaultActiveKey="">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Buyer Details</Accordion.Header>
                      <Accordion.Body>
                        <Table striped bordered hover>
                          <tbody>
                            <tr>
                              <td>Company Name : {props.buyer.comp}</td>
                            </tr>
                            <tr>
                              <td>Address : {props.buyer.addr}</td>
                            </tr>
                            <tr>
                              <td>City : {props.buyer.city}</td>
                            </tr>
                            <tr>
                              <td>Pin-Code : {props.buyer.pin}</td>
                            </tr>
                            <tr>
                              <td>State : {state[props.buyer.state]}</td>
                            </tr>
                          </tbody>
                        </Table>
                        <Button variant="secondary" onClick={()=>{props.onMap([props.user.name,props.buyer.name,[props.user.lat,props.user.lon],[props.buyer.lat,props.buyer.lon]])}}>
                              Show Map
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                    {props.order.logistics!==0?
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>Logistics Details</Accordion.Header>
                          <Accordion.Body>
                            <Table striped bordered hover>
                              <tbody>
                                <tr>
                                  <td>Name : {props.log.name}</td>
                                </tr>
                                <tr>
                                  <td>Phone : {props.log.phone}</td>
                                </tr>
                                <tr>
                                  <td>Type : {props.logistics.type}</td>
                                </tr>
                                <tr>
                                  <td>Vehicle : {props.logistics.vehicle}</td>
                                </tr>
                                <tr>
                                  <td>Capacity : {props.logistics.qty} {props.logistics.unit}</td>
                                </tr>
                                <tr>
                                  <td>Company Name : {props.log.comp}</td>
                                </tr>
                                <tr>
                                  <td>Address : {props.log.addr}</td>
                                </tr>
                                <tr>
                                  <td>City : {props.log.city}</td>
                                </tr>
                                <tr>
                                  <td>Pin-Code : {props.log.pin}</td>
                                </tr>
                                <tr>
                                  <td>State : {state[props.log.state]}</td>
                                </tr>
                              </tbody>
                            </Table>
                            <Button variant="secondary" onClick={()=>{props.onMap([props.user.name,props.log.name,[props.user.lat,props.user.lon],[props.log.lat,props.log.lon]])}}>
                              Show Map
                            </Button>
                          </Accordion.Body>
                        </Accordion.Item>:<></>
                    }
                    {props.order.status===1?
                        <Accordion.Item eventKey="2">
                          <Accordion.Header>Track Delivery</Accordion.Header>
                          <Accordion.Body>
                            <Button variant="secondary" onClick={()=>{props.onMap([props.log.name,props.buyer.name,[props.order.lat,props.order.lon],[props.buyer.lat,props.buyer.lon]])}}>
                              Show Map
                            </Button>
                          </Accordion.Body>
                        </Accordion.Item>:<></>
                    }                    
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

export default Order;