import Counter from './Counter';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import BuyerMap from './BuyerMap';
import SellerMap from './SellerMap';
import Container from 'react-bootstrap/Container';

function LandBeauty () {
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
                {[{count:20,text:"Sellers"},{count:30,text:"Buyers"},{count:2500,text:"Ltr. Bioethanol Sold"},{count:1200,text:"Ltr. Biodiesel"},{count:1300,text:"GGEs of BioCNG"}].map((item) => (
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