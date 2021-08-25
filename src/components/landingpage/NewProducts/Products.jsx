const Products = (props) => {

    return ( 
        <div style={{padding: "0.5rem 0"}}>
            <img alt="items" src={props.img} style={{ width:"100%", height:"100%", objectFit: "fill"}}/>
            <div style={{padding:"1rem 0"}}>
                <div>{props.name}</div>
                <div>* * * * *</div>
                <div style={{fontSize:"1.3rem", color:"#D6210E"}}>${props.price} <strike style={{fontSize:"1rem", color:"#252527"}}>$720</strike></div>
                <div style={{display:"flex", justifyContent:"space-between", marginTop:"1rem"}}>
                    <img alt="items" onClick={() => console.log("added to cart")} src="./img/landingpage/button2.png" style={{ maxWidth:"48%", objectFit: "fill", cursor:"pointer"}}/>
                    <img alt="items" onClick={() => console.log("buy now")} src="./img/landingpage/button1.png" style={{ maxWidth:"48%", objectFit: "fill", cursor:"pointer"}}/>
                </div>
            </div>
        </div>
     );
}
 
export default Products;