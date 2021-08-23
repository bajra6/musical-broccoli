import { Carousel } from "react-bootstrap";

const PageCarousel = () => {

    return ( 
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{height:"100%", width:"100%", objectFit:"fill"}}>
            <div className="carousel-inner" style={{height:"100%", width:"100%"}}>
                <div className="carousel-item active" style={{height:"100%", width:"100%"}}>
                    <img src="./img/landingpage/carouselimg1.png" className="d-block w-100" alt="..." style={{display:"block", width:"100%", height:"100%", objectFit: "fill"}}/>
                </div>
                <div className="carousel-item" style={{height:"100%", width:"100%"}}>
                    <img src="./img/landingpage/carouselimg1.png" className="d-block w-100" alt="..." style={{display:"block", width:"100%", height:"100%", objectFit: "fill"}}/>
                </div>
                <div className="carousel-item" style={{height:"100%", width:"100%"}}>
                    <img src="./img/landingpage/carouselimg1.png" className="d-block w-100" alt="..." style={{display:"block", width:"100%", height:"100%", objectFit: "fill"}}/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
     );
}
 
export default PageCarousel;