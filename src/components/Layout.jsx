import { useState,useEffect } from "react";
import ModalEditListItem from "../listing/ModalEditListItem";
import AnaLayout from "../analytics/AnaLayout";
import NavBar from "./Navbar";
import Sidebar from "./Sidebar";
import Listing from "../listing/Listing";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './media.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FileBase64 from 'react-file-base64';
import Table from 'react-bootstrap/Table';
import { Routes,Route } from "react-router-dom";

function Layout() {
  const [curr, setCurr] = useState(0);
  const [show, setShow] = useState(false);
  const handleCurr = (i) => {setCurr(i);}
  const handleClose = () => setShow(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [temp, setTemp] = useState([]);
  const [temp2, setTemp2] = useState([]);
  const handleEditClose = () => setShowEdit(false); 
  const [item, setItem] = useState(0);
  const handleShow = (i) => {setShow(true);setItem(i);};
  const [properties, setProps] = useState([[{prop:"Density",value:"20 kg/m3"},{prop:"Viscosity",value:"30%"}],[{prop:"Density",value:"30 kg/m3"},{prop:"Viscosity",value:"40%"}],[{prop:"Density",value:"40 kg/m3"},{prop:"Viscosity",value:"50%"}]]);
  const [data, setData] = useState([{name:"B100 Biodiesel",type:"Bio-Ethanol",price:45.78,unit:"Ltr",min:4000,
        stock:true, desc:"Our Biofuel is very clean and green.",img1:"/temp.png",img2:"/temp2.jpg"},{name:"B100 Biodiesel",type:"Bio-Diesel",price:45.78,unit:"Ltr",min:4000,
        stock:false, desc:"Our Biofuel is very clean and green.",img1:"/temp.png",img2:"/temp2.jpg"},{name:"B100 Biodiesel",type:"Bio-CNG",price:45.78,unit:"Ltr",min:4000,
        stock:true, desc:"Our Biofuel is very clean and green.",img1:"/temp.png",img2:"/temp2.jpg"}]);
  const handleDelete = (index) => {
        setData(data.filter((o, i) => index !== i));
        setProps(properties.filter((o, i) => index !== i));
        setShow(false);
        alert("Item Deleted");
  };
  const handleStock = async(id) =>{
        setTemp2([]);
        await data.map((obj,i) => {
            if (i === id) {
              const updatedItem = {
                ...obj,
                stock: !obj.stock,
              };
              setTemp2(temp2 => [...temp2, updatedItem]);
            }
            else{
            setTemp2(temp2 => [...temp2, obj]);}
          });
  }

  const handleSubmit = async(img1,img2,name,desc,prop,type,min,price,unit,stock) =>{
    setProps(properties => [...properties, prop]);
    setData(data => [...data, {"img1":img1,"img2":img2,"name":name,"desc":desc,"type":type,"min":min,"price":price,"unit":unit,"stock":stock}]);
  }

  useEffect(() => {
    if(temp2.length===data.length)
      setData(temp2); 
  },[temp2]);

  const handlePropEdit = async (prop,val) => {
      setTemp([]);
      const updated = properties[item].filter((o, i) => true);
      updated.push({"prop":prop,value:val});
      await properties.map((obj,id) => {
        if (id === item) {
          setTemp(temp => [...temp, updated]);
        }
        else{
        setTemp(temp => [...temp, obj]);}
      });
  };

  useEffect(() => { 
    if(temp.length===properties.length)
      setProps(temp); 
  },[temp]);

  const handleDelProp = async(index) => {
    setTemp([]);
    const updated = properties[item].filter((o, i) => index !== i);
    await properties.map((obj,id) => {
      if (id === item) {
        setTemp(temp => [...temp, updated]);
      }
      else{
      setTemp(temp => [...temp, obj]);}
    });
    alert("Property Deleted");
  };

  const handleEdit = (id) => {
        setItem(id);setShowEdit(true);
  };

   const handleNew = () => {
        setShowNew(true);
  };

  return (
    <div className="layout">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Deletion Notification</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure that you want to delete this item?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="danger" onClick={()=>{handleDelete(item)}}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
        <ModalEditListItem what="0" onPropEdit={handlePropEdit} prop={properties[item]} data={data[item]} onClose={()=>{setShowEdit(false)}} show={showEdit} onDelProp={handleDelProp} onSubmit={handleSubmit}/>
        <ModalEditListItem what="1" onPropEdit={handlePropEdit} prop={[]} data={{"img1":"","img2":"","name":"","desc":"","type":"","min":"","price":"","unit":""}} onClose={()=>{setShowNew(false)}} show={showNew} onDelProp={handleDelProp} onSubmit={handleSubmit}/>
        <NavBar style={{zIndex:"11",position:"relative"}}/>
        <Container style={{float:"left",position:"relative",marginTop:"70px"}}>
          <Row md={5} xs={1}>
            <Col style={{padding:"0"}}>
              <Sidebar curr={curr} onCurr={handleCurr}/>
            </Col>
            <Col className="bg-light custom-sm-width custom-lg-width custom-md-width justify-content-center overflow-auto">
              <Routes>
                  <Route path="*" element={<AnaLayout/>}/>
                  <Route path="listings" element={
                        <div>
                          { data.map(function (val, id) {
                             return (
                              <Listing onStock={()=>{console.log(val.img1);handleStock(id)}} onEdit={()=>{handleEdit(id)}} desc={val.desc} price={val.price} img1={val.img1} img2={val.img2} unit={val.unit} type={val.type} stock={val.stock} min={val.min} name={val.name} prop={properties[id]} key={id} onDelete={()=> {handleShow(id)}}/>
                            );
                          })}
                          <Button onClick={()=>{handleNew()}} variant="info" >+ Add Item</Button>
                        </div>
                      }
                      />
                  <Route path="orders"/>
                  <Route path="recent"/>
                  <Route path="profile"/>
                  <Route path="analytics" element={<AnaLayout/>}/>
                  <Route path="settings"/>
              </Routes>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default Layout;
