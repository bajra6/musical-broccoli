import styles from "../../../css/leftSide.module.css"
import { useState } from "react";
import { useEffect } from "react";

const Categories = () => {

    const [clicked, setClicked] = useState(0)

    useEffect(() => {}, [clicked])

    return ( 
        <div className={styles.categoriesWrapper}>
            <h5><b>All Categories</b></h5>
            <div onClick={() => setClicked(1)} className={styles.categoriesDiv} style={clicked===1?{color:"red"}:{}}>Power Tools</div>
            <div onClick={() => setClicked(2)} className={styles.categoriesDiv} style={clicked===2?{color:"red"}:{}}>Automative Maintenance</div>
            <div onClick={() => setClicked(3)} className={styles.categoriesDiv} style={clicked===3?{color:"red"}:{}}>Office Supplies</div>
            <div onClick={() => setClicked(4)} className={styles.categoriesDiv} style={clicked===4?{color:"red"}:{}}>Pump</div>
            <div onClick={() => setClicked(5)} className={styles.categoriesDiv} style={clicked===5?{color:"red"}:{}}>Safety</div>
            <div onClick={() => setClicked(6)} className={styles.categoriesDiv} style={clicked===6?{color:"red"}:{}}>Cleaning</div>
            <div onClick={() => setClicked(7)} className={styles.categoriesDiv} style={clicked===7?{color:"red"}:{}}>Agriculture Garden and Lands</div>
            <div onClick={() => setClicked(8)} className={styles.categoriesDiv} style={clicked===8?{color:"red"}:{}}>Testing and Measuring</div>
            <div onClick={() => setClicked(9)} className={styles.categoriesDiv} style={clicked===9?{color:"red"}:{}}>Solar</div>
            <div onClick={() => setClicked(10)} className={styles.categoriesDiv} style={clicked===10?{color:"red"}:{}}>Electrical</div>
            <div onClick={() => setClicked(11)} className={styles.categoriesDiv} style={clicked===11?{color:"red"}:{}}>Medical Supplies</div>
            <div onClick={() => setClicked(12)} className={styles.categoriesDiv} style={clicked===12?{color:"red"}:{}}>Hand Tools</div>
            <div onClick={() => setClicked(13)} className={styles.categoriesDiv} style={clicked===13?{color:"red"}:{}}>More   +</div>
        </div>
     );
}
 
export default Categories;