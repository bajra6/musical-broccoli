import { Container, Row, Col } from "react-bootstrap";
import Products from "./NewProducts/Products";

const Electronics = () => {
    return ( <div>
        
        <Container style={{backgroundColor:"#EFEFEF"}}>
            <Row >
                <div className="d-flex" style={{padding:"0"}}>
                    <div className="" style={{backgroundColor:"#D6210E", margin:"0.5rem 0.5rem 0 0", color:"white", borderRadius:"0.2rem 0.2rem 0 0", padding:"0.5rem 1.5rem"}}>ELECTRONICS</div>
                    <div className="" style={{marginLeft:"auto"}}>
                        <button style={{backgroundColor: "white", fontSize:"1.5rem", border: "none", color: "#252527", borderRadius:"0.2rem",  padding: "0rem 0.8rem", margin:"0.5rem 0.5rem 0 0",  textAlign: "center", textDecoration: "none", display: "inline-block"}}>&lt;</button>
                        <button style={{backgroundColor: "#D6210E", fontSize:"1.5rem", border: "none", color: "#FFEFEF", borderRadius:"0.2rem",  padding: "0rem 0.8rem", margin:"0.5rem 0 0 0",  textAlign: "center", textDecoration: "none", display: "inline-block"}}>&gt;</button>
                    </div>
                </div>
            </Row>
            <Row>
                <Col xl={3} md={6} sm={6} style={{border: "1px solid white"}}><Products/></Col>
                <Col xl={3} md={6} sm={6} style={{border: "1px solid white"}}><Products/></Col>
                <Col xl={3} md={6} sm={6} style={{border: "1px solid white"}}><Products/></Col>
                <Col xl={3} md={6} sm={6} style={{border: "1px solid white"}}><Products/></Col>
            </Row>
        </Container>

        <div style={{backgroundColor: "#EFEFEF", padding: "0.5rem 1rem 1rem 1rem"}}>
            <Container fluid="true">
                <Row>
                    <Col xs={6} style={{padding:"1rem"}}>
                        <img alt="smol pic" src="./img/landingpage/smolimage1.png" style={{height:"100%", width:"100%", objectFit:"fill"}}></img>
                    </Col>
                    <Col xs={6} style={{padding:"1rem"}}>
                        <img alt="smol pic" src="./img/landingpage/smolimage2.png" style={{height:"100%", width:"100%", objectFit:"fill"}}></img>
                    </Col>
                </Row>
            </Container>
        </div>
    </div> );
}
 
export default Electronics;