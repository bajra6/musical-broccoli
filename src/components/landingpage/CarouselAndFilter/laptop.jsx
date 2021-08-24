import { Container, Row, Col } from "react-bootstrap";
import Advertisement from "../Advertisement";
import BestSeller from "../BestSeller";
import Blog from "../Blog";
import Electronics from "../Electronics"
import Categories from "../Categories"
import HotProducts from "../HotProducts";
import ToolsAndEquipment from "../ToolsAndEquipment";
import OfferAdvertisement from "../Advertisement2"
import Banner from "../Banner";
import NewArrivals from "../NewArrivals";


const CarouselLaptop = () => {
    return (
        <Container fluid="md">
            <Row>
                <Col sm={3} md={3} style={{}}>
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
 
export default CarouselLaptop;