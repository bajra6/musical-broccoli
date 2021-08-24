import { Container, Row, Col } from "react-bootstrap";
import PageCarousel from "./Carousel";

const Banner = () => {
    return ( 
        <Container fluid="true" style={{display:"flex", flexDirection:"column"}}>
            <Row style={{flex:"3"}}>
                <Col md={7} style={{padding:"0 0.5rem 0.5rem 0"}} ><PageCarousel /></Col>
                <Col md={5} style={{padding:"0 0 0.5rem 0"}}><img src="./img/landingpage/30sale.png" alt="" style={{display:"block", width:"100%", height:"100%", objectFit: "fill"}}/></Col>
            </Row>
            <Row style={{flex:"2"}}>
                <Col md={7} style={{padding:"0 0.5rem 0.5rem 0"}} ><img src="./img/landingpage/pump.png" alt="" style={{display:"block", width:"100%", height:"100%", objectFit: "fill"}}/></Col>
                <Col md={5} style={{padding:"0 0 0.5rem 0"}}><img src="./img/landingpage/factory.png" alt="" style={{display:"block", width:"100%", height:"100%", objectFit: "fill"}}/></Col>
            </Row>
        </Container>
     );
}
 
export default Banner;