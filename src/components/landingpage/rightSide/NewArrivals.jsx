import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../../css/rightSide.module.css"
import Products from "../NewProducts/Products";

const NewArrivals = () => {

    const [clicked, changeClicked] = useState("newarrival")
    const [next, updateNext] = useState(0)
    const [data, updateData] = useState([[]])

    useEffect(() => {
        // console.log(clicked)
        //get data from server depending on the req new arrival/ discount
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
    }, [clicked, next])

    return ( 
        <div>
            <Container style={{backgroundColor:"#FEEEEE"}}>
                <Row >
                    <div className="d-flex" style={{padding:"0"}}>
                        <div onClick={() => changeClicked("newarrival")} className={clicked==="newarrival"?styles.selectors:styles.selectorsUnselected}>NEW ARRIVAL</div>
                        <div onClick={() => changeClicked("discountproducts")} className={clicked==="discountproducts"?styles.selectors:styles.selectorsUnselected}>DISCOUNT PRODUCTS</div>
                        <div className="" style={{marginLeft:"auto"}}>
                            <button onClick={() => updateNext((next-1)%data.length)} className={styles.toggleUnclicked}>&lt;</button>
                            <button onClick={() => updateNext((next+1)%data.length)} className={styles.toggleClicked}>&gt;</button>
                        </div>
                    </div>
                </Row>
                <Row>
                    {data[next].map((product) => (
                        <Col xl={3} md={6} sm={6} className={styles.electronicProduct}><Products name={product.name} img={product.img} price={product.price}/></Col>
                    ))}
                </Row>
            </Container>

            <div style={{backgroundColor: "#FEEEEE", padding: "0.5rem 1rem 1rem 1rem"}}>
                <img alt="big pic" src="./img/landingpage/bigimage.png" className={styles.hw100objfill}></img>
            </div>
        </div>
     );
}
 
export default NewArrivals;