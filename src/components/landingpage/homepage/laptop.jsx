import { Container, Row, Col } from "react-bootstrap";
import Advertisement from "../leftSide/Advertisement";
import BestSeller from "../leftSide/BestSeller";
import Blog from "../leftSide/Blog";
import Electronics from "../rightSide/Electronics"
import Categories from "../leftSide/Categories"
import HotProducts from "../leftSide/HotProducts";
import ToolsAndEquipment from "../rightSide/ToolsAndEquipment";
import OfferAdvertisement from "../leftSide/Advertisement2"
import Banner from "../rightSide/Banner";
import NewArrivals from "../rightSide/NewArrivals";


const Laptop = () => {
    return (
        <Container fluid="md">
            <Row>
                <Col sm={3} md={3}>
                    <Categories />
                    <br />
                    <br />
                    <br />
                    <BestSeller/>
                    <br />
                    <br />
                    <Advertisement />
                    <br />
                    <br />
                    <br />
                    <HotProducts />
                    <br />
                    <Blog />
                    <br />
                    <OfferAdvertisement />
                </Col>


                <Col sm={9} md={9}>
                    <Banner/>
                    <br />
                    <br />
                    <NewArrivals/>
                    <br />
                    <br />
                    <Electronics/>
                    <br />
                    <br />
                    <ToolsAndEquipment />
                </Col>
            </Row>
        </Container>
    );
}
 
export default Laptop;