import { useState, useEffect } from 'react';
import Counter from './Counter';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import BuyerMap from './BuyerMap';
import SellerMap from './SellerMap';
import Container from 'react-bootstrap/Container';

function LandBeauty () {
    const [buyer, setBuyer] = useState(0);
    const [seller, setSeller] = useState(0); 
    const [ethanol, setEthanol] = useState(0); 
    const [cng, setCng] = useState(0); 
    const [diesel, setDiesel] = useState(0); 
 
    useEffect(() => { 
        fetch(`https://indhan.netlify.app:4000/buyers`,{method: 'GET'})
          .then(async (resp)=>{
            var x = await resp.json();
            setBuyer(x.count);
          });
        fetch(`https://indhan.netlify.app:4000/sellers`,{method: 'GET'})
          .then(async (resp)=>{
            var x = await resp.json();
            setSeller(x.count);
          });
        fetch(`https://indhan.netlify.app:4000/ethanol`,{method: 'GET'})
          .then(async (resp)=>{
            var x = await resp.json();
            setEthanol(x.count);
          });
        fetch(`https://indhan.netlify.app:4000/diesel`,{method: 'GET'})
          .then(async (resp)=>{
            var x = await resp.json();
            setDiesel(x.count);
          });
        fetch(`https://indhan.netlify.app:4000/cng`,{method: 'GET'})
          .then(async (resp)=>{
            var x = await resp.json();
            setCng(x.count);
          });
      },[]);
    return(
        <div>
          <Col>
            <Row lg={2}>
                    <Col className="justify-content-center">
                        <img src="landing.png" style={{width:"100%", height:"413px"}}/>
                    </Col>
                    <Col >
                        <div className="justify-content-center">
                            <Carousel variant="light" style={{width:"100%",height:"90%"}}>
                                {[{img:"listing.jpg",text:"List Your Materials"},{img:"manage.jpg",text:"Manage Orders"},{img:"verified.jpg",text:"Verified Users"},{img:"secure.jpg",text:"Secure Payments"}].map((item)=>(
                                        <Carousel.Item interval={5000} style={{width:"100%"}}>
                                            <img
                                              className="d-block"
                                              src={item.img}
                                              alt="First slide"
                                              height="413px"
                                              width="100%"
                                              object-fit="cover"
                                            />
                                            <Carousel.Caption>
                                              <h5>{item.text}</h5>
                                            </Carousel.Caption>
                                      </Carousel.Item>
                                    ))
                                }
                            </Carousel>
                        </div>
                    </Col>
                </Row>
                <Row lg={5}>
                {[{count:seller,text:"Sellers"},{count:buyer,text:"Buyers"},{count:ethanol,text:"Ltr. Bioethanol Sold"},{count:diesel,text:"Ltr. Biodiesel"},{count:cng,text:"GGEs of BioCNG"}].map((item) => (
                    <Col>
                        <Card border="light">
                          <Card.Body>
                            <Card.Title>
                                <Counter time={item.count}/>
                            </Card.Title>
                            <Card.Text>
                              <h6>{item.text}</h6>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                    </Col>
                  ))}
                </Row>
                <Row>
                    <Container >
                        <Row lg={2}>
                            <Col>
                                <SellerMap />
                            </Col>
                            <Col>
                                <BuyerMap />
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Col>
        </div>
    );
}
 export default LandBeauty;