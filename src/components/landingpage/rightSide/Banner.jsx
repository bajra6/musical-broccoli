import { Container, Row, Col } from "react-bootstrap";
import PageCarousel from "./Carousel";

const Banner = () => {

    const style={
        hw100objfill:{
            width:"100%", 
            height:"100%",
            objectFit: "fill"
        }
    }

    return ( 
        <Container fluid="true" style={{display:"flex", flexDirection:"column"}}>
            <Row style={{flex:"3"}}>
                <Col md={7} style={{padding:"0 0.5rem 0.5rem 0"}} ><PageCarousel /></Col>
                <Col md={5} style={{padding:"0 0 0.5rem 0"}}><img src="./img/landingpage/30sale.png" alt="" style={style.hw100objfill}/></Col>
            </Row>
            <Row style={{flex:"2"}}>
                <Col md={7} style={{padding:"0 0.5rem 0.5rem 0"}} >
                    <img src="./img/landingpage/pump.png" alt="" style={style.hw100objfill}/>
                    <img src="./img/landingpage/button1.png" alt="shop now" onClick={() => console.log("shop now")} style={{zIndex:"1000", margin:"-50% 0 0 40%", cursor:"pointer", maxWidth:"35%"}}></img>
                    </Col>
                <Col md={5} style={{padding:"0 0 0.5rem 0"}}>
                    <img src="./img/landingpage/factory.png" alt="" style={style.hw100objfill}/>
                    <img src="./img/landingpage/button1.png" alt="shop now" onClick={() => console.log("shop now")} style={{zIndex:"1000", margin:"-50% 0 0 37%", cursor:"pointer", maxWidth:"30%"}}></img>
                    </Col>
            </Row>
        </Container>
     );
}
 
export default Banner;