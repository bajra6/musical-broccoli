import { Container, Row, Col } from "react-bootstrap";
import styles from "../../../css/rightSide.module.css"
import Products from "../NewProducts/Products";

const NewArrivals = () => {
    return ( 
        <div>
            <Container style={{backgroundColor:"#FEEEEE"}}>
                <Row >
                    <div className="d-flex" style={{padding:"0"}}>
                        <div className={styles.selectors}>NEW ARRIVAL</div>
                        <div className={styles.selectorsUnselected}>DISCOUNT PRODUCTS</div>
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

            <div style={{backgroundColor: "#FEEEEE", padding: "0.5rem 1rem 1rem 1rem"}}>
                <img alt="big pic" src="./img/landingpage/bigimage.png" className={styles.hw100objfill}></img>
            </div>
        </div>
     );
}
 
export default NewArrivals;