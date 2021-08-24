import { Container } from "react-bootstrap";

const Products = () => {
    return ( 
        <div style={{padding: "0.5rem 0"}}>
            <img alt="items" src="./img/landingpage/p1.png" style={{ width:"100%", height:"100%", objectFit: "fill"}}/>
            <div style={{padding:"1rem 0"}}>
                <div>AgriPro 3 HP Butterfly</div>
                <div>* * * * *</div>
                <div style={{fontSize:"1.3rem", color:"#D6210E"}}>$690.99 <strike style={{fontSize:"1rem", color:"#252527"}}>$720</strike></div>
                <div style={{display:"flex", justifyContent:"space-between", marginTop:"1rem"}}>
                    <img alt="items" src="./img/landingpage/button2.png" style={{ maxWidth:"48%", objectFit: "fill"}}/>
                    <img alt="items" src="./img/landingpage/button1.png" style={{ maxWidth:"48%", objectFit: "fill"}}/>
                </div>
            </div>
        </div>
     );
}
 
export default Products;