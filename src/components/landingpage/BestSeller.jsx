import { Container, Row, Col } from "react-bootstrap";

const BestSeller = () => {
    return ( 
        <div>
            <div style={{backgroundColor:"#252525", display:"flex", justifyContent:"space-between", alignItems:"center", color:"white", flexDirection:"row", padding:"0.2rem 0.6rem"}}>
                <img src="./img/landingpage/logo.png" alt="logo"/>
                <div>BEST SELLER</div>
                <div>
                    <span className="carousel-control-prev-icon" style={{maxHeight:"1rem"}}></span>
                    <span className="carousel-control-next-icon" style={{maxHeight:"1rem"}}></span>
                </div>
            </div>
            <Container fluid="true">
            <Row style={{padding:"0.5rem"}}>
                    <Col xs={5}>
                        <img alt="product" src="./img/landingpage/p1.png" style={{height:"100%", width:"100%"}}/>
                    </Col>
                    <Col xs={7} style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
                        <div>AgriPro 3 HP Butterfly</div>
                        <div>* * * * *</div>
                        <div>$720</div>
                    </Col>
                </Row>
                <Row style={{padding:"0.5rem"}}>
                    <Col xs={5}>
                        <img alt="product" src="./img/landingpage/p2.png" style={{height:"100%", width:"100%"}}/>
                    </Col>
                    <Col xs={7} style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
                        <div>AgriPro 3 HP Butterfly</div>
                        <div>* * * * *</div>
                        <div>$720</div>
                    </Col>
                </Row>
                <Row style={{padding:"0.5rem"}}>
                    <Col xs={5}>
                        <img alt="product" src="./img/landingpage/p3.png" style={{height:"100%", width:"100%"}}/>
                    </Col>
                    <Col xs={7} style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
                        <div>AgriPro 3 HP Butterfly</div>
                        <div>* * * * *</div>
                        <div>$720</div>
                    </Col>
                </Row>
            </Container>
        </div>
     );
}
 
export default BestSeller;