import { useState,useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Sales from './Sales';
import Earning from './Earning';
import Map from './Map';

function AnaLayout() {
  return (
    <div>
      <Container fluid>
        <Col>
          <Row lg={2} xs={1}>
            <Col className="p-3">
              <Card>
                <Card.Header style={{fontSize:"30px",fontFamily: "Noto Sans",backgroundColor:"white"}}>Monthly Sales</Card.Header>
                <Card.Body>
                  <Sales/>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-3">
              <Card>
                <Card.Header style={{fontSize:"30px",fontFamily: "Noto Sans",backgroundColor:"white"}}>Annual Earnings</Card.Header>
                <Card.Body>
                  <Earning/>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="p-3">
            <Card>
                <Card.Header style={{fontSize:"30px",fontFamily: "Noto Sans",backgroundColor:"white"}}>Buyers' Analytics</Card.Header>
                  <Map/>
              </Card>
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default AnaLayout;