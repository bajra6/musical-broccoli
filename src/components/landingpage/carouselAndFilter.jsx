import { Container, Row, Col, Dropdown } from "react-bootstrap";
import PageCarousel from "./Carousel";
import { useState, useEffect } from "react";
import CarouselLaptop from "./CarouselAndFilter/laptop";
import CarouselMobile from "./CarouselAndFilter/mobile";

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
            {device==="laptop"?<CarouselLaptop />:<CarouselMobile />}
        </div>
    )
}
 
export default CarouselAndFilter;