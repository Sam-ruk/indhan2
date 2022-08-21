import { useState,useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import bcrypt from 'bcryptjs'

function Login(props) {
  const [phone, setPhone] = useState(0); 
  const [pass, setPass] = useState(''); 
  const handleSubmit = async() => {
      fetch(`http://localhost:4000/users/${phone}/${pass}`,{method: 'GET'})
      .then(async (resp)=>{
        var x = await resp.json();
        if(x.status===true)
        {
           alert("You're Logged In.");
           props.onSuccess();
        }
        else
          alert("Your credentials are wrong. Please Login again.");
      });
}    

  return (
      <div className="container" style={{borderRadius: "25px",backgroundColor:"lightgreen",width:"40%"}}>
        <h4 style={{color:"green"}}>Sign In to your Account  </h4><br/>
         <Form onSubmit={(e)=>{e.preventDefault();handleSubmit()}}>
            <Form.Group className="mb-3" controlId="">
                <Form.Label style={{float:"left"}}>Phone</Form.Label>
                <Form.Control required type="number" min="6000000000" max="9999999999" defaultValue="0" onChange={(e)=>{setPhone(e.target.value)}} placeholder="Enter your Phone No."/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
                <Form.Label style={{float:"left"}}>Password</Form.Label>
                <Form.Control required type="password" defaultValue={pass} onChange={(e)=>{setPass(bcrypt.hashSync(e.target.value, '$2a$10$CwTycUXWue0Thq9StjUM0u'))}} placeholder="Enter your Password"/>
            </Form.Group>
            <br/>
            <Button variant="success" type="submit" onClick={()=>{}}>
              Sign In
            </Button>
            </Form>
      </div>
 );
}

export default Login;