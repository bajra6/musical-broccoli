import { Container, Row } from "react-bootstrap";
import styles from "../../../css/leftSide.module.css"
import LeftSideProducts from "./products/leftSideProducts";
import { useState, useEffect } from "react";

const BestSeller = () => {
    
    const [clicked, changeClicked] = useState("newarrival")
    const [data, updateData] = useState([])

    useEffect(() => {
        // console.log(clicked)
        //get data from server depending on the req new arrival/ discount
        //update the array then.
        updateData([
            {
                name:"AgriPro3 HP Butterfly",
                img:"./img/landingpage/p1.png",
                price:"690.99"
            },
            {
                name:"AgriPro3 HP Butterfly",
                img:"./img/landingpage/p2.png",
                price:"690.99"
            },
            {
                name:"AgriPro3 HP Butterfly",
                img:"./img/landingpage/p3.png",
                price:"690.99"
            }
        ])
    }, [clicked])

    return ( 
        <div>
            <div className={styles.header}>
                <img src="./img/landingpage/logo.png" alt="logo"/>
                <div>BEST SELLER</div>
                <div>
                    <span onClick={() => {}} className="carousel-control-prev-icon" style={{maxHeight:"1rem", cursor:"pointer"}}></span>
                    <span onClick={() => {}} className="carousel-control-next-icon" style={{maxHeight:"1rem", cursor:"pointer"}}></span>
                </div>
            </div>
            <Container fluid="true">
                {data.map((product) => (
                    <Row style={{padding:"0.5rem"}}>
                        <LeftSideProducts name={product.name} img={product.img} price={product.price}/>
                    </Row>
                    ))}    
            </Container>
        </div>
     );
}
 
export default BestSeller;