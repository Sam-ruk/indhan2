import { useState,useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import bcrypt from 'bcryptjs';

function SignUp(props) {
  const [name, setName] = useState('');
  const [toggle, setToggle] = useState(false); 
  const [phone, setPhone] = useState(0); 
  const [pass, setPass] = useState(''); 
  const [type, setType] = useState(''); 
  const [comp, setComp] = useState(''); 
  const [num, setNum] = useState(''); 
  const [addr, setAddr] = useState(''); 
  const [city, setCity] = useState('');
  const [pin, setPin] = useState(0);
  const [state, setState] = useState('');

   const handleSubmit = async() => {
      fetch(`http://localhost:4000/users/${phone}`,{method: 'GET'})
      .then(async (resp)=>{
        var x = await resp.json();
        if(x.status===true)
        {
           const response = await fetch(`http://localhost:4000/users`, {
                body: JSON.stringify({ 
                  "name":name,"phone":phone,"pass":pass, 
                  "type":type,"comp":comp,"num":num,"addr":addr, 
                  "city":city,"pin":pin,"state":state
                }),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
            }).then(async (resp)=>{
                x = await resp.json();
                if(x.status===true)
                {
                    alert("You're Logged In.");
                    props.onSuccess();
                }
                else
                  alert("Some Error Occurred. Please Register Again.");
           });
        }
        else
          alert("Phone Number Already Registered. Please Login or Register using another number.");
      });
}

  return (
      <div className="container" style={{borderRadius: "25px",backgroundColor:"lightgreen",width:"40%"}}>
        <h4 style={{color:"green"}}>🍃Sign Up with Us🍃  </h4><br/>
          <Form onSubmit={(e)=>{e.preventDefault();handleSubmit()}}>
            <Form.Group className="mb-3" controlId="">
                <Form.Label style={{float:"left"}}>Name</Form.Label>
                <Form.Control required type="text" defaultValue={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter your Full Name"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
                <Form.Label style={{float:"left"}}>Phone</Form.Label>
                <Form.Control required type="number" min="6000000000" max="9999999999" defaultValue="0" onChange={(e)=>{setPhone(e.target.value)}} placeholder="Enter your Phone No."/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
                <Form.Label style={{float:"left"}}>Password</Form.Label>
                <Form.Control required type={toggle===true?"text":"password"} defaultValue={pass} onChange={(e)=>{setPass(bcrypt.hashSync(e.target.value, '$2a$10$CwTycUXWue0Thq9StjUM0u'))}} placeholder="Enter your Password"/>
                        <i onClick={()=>{setToggle(!toggle)}} className={toggle ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label style={{float:"left"}}>User Type</Form.Label>
                <Form.Control as="select" required aria-required="true" onChange={(e)=>{setType(e.target.value)}}>
                  <option value="" selected disabled>Select</option>
                  <option value="Man">Bio-Fuel Manufacturer</option>
                  <option value="Mat">Bio-Mass/Waste Provider</option>
                  <option value="Con">Bio-Fuel Consumer</option>
                  <option value="Log">Logistics Provider</option>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
                <Form.Label style={{float:"left"}}>Company Name</Form.Label>
                <Form.Control required type="text" defaultValue={comp} onChange={(e)=>{setComp(e.target.value)}} placeholder="Enter your Company or Farm's Name"/>
            </Form.Group> 
            <Form.Group className="mb-3" controlId="">
                <Form.Label style={{float:"left"}}>Registered Number</Form.Label>
                <Form.Control required type="text" defaultValue={num} onChange={(e)=>{setNum(e.target.value)}} placeholder="Company Registered No. or Aadhar"/>
            </Form.Group>  
            <Form.Group className="mb-3" controlId="">
                <Form.Label style={{float:"left"}}>Address</Form.Label>
                <Form.Control required type="text" defaultValue={addr} onChange={(e)=>{setAddr(e.target.value)}} placeholder="Enter your Address"/>
            </Form.Group>
            <Row lg={3}>
              <Form.Group className="mb-3" controlId="">
                  <Form.Label style={{float:"left"}}>City</Form.Label>
                  <Form.Control required type="text" defaultValue={city} onChange={(e)=>{setCity(e.target.value)}} placeholder="City"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="">
                  <Form.Label style={{float:"left"}}>Pin Code</Form.Label>
                  <Form.Control required type="number" min="222222" max="999999" defaultValue={pin} onChange={(e)=>{setPin(e.target.value)}} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="">
                <Form.Label style={{float:"left"}}>State</Form.Label>
                  <Form.Control as="select" required aria-required="true" onChange={(e)=>{setState(e.target.value)}}>
                    <option value="" selected disabled>Select</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                  </Form.Control>
              </Form.Group>
            </Row>
            <br/>
            <Button variant="success" type="submit">
              Sign Up
            </Button>
            </Form>
      </div>
 );
}

export default SignUp;