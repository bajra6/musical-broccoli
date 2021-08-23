import { Container, Row, Col } from "react-bootstrap"
import Products from "./NewProducts/Products"

const BestSellersAndNewArrivals = () => {
    return ( <div>
        <Container >
            <Row>
                <Col md={3}>
                    <div style={{backgroundColor:"#252525", display:"flex", justifyContent:"space-evenly", alignItems:"center", color:"white", flexDirection:"row"}}>
                        <img src="./img/landingpage/logo.png" alt="logo"/>
                        <div>BEST SELLER</div>
                        <div>
                            <span>&lt;</span>
                            <span>&gt;</span>
                        </div>
                    </div>
                    <Container fluid="true">
                        <Row style={{padding:"0.3rem"}}>
                            <Col xs={5}>
                                <img alt="product" src="./img/landingpage/p1.png" style={{height:"100%", width:"100%"}}/>
                            </Col>
                            <Col xs={7}>
                                <div>Name</div>
                                <div>Star</div>
                                <div>Price</div>
                            </Col>
                        </Row>
                        <Row style={{padding:"0.3rem"}}>
                            <Col xs={5}>
                                <img alt="product" src="./img/landingpage/p2.png" style={{height:"100%", width:"100%"}}/>
                            </Col>
                            <Col xs={7}>
                                <div>Name</div>
                                <div>Star</div>
                                <div>Price</div>
                            </Col>
                        </Row>
                        <Row style={{padding:"0.3rem"}}>
                            <Col xs={5}>
                                <img alt="product" src="./img/landingpage/p3.png" style={{height:"100%", width:"100%"}}/>
                            </Col>
                            <Col xs={7}>
                                <div>Name</div>
                                <div>Star</div>
                                <div>Price</div>
                            </Col>
                        </Row>

                    </Container>
                </Col>
                <Col md={9}>
                    <Container style={{backgroundColor:"#FEEEEE", height:'100%'}}>
                        <Row >
                            <div className="d-flex">
                                <div className="p-2">New Arrivals</div>
                                <div className="p-2">Discount Products</div>
                                <div className="ml-auto p-2" style={{marginLeft:"auto"}}>
                                    <span>&lt;</span>
                                    <span>&gt;</span>
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <Col lg={3} md={6} sm={6} style={{border: "1px solid white"}}><Products/></Col>
                            <Col lg={3} md={6} sm={6} style={{border: "1px solid white"}}><Products/></Col>
                            <Col lg={3} md={6} sm={6} style={{border: "1px solid white"}}><Products/></Col>
                            <Col lg={3} md={6} sm={6} style={{border: "1px solid white"}}><Products/></Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                    <img alt="advertisement" src="./img/landingpage/sideadv.png" style={{height:"100%", width:"100%", objectFit:"fill"}}></img>
                </Col>
                <Col md={9}>
                    <div style={{backgroundColor: "#FEEEEE", padding: "0.5rem 1rem 1rem 1rem", height:"100%"}}>
                        <img alt="big pic" src="./img/landingpage/bigimage.png" style={{height:"100%", width:"100%", objectFit:"fill"}}></img>
                    </div>
                </Col>
            </Row>
        </Container>
    </div> );
}
 
export default BestSellersAndNewArrivals;