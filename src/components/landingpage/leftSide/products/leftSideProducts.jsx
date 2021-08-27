import { Col } from "react-bootstrap";

const LeftSideProducts = (props) => {
    return (
        <>
            <Col xs={5}>
                <img alt="product" src={props.img} style={{height:"100%", width:"100%"}}/>
            </Col>
            <Col xs={7} style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
                <div>{props.name}</div>
                <div>* * * * *</div>
                <div>$ {props.price}</div>
            </Col>
        </>
     );
}
 
export default LeftSideProducts;