const PageCarousel = () => {

    const style = {
        hw100:{
            height:"100%",
            width:"100%"
        },
        hw100objfil:{
            height:"100%",
            width:"100%",
            objectFit:"fill"
        }, 
        shopnow:{
            zIndex:"1000", 
            margin:"-40% 0 0 7%", 
            maxWidth:"30%", 
            cursor:"pointer"
        }
    }

    return ( 
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={style.hw100objfil}>
            <div className="carousel-inner" style={style.hw100}>
                <div className="carousel-item active" style={style.hw100}>
                    <img src="./img/landingpage/carouselimg1.png" className="d-block w-100" alt="..." style={style.hw100objfil}/>
                    <img src="./img/landingpage/button1.png" alt="shop now" onClick={() => console.log("shop now")} style={style.shopnow}></img>
                </div>
                <div className="carousel-item" style={style.hw100}>
                    <img src="./img/landingpage/carouselimg1.png" className="d-block w-100" alt="..." style={style.hw100objfil}/>
                    <img src="./img/landingpage/button1.png" alt="shop now" onClick={() => console.log("shop now")} style={style.shopnow}></img>
                </div>
                <div className="carousel-item" style={style.hw100}>
                    <img src="./img/landingpage/carouselimg1.png" className="d-block w-100" alt="..." style={style.hw100objfil}/>
                    <img src="./img/landingpage/button1.png" alt="shop now" onClick={() => console.log("shop now")} style={style.shopnow}></img>
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