import { Container, Row } from "react-bootstrap";
import styles from "../../../css/leftSide.module.css";
import BlogPost from "./blogposts/BlogPost";
import { useState, useEffect } from "react";

const Blog = () => {

    const [data, updateData] = useState([[]])
    const [next, updateNext] = useState(0)

    useEffect(() => {
        //get data from server depending on the req new arrival/ discount
        //update the array then.
        updateData([
                [{
                    title:"IT IS A LONG ESTABLISHED FACT THAT A READER WILL BE DISTRACTED A",
                    img:"./img/landingpage/blogimage.png",
                    by: "Gavin Kumar",
                    date: "15-05-2021",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Post A accusamus earum, perspiciatis nam vitae?"
                }],
                [{
                    title:"THIS SHIT WORKS DEMNNN I'M A GENIUS POST B",
                    img:"./img/landingpage/blogimage.png",
                    by: "Gavin Kumar",
                    date: "15-05-2021",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Post B accusamus earum, perspiciatis nam vitae?"
                }]
        ])
    }, [])

    return ( 
        <div>
            {console.log(data)}
            <div className={styles.header}>
                <img src="./img/landingpage/logo.png" alt="logo"/>
                <div>BLOG</div>
                <div>
                    <span onClick={() => updateNext((next-1)%data.length)} className="carousel-control-prev-icon" style={{maxHeight:"1rem", cursor:"pointer"}}></span>
                    <span onClick={() => updateNext((next+1)%data.length)} className="carousel-control-next-icon" style={{maxHeight:"1rem", cursor:"pointer"}}></span>
                </div>
            </div>
            <Container fluid="true">
                {data[Math.abs(next)].map((product) => (
                    <Row style={{paddingTop:"0.5rem"}}>
                        <BlogPost title={product.title} img={product.img} date={product.date} by={product.by} text={product.text}/>
                    </Row>
                    ))} 
            </Container>
        </div>
     );
}
 
export default Blog;