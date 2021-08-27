import { useState, useEffect } from "react";
import { BsChevronRight, BsChevronUp, BsX } from "react-icons/bs"
import { useLocation } from "react-router";

const LeftSide = ({ updateData }) => {

    const [categories, clickCategory] = useState(false)
    const [price, clickPrice] = useState(false)
    const [machine, clickMachine] = useState(false)
    const [brand, clickBrand] = useState(false)
    const [discount, clickDiscount] = useState(false)
    const [size, clickSize] = useState(false)
    const [filter1, clickFilter1] = useState(true)
    const [filter2, clickFilter2] = useState(true)
    const [filter3, clickFilter3] = useState(true)

    const [filters, updateFilters] = useState()

    useEffect(() => {
        // make requests and API calls here
        // im using a dummy array of JSON
        // I've used prop drilling (That's what you call it i guess)
        updateData([
            {
                name: "AgriPro 3 HP Butterfly",
                price: 690.99,
                img: "./img/landingpage/p1.png",
                id:"123456"
            },{
                name: "AgriPro 3 HP Butterfly",
                price: 690.99,
                img: "./img/landingpage/p2.png",
                id:"123456"
            },{
                name: "AgriPro 3 HP Butterfly",
                price: 690.99,
                img: "./img/landingpage/p3.png",
                id:"123456"
            },{
                name: "AgriPro 3 HP Butterfly",
                price: 690.99,
                img: "./img/landingpage/p4.png",
                id:"123456"
            },{
                name: "AgriPro 3 HP Butterfly",
                price: 690.99,
                img: "./img/landingpage/p1.png",
                id:"123456"
            },{
                name: "AgriPro 3 HP Butterfly",
                price: 690.99,
                img: "./img/landingpage/p2.png",
                id:"123456"
            },{
                name: "AgriPro 3 HP Butterfly",
                price: 690.99,
                img: "./img/landingpage/p3.png",
                id:"123456"
            },{
                name: "AgriPro 3 HP Butterfly",
                price: 690.99,
                img: "./img/landingpage/p4.png",
                id:"123456"
            },{
                name: "AgriPro 3 HP Butterfly",
                price: 690.99,
                img: "./img/landingpage/p1.png",
                id:"123456"
            },{
                name: "AgriPro 3 HP Butterfly",
                price: 690.99,
                img: "./img/landingpage/p2.png",
                id:"123456"
            },{
                name: "AgriPro 3 HP Butterfly",
                price: 690.99,
                img: "./img/landingpage/p3.png",
                id:"123456"
            },{
                name: "AgriPro 3 HP Butterfly",
                price: 690.99,
                img: "./img/landingpage/p4.png",
                id:"123456"
            },{
                name: "AgriPro 3 HP Butterfly",
                price: 690.99,
                img: "./img/landingpage/p1.png",
                id:"123456"
            },{
                name: "AgriPro 3 HP Butterfly",
                price: 690.99,
                img: "./img/landingpage/p2.png",
                id:"123456"
            },{
                name: "AgriPro 3 HP Butterfly",
                price: 690.99,
                img: "./img/landingpage/p3.png",
                id:"123456"
            },{
                name: "AgriPro 3 HP Butterfly",
                price: 690.99,
                img: "./img/landingpage/p4.png",
                id:"123456"
            },{
                name: "AgriPro 3 HP Butterfly",
                price: 690.99,
                img: "./img/landingpage/p1.png",
                id:"123456"
            },{
                name: "AgriPro 3 HP Butterfly",
                price: 690.99,
                img: "./img/landingpage/p2.png",
                id:"123456"
            },{
                name: "AgriPro 3 HP Butterfly",
                price: 690.99,
                img: "./img/landingpage/p3.png",
                id:"123456"
            },{
                name: "AgriPro 3 HP Butterfly",
                price: 690.99,
                img: "./img/landingpage/p4.png",
                id:"123456"
            },
        ])
    }, [filters, updateData])

    return ( 
    <div>
        <div style={{fontSize:"1.5rem", padding:"1rem 0 0 1rem"}}>
            CATEGORIES
        </div>
        <div style={{padding:"1rem 0 1rem 1rem"}}>
            HOME &gt; PUMP &gt; PATH
        </div>

        <br />

        <div style={{backgroundColor:"#252525", padding:"2rem 1rem 2rem 2rem", display:"flex", justifyContent:"space-between", color:"white"}}>
            <div>FILTER BY</div>
            <div style={{cursor:"pointer"}}><BsX /></div>
        </div>

        <br />

        <div>
            <div style={{backgroundColor:"#252525", padding:"1rem 1rem 1rem 2rem", display:"flex", justifyContent:"space-between", color:"white"}}>
                <div>Categories</div>
                <div style={{cursor:"pointer"}} onClick={() => clickCategory(!categories)}>{categories? <BsChevronRight />: <BsChevronUp />}</div>
            </div>
            <div style={categories?{display:"none"}:{}}>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition1"/> CROMPTON</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition2"/> KIRLOSKAR</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition3"/> LUBI</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition4"/> WILO</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition5"/> DAMOR</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition6"/> GRUNDFOS</div>
            </div>
        </div>

        <br/>

        <div>
            <div style={{backgroundColor:"#252525", padding:"1rem 1rem 1rem 2rem", display:"flex", justifyContent:"space-between", color:"white"}}>
                <div>Price</div>
                <div style={{cursor:"pointer"}} onClick={() => clickPrice(!price)}>{price?<BsChevronRight />: <BsChevronUp />}</div>
            </div>
            <div style={price?{display:"none"}:{}}>
                <div style={{margin:"1rem 1rem 0 1rem"}}><input style={{color:"#D6210E", width:"100%"}} type="range" id="condition1" min="0" max="1000"/></div>
            </div>
        </div>

        <br />

        <div>
            <div style={{backgroundColor:"#252525", padding:"1rem 1rem 1rem 2rem", display:"flex", justifyContent:"space-between", color:"white"}}>
                <div>Machine</div>
                <div style={{cursor:"pointer"}} onClick={() => clickMachine(!machine)}>{machine?<BsChevronRight />: <BsChevronUp />}</div>
            </div>
            <div style={machine?{display:"none"}:{}}>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition1"/> CROMPTON</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition2"/> KIRLOSKAR</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition3"/> LUBI</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition4"/> WILO</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition5"/> DAMOR</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition6"/> GRUNDFOS</div>
            </div>
        </div>

        <br />

        <div>
            <div style={{backgroundColor:"#252525", padding:"1rem 1rem 1rem 2rem", display:"flex", justifyContent:"space-between", color:"white"}}>
                <div>Brand</div>
                <div style={{cursor:"pointer"}} onClick={() => clickBrand(!brand)}>{brand?<BsChevronRight />: <BsChevronUp />}</div>
            </div>
            <div style={brand?{display:"none"}:{}}>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition1"/> CROMPTON</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition2"/> KIRLOSKAR</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition3"/> LUBI</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition4"/> WILO</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition5"/> DAMOR</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition6"/> GRUNDFOS</div>
            </div>
        </div>

        <br />

        <div>
            <div style={{backgroundColor:"#252525", padding:"1rem 1rem 1rem 2rem", display:"flex", justifyContent:"space-between", color:"white"}}>
                <div>Discount</div>
                <div style={{cursor:"pointer"}} onClick={() => clickDiscount(!discount)}>{discount?<BsChevronRight />: <BsChevronUp />}</div>
            </div>
            <div style={discount?{display:"none"}:{}}>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition1"/> CROMPTON</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition2"/> KIRLOSKAR</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition3"/> LUBI</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition4"/> WILO</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition5"/> DAMOR</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition6"/> GRUNDFOS</div>
            </div>
        </div>

        <br />

        <div>
            <div style={{backgroundColor:"#252525", padding:"1rem 1rem 1rem 2rem", display:"flex", justifyContent:"space-between", color:"white"}}>
                <div>Size</div>
                <div style={{cursor:"pointer"}} onClick={() => clickSize(!size)}>{size?<BsChevronRight />: <BsChevronUp />}</div>
            </div>
            <div style={size?{display:"none"}:{}}>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition1"/> CROMPTON</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition2"/> KIRLOSKAR</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition3"/> LUBI</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition4"/> WILO</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition5"/> DAMOR</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition6"/> GRUNDFOS</div>
            </div>
        </div>

        <br />

        <div>
            <div style={{backgroundColor:"#252525", padding:"1rem 1rem 1rem 2rem", display:"flex", justifyContent:"space-between", color:"white"}}>
                <div>Filter</div>
                <div style={{cursor:"pointer"}} onClick={() => clickFilter1(!filter1)}>{filter1?<BsChevronRight />: <BsChevronUp />}</div>
            </div>
            <div style={filter1?{display:"none"}:{}}>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition1"/> CROMPTON</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition2"/> KIRLOSKAR</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition3"/> LUBI</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition4"/> WILO</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition5"/> DAMOR</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition6"/> GRUNDFOS</div>
            </div>
        </div>

        <br />
        <div>
            <div style={{backgroundColor:"#252525", padding:"1rem 1rem 1rem 2rem", display:"flex", justifyContent:"space-between", color:"white"}}>
                <div>Filter</div>
                <div style={{cursor:"pointer"}} onClick={() => clickFilter2(!filter2)}>{filter2?<BsChevronRight />: <BsChevronUp />}</div>
            </div>
            <div style={filter2?{display:"none"}:{}}>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition1"/> CROMPTON</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition2"/> KIRLOSKAR</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition3"/> LUBI</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition4"/> WILO</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition5"/> DAMOR</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition6"/> GRUNDFOS</div>
            </div>
        </div>

        <br />
        <div>
            <div style={{backgroundColor:"#252525", padding:"1rem 1rem 1rem 2rem", display:"flex", justifyContent:"space-between", color:"white"}}>
                <div>Filter</div>
                <div style={{cursor:"pointer"}} onClick={() => clickFilter3(!filter3)}>{filter3?<BsChevronRight />: <BsChevronUp />}</div>
            </div>
            <div style={filter3?{display:"none"}:{}}>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition1"/> CROMPTON</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition2"/> KIRLOSKAR</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition3"/> LUBI</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition4"/> WILO</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition5"/> DAMOR</div>
                <div style={{margin:"1rem 0 0 1rem"}}><input type="checkbox" id="condition6"/> GRUNDFOS</div>
            </div>
        </div>

        <br />
        
    </div> 
    );
}
 
export default LeftSide;