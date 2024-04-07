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
      fetch(`https://indhan.netlify.app:4000/users/${phone}`,{method: 'GET'})
      .then(async (resp)=>{
        var x = await resp.json();
        if(x.status===true)
        {
           const response = await fetch(`https://indhan.netlify.app:4000/users`, {
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
                    props.onSuccess(type);
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
                  <option value="Pro">Bio-Fuel Tools/Machine Provider</option>
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
                    <option value="AP">Andhra Pradesh</option>
                    <option value="AD">Andaman and Nicobar Islands</option>
                    <option value="AN">Arunachal Pradesh</option>
                    <option value="AS">Assam</option>
                    <option value="BH">Bihar</option>
                    <option value="CH">Chandigarh</option>
                    <option value="CG">Chhattisgarh</option>
                    <option value="DN">Dadar and Nagar Haveli</option>
                    <option value="DD">Daman and Diu</option>
                    <option value="DE">Delhi</option>
                    <option value="LD">Lakshadweep</option>
                    <option value="PU">Puducherry</option>
                    <option value="GO">Goa</option>
                    <option value="GJ">Gujarat</option>
                    <option value="HY">Haryana</option>
                    <option value="HP">Himachal Pradesh</option>
                    <option value="JK">Jammu and Kashmir</option>
                    <option value="JH">Jharkhand</option>
                    <option value="KR">Karnataka</option>
                    <option value="KE">Kerala</option>
                    <option value="MP">Madhya Pradesh</option>
                    <option value="MH">Maharashtra</option>
                    <option value="MN">Manipur</option>
                    <option value="MG">Meghalaya</option>
                    <option value="MZ">Mizoram</option>
                    <option value="NG">Nagaland</option>
                    <option value="OD">Odisha</option>
                    <option value="PJ">Punjab</option>
                    <option value="RJ">Rajasthan</option>
                    <option value="SK">Sikkim</option>
                    <option value="TN">Tamil Nadu</option>
                    <option value="TG">Telangana</option>
                    <option value="TP">Tripura</option>
                    <option value="UP">Uttar Pradesh</option>
                    <option value="UK">Uttarakhand</option>
                    <option value="WB">West Bengal</option>
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