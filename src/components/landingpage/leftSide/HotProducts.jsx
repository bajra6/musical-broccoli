import styles from "../../../css/leftSide.module.css"
import LeftSideProducts from "./products/leftSideProducts";
import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";

const HotProducts = () => {

    const [data, updateData] = useState([[]])
    const [next, updateNext] = useState(0)

    useEffect(() => {
        //get data from server depending on the req new arrival/ discount
        //update the array then.
        updateData([
            [
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
                },
                {
                    name:"AgriPro3 HP Butterfly",
                    img:"./img/landingpage/p4.png",
                    price:"690.99"
                }
            ],
            [
                {
                    name:"AgriPro3 HP Butterfly",
                    img:"./img/landingpage/p4.png",
                    price:"690.99"
                },
                {
                    name:"AgriPro3 HP Butterfly",
                    img:"./img/landingpage/p3.png",
                    price:"690.99"
                },
                {
                    name:"AgriPro3 HP Butterfly",
                    img:"./img/landingpage/p2.png",
                    price:"690.99"
                },
                {
                    name:"AgriPro3 HP Butterfly",
                    img:"./img/landingpage/p1.png",
                    price:"690.99"
                }
            ]
        ])
    }, [])

    return ( 
        <div>
            <div className={styles.header}>
                <img src="./img/landingpage/logo.png" alt="logo"/>
                <div>HOT PRODUCTS</div>
                <div>
                    <span onClick={() => updateNext((next-1)%data.length)} className="carousel-control-prev-icon" style={{maxHeight:"1rem", cursor:"pointer"}}></span>
                    <span onClick={() => updateNext((next+1)%data.length)} className="carousel-control-next-icon" style={{maxHeight:"1rem", cursor:"pointer"}}></span>
                </div>
            </div>
            <Container fluid="true">
                <Row style={{padding:"0.5rem"}}>
                {data[Math.abs(next)].map((product) => (
                        <LeftSideProducts name={product.name} img={product.img} price={product.price}/>
                ))} 
                </Row>
            </Container>
        </div>
     );
}
 
export default HotProducts;