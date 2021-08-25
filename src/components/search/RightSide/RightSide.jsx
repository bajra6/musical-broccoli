import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Products from "../../landingpage/NewProducts/Products";

const RightSide = (props) => {

    useEffect(() => {
        console.log(props.data)
    }, [props])

    return ( 
        <Container>
            <Row>
                {props.data.map((product) =>( 
                    <Col xl={3} sm={6} style={{border:"1px solid #EFEFEF"}}>
                        <Products img={product.img} name={product.name} price={product.price}/>
                    </Col>
                ))}
            </Row>
        </Container>
     );
}
 
export default RightSide;