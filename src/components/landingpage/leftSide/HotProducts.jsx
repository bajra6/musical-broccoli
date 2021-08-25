import styles from "../../../css/leftSide.module.css"
import LeftSideProducts from "./products/leftSideProducts";
import { Container, Row } from "react-bootstrap";

const HotProducts = () => {
    return ( 
        <div>
            <div className={styles.header}>
                <img src="./img/landingpage/logo.png" alt="logo"/>
                <div>HOT PRODUCTS</div>
                <div>
                    <span className="carousel-control-prev-icon" style={{maxHeight:"1rem"}}></span>
                    <span className="carousel-control-next-icon" style={{maxHeight:"1rem"}}></span>
                </div>
            </div>
            <Container fluid="true">
                <Row style={{padding:"0.5rem"}}>
                    <LeftSideProducts img="./img/landingpage/p1.png" pname="AgriPro 3 HP Butterfly" price="$720"/>
                </Row>
                <Row style={{padding:"0.5rem"}}>
                    <LeftSideProducts img="./img/landingpage/p2.png" pname="AgriPro 3 HP Butterfly" price="$720"/>
                </Row>
                <Row style={{padding:"0.5rem"}}>
                    <LeftSideProducts img="./img/landingpage/p3.png" pname="AgriPro 3 HP Butterfly" price="$720"/>
                </Row>
                <Row style={{padding:"0.5rem"}}>
                    <LeftSideProducts img="./img/landingpage/p4.png" pname="AgriPro 3 HP Butterfly" price="$720"/>
                </Row>
            </Container>
        </div>
     );
}
 
export default HotProducts;