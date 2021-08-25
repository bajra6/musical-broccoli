import { Container, Row } from "react-bootstrap";
import styles from "../../../css/leftSide.module.css"
import LeftSideProducts from "./products/leftSideProducts";

const BestSeller = () => {
    return ( 
        <div>
            <div className={styles.header}>
                <img src="./img/landingpage/logo.png" alt="logo"/>
                <div>BEST SELLER</div>
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
            </Container>
        </div>
     );
}
 
export default BestSeller;