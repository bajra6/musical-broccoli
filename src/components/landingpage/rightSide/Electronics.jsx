import { Container, Row, Col } from "react-bootstrap";
import Products from "../NewProducts/Products";
import styles from "../../../css/rightSide.module.css"

const Electronics = () => {
    return ( <div>
        
        <Container style={{backgroundColor:"#EFEFEF"}}>
            <Row >
                <div className="d-flex" style={{padding:"0"}}>
                    <div className={styles.selectors}>ELECTRONICS</div>
                    <div className="" style={{marginLeft:"auto"}}>
                        <button className={styles.toggleUnclicked}>&lt;</button>
                        <button className={styles.toggleClicked}>&gt;</button>
                    </div>
                </div>
            </Row>
            <Row>
                <Col xl={3} md={6} sm={6} className={styles.electronicProduct}><Products/></Col>
                <Col xl={3} md={6} sm={6} className={styles.electronicProduct}><Products/></Col>
                <Col xl={3} md={6} sm={6} className={styles.electronicProduct}><Products/></Col>
                <Col xl={3} md={6} sm={6} className={styles.electronicProduct}><Products/></Col>
            </Row>
        </Container>

        <div style={{backgroundColor: "#EFEFEF", padding: "0.5rem 1rem 1rem 1rem"}}>
            <Container fluid="true">
                <Row>
                    <Col xs={6} style={{padding:"1rem"}}>
                        <img alt="smol pic" src="./img/landingpage/smolimage1.png" className={styles.hw100objfill}></img>
                    </Col>
                    <Col xs={6} style={{padding:"1rem"}}>
                        <img alt="smol pic" src="./img/landingpage/smolimage2.png" className={styles.hw100objfill}></img>
                    </Col>
                </Row>
            </Container>
        </div>
    </div> );
}
 
export default Electronics;