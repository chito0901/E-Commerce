import styles from './SimilarProducts.module.css'
import similarProduct from '../Assets/SimilarProducts.js'
import Showcase from '../Showcase/Showcase'

function SimilarProducts() {
    
    return(
    <div className={styles.similarProducts}>
        <h1>Similar Products</h1>
        <hr />
        <div className={styles.similarProductsItem}>
            {similarProduct.map((item, i)=>{
                return <Showcase key={i} id={item.id} name={item.name} desc={item.desc} image={item.image} price={item.price}/>
            })}
        </div>
    </div>
    )
}
export default SimilarProducts
