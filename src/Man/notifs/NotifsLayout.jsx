import { useState,useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Map from '../components/Map';
const state = {"AP":"Andhra Pradesh","AD":"Andaman and Nicobar Islands","AN":"Arunachal Pradesh","AS":"Assam","BH":"Bihar","CH":"Chandigarh","CG":"Chhattisgarh","DN":"Dadar and Nagar Haveli","DD":"Daman and Diu","DE":"Delhi","LD":"Lakshadweep","PU":"Puducherry","GO":"Goa","GJ":"Gujarat","HY":"Haryana","HP":"Himachal Pradesh","JK":"Jammu and Kashmir","JH":"Jharkhand","KR":"Karnataka","KE":"Kerala","MP":"Madhya Pradesh","MH":"Maharashtra","MN":"Manipur","MG":"Meghalaya","MZ":"Mizoram","NG":"Nagaland","OD":"Odisha","PJ":"Punjab","RJ":"Rajasthan","SK":"Sikkim","TN":"Tamil Nadu","TG":"Telangana","TP":"Tripura","UP":"Uttar Pradesh","UK":"Uttarakhand","WB":"West Bengal"};

function NotifsLayout() {
  const [data,setData] = useState([{senderName:"Bholu",senderType:"Man",read:true,msg:"Hey, I want to buy your fuel"},{senderName:"Bholu",senderType:"Man",read:false,msg:"Hey, I want to buy your fuel"}]);
  const [sender,setSender] = useState([{comp:"Bhola company",addr:"Plot 50",city:"Nashik",state:"MH",pin:444444,lat:19.07,lon:73.09},{comp:"My company",addr:"Plot 50",city:"Nashik",state:"MH",pin:444444,lat:19.07,lon:73.09}]);
  const [user,setUser] = useState({name:"Something",comp:"Mula company",addr:"Plot 50",city:"Nashik",state:"MH",pin:444444,lat:19,lon:73});
  const [show,setShow] = useState(false);
  const [id,setId] = useState(0);
  const handleClose = () => setShow(false);

  return (
    <div className="justify-content-center overflow-auto" style={{marginRight:"2%"}}>
      
    <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sender Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table striped bordered hover>
                <tbody>
                    <tr>
                      <td>Company Name</td>
                      <td>{sender[id].comp}</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>{sender[id].addr}</td>
                    </tr>
                    <tr>
                      <td>Pin-Code</td>
                      <td>{sender[id].pin}</td>
                    </tr>
                    <tr>
                      <td>City</td>
                      <td>{sender[id].city}</td>
                    </tr>
                    <tr>
                      <td>State</td>
                      <td>{state[sender[id].state]}</td>
                    </tr>
                </tbody>
              </Table>
              <Map self="You" other={data[id].senderName} start={[user.lat,user.lon]} end={[sender[id].lat,sender[id].lon]}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

      <Container fluid>
        {data.map((item,id) => (
          <Alert variant={item.read===false?"info":"light"}>
            {item.senderType==="Man"?"Bio-Fuel Manufacturer":item.senderType==="Pro"?"Bio-Fuel Tools/Machine Provider":item.senderType==="Mat"?"Bio-Mass/Waste Provider":item.senderType==="Con"?"Bio-Fuel Consumer":"Logistics Provider"} 
              : {item.senderName} has a message for you
                <Accordion defaultActiveKey="" style={{marginTop:"2%",marginLeft:"10%",marginRight:"10%"}}>
                    <Accordion.Item eventKey={id}>
                      <Accordion.Header>View Message</Accordion.Header>
                      <Accordion.Body>
                        <Row>
                          <Col>{item.msg}</Col>
                          <Col>
                            <Button variant="primary" onClick={()=>{setId(id);setShow(true);}}>
                             View Sender Profile
                             </Button>
                          </Col>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
          </Alert>
        ))}
      </Container>
    </div>
  );
}

export default NotifsLayout;