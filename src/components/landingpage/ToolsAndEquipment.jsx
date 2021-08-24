import { Container, Row, Col } from "react-bootstrap";
import Products from "./NewProducts/Products";

const ToolsAndEquipment = () => {
    return ( 
        <Container style={{backgroundColor:"#FEEEEE"}}>
            <Row >
                <div className="d-flex" style={{padding:"0"}}>
                    <div className="" style={{backgroundColor:"#D6210E", margin:"0.5rem 0.5rem 0 0", color:"white", borderRadius:"0.2rem 0.2rem 0 0", padding:"0.5rem 1.5rem"}}>TOOLS AND EQUIPMENT</div>
                    <div className="" style={{marginLeft:"auto"}}>
                        <button style={{backgroundColor: "white", fontSize:"1.5rem", border: "none", color: "#252527", borderRadius:"0.2rem",  padding: "0rem 0.8rem", margin:"0.5rem 0.5rem 0 0",  textAlign: "center", textDecoration: "none", display: "inline-block"}}>&lt;</button>
                        <button style={{backgroundColor: "#D6210E", fontSize:"1.5rem", border: "none", color: "#EFEFEF", borderRadius:"0.2rem",  padding: "0rem 0.8rem", margin:"0.5rem 0 0 0",  textAlign: "center", textDecoration: "none", display: "inline-block"}}>&gt;</button>
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
     );
}
 
export default ToolsAndEquipment;