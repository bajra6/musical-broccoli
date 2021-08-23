import { Container, Row, Col } from "react-bootstrap";
import PageCarousel from "../Carousel";
import styles from "../../../css/laptopCarousel.module.css"

const CarouselLaptop = () => {
    return (
        <Container>
            <Row>
                <Col md={3} style={{}}>
                    <div style={{backgroundColor:"#EFEFEF", padding: "1rem", height:"100%", display: "flex", justifyContent:"space-evenly", flexDirection:"column", }}>
                        <h5><b>All Categories</b></h5>
                        <div className={styles.filters}>Power Tools</div>
                        <div className={styles.filters}>Automative Maintenance</div>
                        <div className={styles.filters}>Office Supplies</div>
                        <div className={styles.filters}>Pump</div>
                        <div className={styles.filters}>Safety</div>
                        <div className={styles.filters}>Cleaning</div>
                        <div className={styles.filters}>Agriculture Garden and Lands</div>
                        <div className={styles.filters}>Testing and Measuring</div>
                        <div className={styles.filters}>Solar</div>
                        <div className={styles.filters}>Electrical</div>
                        <div className={styles.filters}>Medical Supplies</div>
                        <div className={styles.filters}>Hand Tools</div>
                        <div className={styles.filters}>More   +</div>
                    </div>
                </Col>
                <Col md={9}>
                    <Container fluid="true" style={{height:"100%", display:"flex", flexDirection:"column"}}>
                        <Row style={{flex:"3"}}>
                            <Col md={7} style={{padding:"0 0.5rem 0.5rem 0"}} ><PageCarousel /></Col>
                            <Col md={5} style={{padding:"0 0 0.5rem 0"}}><img src="./img/landingpage/30sale.png" alt="" style={{display:"block", width:"100%", height:"100%", objectFit: "fill"}}/></Col>
                        </Row>
                        <Row style={{flex:"2"}}>
                            <Col md={7} style={{padding:"0 0.5rem 0.5rem 0"}} ><img src="./img/landingpage/pump.png" alt="" style={{display:"block", width:"100%", height:"100%", objectFit: "fill"}}/></Col>
                            <Col md={5} style={{padding:"0 0 0.5rem 0"}}><img src="./img/landingpage/factory.png" alt="" style={{display:"block", width:"100%", height:"100%", objectFit: "fill"}}/></Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}
 
export default CarouselLaptop;