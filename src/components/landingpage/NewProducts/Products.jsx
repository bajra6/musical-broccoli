import { Container } from "react-bootstrap";

const Products = () => {
    return ( 
        <div style={{padding: "0.5rem 0"}}>
            <img alt="items" src="./img/landingpage/p1.png" style={{ width:"100%", height:"100%", objectFit: "fill"}}/>
            <div>AgriPro 3 HP Butterfly</div>
            <div>stars</div>
            <div>$690.99 <strike>$720</strike></div>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <img alt="items" src="./img/landingpage/button1.png" style={{ maxWidth:"50%", objectFit: "fill"}}/>
                <img alt="items" src="./img/landingpage/button2.png" style={{ maxWidth:"50%", objectFit: "fill"}}/>
            </div>
        </div>
     );
}
 
export default Products;