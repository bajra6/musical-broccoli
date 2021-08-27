const BlogPost = (props) => {
    return ( 
        <>
        <img alt="product" src={props.img} style={{height:"100%", width:"100%"}}/>
        <div style={{display:"flex", justifyContent:"center", flexDirection:"column", marginTop:"1rem"}}>
            <div>{props.title}</div>
            <div style={{margin:"1rem 0", display:"flex", justifyContent:"space-between"}}><span>By: {props.by}</span><span>{props.date}</span></div>
            <div>{props.text}</div>
        </div>
        </>
     );
}
 
export default BlogPost;