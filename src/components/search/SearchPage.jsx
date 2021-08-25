import { Col, Container, Row } from "react-bootstrap";
import Navigationbar from "../navbar";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
import { useState } from "react";

const SearchPage = () => {

    const [data, updateData] = useState([])

    return ( 
        <div>
            <Navigationbar />
            <Container fluid="md">
                <Row style={{display:"flex"}}>
                    <Col style={{flex:"3", padding:"0"}}>
                        <LeftSide updateData={updateData}/>
                    </Col>
                    <Col style={{flex:"9"}}>
                        <div style={{padding:"4rem 0 2rem 2rem", fontSize:"1.2rem"}}>Showing results for <span style={{color:"#D6210E"}}>"Search Name"</span> from All Categories</div>
                        <RightSide data={data}/>
                    </Col>
                </Row>
            </Container>
        </div>
     );
}
 
export default SearchPage;