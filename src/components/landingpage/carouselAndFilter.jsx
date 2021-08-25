import { useState, useEffect } from "react";
import Laptop from "./homepage/laptop";
import Mobile from "./homepage/mobile";

const CarouselAndFilter = () => {

    const [device, setDevice]=useState("laptop");

	useEffect(() => {
	
		if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		  setDevice("mobile");
		} else {
		  	setDevice("laptop");
		}

		const userAgent = navigator.userAgent.toLowerCase();
		const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
		if (isTablet){
			setDevice("laptop")
		}

        console.log(device)
	}, [device]);


    return ( 
        <div>
            {device==="laptop"?<Laptop />:<Mobile />}
        </div>
    )
}
 
export default CarouselAndFilter;