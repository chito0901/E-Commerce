import { useContext } from 'react';
import styles from './CSS/ShopCategory.module.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Items/Items.jsx';

const categoryDisplayNames = {
    shoesAndSlides: 'Shoes & Slides',
    topsAndTees: 'Tops & T-Shirts',
    hoodiesAndPullovers: 'Hoodies & Pullovers',
    shorts: 'Shorts',
    accessoriesAndEquip: 'Accessories & Equipments'
};

function ShopCategory({ category }) {
    const { allProducts } = useContext(ShopContext);

    // Filter products based on the category
    const filteredProducts = allProducts.filter(item => item.category === category);

    return (
        <div className={styles.shopCategory}>
            <div className={styles.shopCategoryIndexSort}>
                <p>
                    Showing <span>{categoryDisplayNames[category]}</span> products.
                </p>
            </div>
            <div className={styles.shopCategoryProducts}>
                {filteredProducts.map(product => (
                    <Item 
                        key={product.id} 
                        id={product.id} 
                        name={product.name} 
                        desc={product.desc} 
                        image={product.image} 
                        price={product.price} 
                    />
                ))}
            </div>
            <div className={styles.shopCategoryLoadMore}>
                <button className={styles.loadMoreButton}>Explore more</button>
            </div>
        </div> 
    );
}

export default ShopCategory;
