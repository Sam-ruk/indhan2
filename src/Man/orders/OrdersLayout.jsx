import { useState,useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Map from '../components/Map';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Order from './Order';
const state = {"AP":"Andhra Pradesh","AD":"Andaman and Nicobar Islands","AN":"Arunachal Pradesh","AS":"Assam","BH":"Bihar","CH":"Chandigarh","CG":"Chhattisgarh","DN":"Dadar and Nagar Haveli","DD":"Daman and Diu","DE":"Delhi","LD":"Lakshadweep","PU":"Puducherry","GO":"Goa","GJ":"Gujarat","HY":"Haryana","HP":"Himachal Pradesh","JK":"Jammu and Kashmir","JH":"Jharkhand","KR":"Karnataka","KE":"Kerala","MP":"Madhya Pradesh","MH":"Maharashtra","MN":"Manipur","MG":"Meghalaya","MZ":"Mizoram","NG":"Nagaland","OD":"Odisha","PJ":"Punjab","RJ":"Rajasthan","SK":"Sikkim","TN":"Tamil Nadu","TG":"Telangana","TP":"Tripura","UP":"Uttar Pradesh","UK":"Uttarakhand","WB":"West Bengal"};

function OrdersLayout() {
  const [data,setData] = useState([{listing:"69090",otype:"Bio-CNG",buyer:9999999999,qty:9000,notif:"Dispatched from Seller Side",accept:false,status:1,logistics:9999999999,lat:19.02,lon:73.02},{listing:"69091",otype:"Bio-CNG",buyer:9999999999,qty:9000,notif:"Dispatched from Seller Side",accept:false,status:0,logistics:0,lat:0.0,lon:0.0}]);
  const [listing,setListing] = useState([{properties:[{"prop":"Density","value":"20 kg/m3"},{"prop":"Viscosity","value":"30%"}],_id:"69091",name:"95% RS",type:"Raw Material",price:45.78,unit:"Ltr",min:4000,
        stock:true, desc:"Our Biofuel is very clean and green.",img1:"/temp.png",img2:"/temp2.jpg"},{properties:[{"prop":"Density","value":"20 kg/m3"},{"prop":"Viscosity","value":"30%"}],_id:"69091",name:"95% RS",type:"Raw Material",price:45.78,unit:"Ltr",min:4000,
        stock:true, desc:"Our Biofuel is very clean and green.",img1:"/temp.png",img2:"/temp2.jpg"}]);
  const [logistics,setLogistics] = useState([{type:"E",vehicle:"Truck",lat:73.0,lon:19.0,cost:2.0,qty:1.0,unit:"tonnes"},{type:"E-truck",vehicle:"Truck",lat:73.0,lon:19.0,cost:2.0,qty:1.0,unit:"tonnes"}]);
  const [log,setLog] = useState([{phone:9999999999,name:"Ram Chaudhary",comp:"Edel company",addr:"Plot 50",city:"Nashik",state:"MH",pin:444444,lat:19.07,lon:73.09},{phone:9999999999,name:"Ram Chaudhary",comp:"My company",addr:"Plot 50",city:"Nashik",state:"MH",pin:444444,lat:19.07,lon:73.09}]);
  const [buyer,setBuyer] = useState([{phone:9999999999,name:"Ram Chaudhary",comp:"Bio-Diesel company",addr:"Plot 50",city:"Nashik",state:"MH",pin:444444,lat:19.07,lon:73.09},{phone:9999999999,name:"Ram Chaudhary",comp:"My company",addr:"Plot 50",city:"Nashik",state:"MH",pin:444444,lat:19.07,lon:73.09}]);
  const [user,setUser] = useState({phone:8888888888,name:"You",comp:"Mula company",addr:"Plot 50",city:"Nashik",state:"MH",pin:444444,lat:19,lon:73});
  const [show,setShow] = useState(false);
  const [showMap,setMap] = useState(false);
  const [prop,setProp] = useState(["1","2",[0,0],[0,0]]);
  const [id,setId] = useState(0);
  const handleClose = () => setShow(false);
  const handleMap = (i) => {setProp(i);setMap(true);}
  const handleMapClose = () => setMap(false);

  return (
    <div className="justify-content-center overflow-auto" style={{marginRight:"2%"}}>
      
    <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Listing Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <div>
                      <Carousel>
                        <Carousel.Item interval={5000}>
                          <img
                            className="d-block"
                            src={`${listing[id].img1}`}
                            alt="First slide"
                            height="150px"
                            width="280px"
                          />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                          <img
                            className="d-block"
                            src={`${listing[id].img2}`}
                            alt="Second slide"
                            height="150px"
                            width="280px"
                          />
                        </Carousel.Item>
                      </Carousel>
                      </div>
                    </Col>
                    <Col>
                      <Table>
                        <thead>
                          <tr>
                            <th>{listing[id].name}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>₹{listing[id].price} / {listing[id].unit}</td>
                          </tr>
                          <tr>
                            <td>Min Qty: {listing[id].min} {listing[id].unit}</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                    <Col>
                      <Row className="justify-content-center">
                        <Button variant="warning" style={{width:"inherit"}}>{listing[id].type}</Button>
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
                                  {listing[id].properties.map(function (val, id) {
                                    return (
                                      <tr key={id}>
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
                              {listing[id].desc}
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </Row>
                    </Col>
                  </Row>
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showMap} onHide={handleMapClose}>
          <Modal.Header closeButton>
            <Modal.Title>Showing Mapping</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Map self={prop[0]} other={prop[1]} start={prop[2]} end={prop[3]}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

      <Container fluid>
        {data.map((item,id) => (
          <Order key={id} onMap={handleMap} onListing={()=>{setShow(true)}} order={item} user={user} buyer={buyer[id]} log={log[id]} logistics={logistics[id]}/>
        ))}
      </Container>
    </div>
  );
}

export default OrdersLayout;