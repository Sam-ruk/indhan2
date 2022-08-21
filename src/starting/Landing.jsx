import NavBar from './components/Navbar';
import Container from 'react-bootstrap/Container';
import LandBeauty from './components/LandBeauty';
import SignUp from './SignUp';
import { Routes,Route } from "react-router-dom";
import Footer from './components/Footer';
import Login from './SignIn';
import { useNavigate } from "react-router-dom";

function Landing () {
    let navigate = useNavigate();

    const goDash = () => {
        navigate("/dashboard");
    };
   return (
    <div>
        <NavBar/>
        <br/>
        <Container style={{padding:"0px",marginTop:"70px"}}>
            <Routes>
                  <Route path="/" element={<LandBeauty/>}/>
                  <Route path="/signup" element={<SignUp onSuccess={goDash}/>}/>
                  <Route path="/signin" element={<Login onSuccess={goDash}/>}/>
            </Routes>
        </Container>
        <Footer/>  
    </div>
  );
}

export default Landing;
