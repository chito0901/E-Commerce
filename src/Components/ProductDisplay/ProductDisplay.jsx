import styles from './ProductDisplay.module.css'
import { useContext, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';


function ProductDisplay(props) {

    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    const {addToFave} = useContext(ShopContext);
    const [cartClicked, setCartClicked] = useState();
    const [faveClicked, setFaveClicked] = useState();

    
    const handleAddClick = (e) => {
        addToCart(product.id);
        setCartClicked(cartClicked);
        e.preventDefault();
    };
    const handleFaveClick = (e) => {
        addToFave(product.id);
        setFaveClicked(faveClicked);
        e.preventDefault();
    };

    return(
        <div>
            <div className={styles.productDisplay}>
                <div className={styles.productDisplayLeft}>
                    <div className={styles.productDisplayImageList}>
                        <img src={product.image} alt=""/>
                        <img src={product.image} alt=""/>
                        <img src={product.image} alt=""/>
                        <img src={product.image} alt=""/>
                        <img src={product.image} alt=""/>
                    </div>
                    <div className={styles.productDisplayImage}>
                        <img className={styles.productDisplayMainImage} src={product.image} />
                    </div>
                </div>
                <div className={styles.productDisplayRight}>
                    <h1>{product.name}</h1>
                    <div className={styles.ProductDisplayRightStar}>
                        <i className={`fa-solid fa-star ${styles.starIcon}`}></i>
                        <i className={`fa-solid fa-star ${styles.starIcon}`}></i>
                        <i className={`fa-solid fa-star ${styles.starIcon}`}></i>
                        <i className={`fa-solid fa-star ${styles.starIcon}`}></i>
                        <i className={`fa-solid fa-star ${styles.starIconDull}`}></i>
                        (125)
                    </div>
                    <div className={styles.ProductDisplayPrices}>
                        $ {product.price}
                    </div>
                    <div className={styles.ProductDisplayDescription}>
                        {product.desc}
                    </div>
                    <div className={styles.productDisplaySizes}>
                        <h4>Select Size</h4>
                        <div className={styles.productDisplaySizesOpt}>
                            <div className={styles.productDisplaySizesChoices}>M 8 / W 9.5</div>
                            <div className={styles.productDisplaySizesChoices}>M 8.5 / W 10</div>
                            <div className={styles.productDisplaySizesChoices}>M 9 / W 10.5</div>
                            <div className={styles.productDisplaySizesChoices}>M 9.5 / W 11</div>
                            <div className={styles.productDisplaySizesChoices}>M 10 / W 11.5</div>
                            <div className={styles.productDisplaySizesChoices}>M 10.5 / W 12</div>
                            <div className={styles.productDisplaySizesChoices}>M 11 / W 12.5</div>
                            <div className={styles.productDisplaySizesChoices}>M 11.5 / W 13</div>
                            <div className={styles.productDisplaySizesChoices}>M 12 / W 13.5</div>
                            <div className={styles.productDisplaySizesChoices}>M 12.5 / W 14</div>
                        </div>
                    </div>
                    <div className={styles.cartFavorites}>
                        <button className={styles.addToCart} onClick={handleAddClick}>Add to Cart</button>
                        <button className={styles.addToFave} onClick={handleFaveClick}>Favorite <i className={`fa-solid fa-heart ${styles.heartIcon}`}></i> </button>
                    </div>
                </div>
            </div>


                <div className={styles.productDisplayMedSmall}>
                    <h1>{product.name}</h1>
                    <div className={styles.ProductDisplayStar}>
                        <i className={`fa-solid fa-star ${styles.starIcon}`}></i>
                        <i className={`fa-solid fa-star ${styles.starIcon}`}></i>
                        <i className={`fa-solid fa-star ${styles.starIcon}`}></i>
                        <i className={`fa-solid fa-star ${styles.starIcon}`}></i>
                        <i className={`fa-solid fa-star ${styles.starIconDull}`}></i>
                        (125)
                    </div>
                    <div className={styles.ProductDisplayDescription}>
                        {product.desc}
                    </div>
                    <div className={styles.ProductDisplayPrices}>
                        $ {product.price}
                    </div>
                    <img className={styles.productDisplayMainImage} src={product.image} />
                    <div className={styles.productDisplaySizes}>
                        <h4>Select Size</h4>
                        <div className={styles.productDisplaySizesOpt}>
                            <div className={styles.productDisplaySizesChoices}>M 8 / W 9.5</div>
                            <div className={styles.productDisplaySizesChoices}>M 8.5 / W 10</div>
                            <div className={styles.productDisplaySizesChoices}>M 9 / W 10.5</div>
                            <div className={styles.productDisplaySizesChoices}>M 9.5 / W 11</div>
                            <div className={styles.productDisplaySizesChoices}>M 10 / W 11.5</div>
                            <div className={styles.productDisplaySizesChoices}>M 10.5 / W 12</div>
                            <div className={styles.productDisplaySizesChoices}>M 11 / W 12.5</div>
                            <div className={styles.productDisplaySizesChoices}>M 11.5 / W 13</div>
                            <div className={styles.productDisplaySizesChoices}>M 12 / W 13.5</div>
                            <div className={styles.productDisplaySizesChoices}>M 12.5 / W 14</div>
                        </div>
                    </div>
                    <div className={styles.cartFavorites}>
                        <button className={styles.addToCart} onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
                        <button className={styles.addToFave} onClick={()=>{addToFave(product.id)}}>Favorite <i className={`fa-solid fa-heart ${styles.heartIcon}`}></i> </button>
                    </div>
                </div>
        </div>
    )
}

export default ProductDisplay