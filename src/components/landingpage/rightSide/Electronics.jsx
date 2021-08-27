import { Container, Row, Col } from "react-bootstrap";
import Products from "../NewProducts/Products";
import styles from "../../../css/rightSide.module.css";
import { useState, useEffect } from "react";

const Electronics = () => {

    const [next, updateNext] = useState(0)
    const [data, updateData] = useState([[]])

    useEffect(() => {
        //get data from server
        //update the array then.
        updateData([
            [{
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
            }],
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
    }, [next])

    return ( <div>
        
        <Container style={{backgroundColor:"#EFEFEF"}}>
            <Row >
                <div className="d-flex" style={{padding:"0"}}>
                    <div className={styles.selectors}>ELECTRONICS</div>
                    <div className="" style={{marginLeft:"auto"}}>
                        <button onClick={() => updateNext((next-1)%data.length)} className={styles.toggleUnclicked}>&lt;</button>
                        <button onClick={() => updateNext((next+1)%data.length)} className={styles.toggleClicked}>&gt;</button>
                    </div>
                </div>
            </Row>
            <Row>
                {data[Math.abs(next)].map((product) => (
                        <Col xl={3} md={6} sm={6} className={styles.electronicProduct}><Products name={product.name} img={product.img} price={product.price}/></Col>
                ))}    
            </Row>
        </Container>

        <div style={{backgroundColor: "#EFEFEF", padding: "0.5rem 1rem 1rem 1rem"}}>
            <Container fluid="true">
                <Row>
                    <Col xs={6} style={{padding:"1rem"}}>
                        <img alt="smol pic" src="./img/landingpage/smolimage1.png" className={styles.hw100objfill}></img>
                    </Col>
                    <Col xs={6} style={{padding:"1rem"}}>
                        <img alt="smol pic" src="./img/landingpage/smolimage2.png" className={styles.hw100objfill}></img>
                    </Col>
                </Row>
            </Container>
        </div>
    </div> );
}
 
export default Electronics;