import { Container, Row, Col } from "react-bootstrap";
import styles from "../../../css/rightSide.module.css"
import Products from "../NewProducts/Products";

const ToolsAndEquipment = () => {
    return ( 
        <Container style={{backgroundColor:"#FEEEEE"}}>
            <Row >
                <div className="d-flex" style={{padding:"0"}}>
                    <div className={styles.selectors}>TOOLS AND EQUIPMENT</div>
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
     );
}
 
export default ToolsAndEquipment;