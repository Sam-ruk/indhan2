import { useState,useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FileBase64 from 'react-file-base64';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalEditListItem(props) {
  const [img1, setImg1] = useState(''); 
  const [img2, setImg2] = useState(''); 
  const [name, setName] = useState(''); 
  const [desc, setDesc] = useState(''); 
  const [type, setType] = useState(''); 
  const [min, setMin] = useState(0.0); 
  const [price, setPrice] = useState(0.0); 
  const [unit, setUnit] = useState('');
  const [properties, setProps] = useState([]);
  const [temp, setTemp] = useState([]);
  const [prop,setProp] = useState(''); 
  const [value,setValue] = useState(''); 

  const handlePropEdit = async () => {
    alert("Property Added.");
    setProps(properties => [...properties, {"prop":prop,"value":value}]);
  };

  const handleDelProp = async(index) => {
    await properties.map((obj,id) => {
      if (id !== index){
      setTemp(temp => [...temp, obj]);}
    });
  };

  const validate = () => {
    if(img1==='')
    {
      alert("Please Select Image 1");
      return false;
    }
    else if(img2==='')
    {
      alert("Please Select Image 2");
      return false;
    }
    else if(type==='')
    {
      alert("Please Select the Type of Bio-Fuel");
      return false;
    }
    else if(properties.length===0)
    {
      alert("Please Enter Some Properties");
      return false;
    }
    else if(properties.length!==0)
    {  return true; } 
  };

 useEffect(() => { 
    if(temp.length===properties.length-1)
      setProps(temp); 
  },[temp]);

  return (
  <Modal show={props.show} onHide={props.onClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit List Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row lg={2} className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label as={Row} >Image 1
                    <img
                      src={img1===''?props.data.img1:img1}
                      height="50px"
                      style={{width:"80px"}}
                    />
                  </Form.Label>
                  <FileBase64 required as={Row} multiple={false} onDone={(event) =>{setImg1(event.base64)} } />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label as={Row}>Image 2
                    <img
                      src={img2===''?props.data.img2:img2}
                      height="50px"
                      style={{width:"80px"}}
                    />
                  </Form.Label>
                  <FileBase64 required as={Row} multiple={false} onDone={(event) =>{setImg2(event.base64)} } />
                </Form.Group>
              </Row>
              <Form.Group controlId="">
                  <Form.Label>Type</Form.Label>
                  <Form.Select required defaultValue={props.data.type} onChange={(e)=>{setType(e.target.value)}}>
                    <option>Select</option>
                    <option>Bio-Ethanol</option>
                    <option>Bio-Diesel</option>
                    <option>Bio-CNG</option>
                  </Form.Select>
                </Form.Group>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Name</Form.Label>
                <Form.Control required type="text" defaultValue={props.data.name} onChange={(e)=>{setName(e.target.value)}} placeholder="B100 Bio-Diesel"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Description</Form.Label>
                <Form.Control required type="text" defaultValue={props.data.desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder="Our fuel is made from _ , in accordance with _ practices..."/>
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="">
                  <Form.Label>Price in ₹</Form.Label>
                  <Form.Control required min="0" type="number" step="0.01" defaultValue={props.data.price} onChange={(e)=>{setDesc(parseFloat(e.target.value))}} placeholder="90"/>
                </Form.Group>

                <Form.Group as={Col} controlId="">
                  <Form.Label>Unit</Form.Label>
                  <Form.Control required type="text" defaultValue={props.data.unit} onChange={(e)=>{setUnit(e.target.value)}} placeholder="Tonnes/Litres"/>
                </Form.Group>

                <Form.Group as={Col} controlId="">
                  <Form.Label>Min Order Qty</Form.Label>
                  <Form.Control required min="0" type="number" step="1" defaultValue={props.data.min} onChange={(e)=>{setMin(parseFloat(e.target.value))}} placeholder="2000"/>
                </Form.Group>
              </Row>
              <br/>
              {props.what===0?
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
                    <td>
                      <Button key={id} variant="danger" onClick={(e)=>{if(props.what===0){e.persist();props.onDelProp(id)}}}>
                          Delete
                      </Button>
                    </td>
                  </tr>
                );})}
                </tbody>
              </Table> :
              <></>}
              <Row lg={3} className="mb-3">
                <Form.Group as={Col} controlId="">
                  <Form.Label>Property Name</Form.Label>
                  <Form.Control required type="text" defaultValue={prop} onChange={(e)=>{setProp(e.target.value)}} placeholder="Density" />
                </Form.Group>

                <Form.Group as={Col} controlId="">
                  <Form.Label>Value</Form.Label>
                  <Form.Control required type="text" defaultValue={value} onChange={(e)=>{setValue(e.target.value)}} placeholder="20 kg/m3"/>
                </Form.Group>

                <Button style={{width:"30%"}} variant="success" onClick={(e)=>{if(props.what===0){e.persist();props.onPropEdit(prop,value)}else{handlePropEdit()}}}>
                    Add Property
                </Button>
              </Row>
              <br/>
              <Button variant="primary" type="submit" onClick={()=>{if(validate()){props.onSubmit(img1,img2,name,desc,properties,type,min,price,unit,true)}}}>
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
 );
}

export default ModalEditListItem;