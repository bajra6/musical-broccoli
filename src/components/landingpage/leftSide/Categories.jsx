import styles from "../../../css/leftSide.module.css"

const Categories = () => {
    return ( 
        <div className={styles.categoriesWrapper}>
            <h5><b>All Categories</b></h5>
            <div className={styles.categoriesDiv}>Power Tools</div>
            <div className={styles.categoriesDiv}>Automative Maintenance</div>
            <div className={styles.categoriesDiv}>Office Supplies</div>
            <div className={styles.categoriesDiv}>Pump</div>
            <div className={styles.categoriesDiv}>Safety</div>
            <div className={styles.categoriesDiv}>Cleaning</div>
            <div className={styles.categoriesDiv}>Agriculture Garden and Lands</div>
            <div className={styles.categoriesDiv}>Testing and Measuring</div>
            <div className={styles.categoriesDiv}>Solar</div>
            <div className={styles.categoriesDiv}>Electrical</div>
            <div className={styles.categoriesDiv}>Medical Supplies</div>
            <div className={styles.categoriesDiv}>Hand Tools</div>
            <div className={styles.categoriesDiv}>More   +</div>
        </div>
     );
}
 
export default Categories;