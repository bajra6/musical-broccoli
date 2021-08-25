import { Container, Row } from "react-bootstrap";
import styles from "../../../css/leftSide.module.css";
import BlogPost from "./blogposts/BlogPost";

const Blog = () => {
    return ( 
        <div>
            <div className={styles.header}>
                <img src="./img/landingpage/logo.png" alt="logo"/>
                <div>BLOG</div>
                <div>
                    <span className="carousel-control-prev-icon" style={{maxHeight:"1rem"}}></span>
                    <span className="carousel-control-next-icon" style={{maxHeight:"1rem"}}></span>
                </div>
            </div>
            <Container fluid="true">
                <Row style={{paddingTop:"0.5rem"}}>
                    <BlogPost />
                </Row>
            </Container>
        </div>
     );
}
 
export default Blog;