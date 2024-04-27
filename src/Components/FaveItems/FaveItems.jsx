import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './FaveItems.module.css'
import { ShopContext } from '../../Context/ShopContext'
import removeIcon from '../Assets/removeIcon.svg'
import faveIcon from '../Assets/faveIcon.svg'

function FaveItems() {

    const { allProducts, similarProducts, dataArrivals, faveItems, removeFromFave, totalFaveItem } = useContext(ShopContext);
    const listedProducts = [...allProducts, ...similarProducts, ...dataArrivals];
    const [isEmpty, setIsEmpty] = useState(totalFaveItem === 0);

    useEffect(() => {
        setIsEmpty(totalFaveItem === 0);
    }, [totalFaveItem]);
    
    if (isEmpty) {
        return  <div>
                    <div className={styles.emptyFave}>
                        <img src={faveIcon} alt='' />
                        <p>Looks like your Favorites tab is feeling a bit empty! <Link to='/'>Try browsing now!</Link></p>
                    </div>
                </div>
    } 
    else {
        return <div>
                    <div className={styles.faveitemsHolder}>
                        <div className={styles.faveitemsFormatMain}>
                            <p>Products</p>
                            <p>Description</p>
                            <p>Remove</p>
                        </div>

                        <div className={styles.faveitemsFormatMobile}>
                            <p>Products</p>
                            <p>Description</p>
                        </div>

                        <div className={styles.faveitemsFormatSmallMobile}>
                            <p>Products</p>
                            <p>Description</p>
                        </div>
                        <hr />
                        {listedProducts.map((e)=>{
                            if(faveItems[e.id]>0)
                            {
                                // eslint-disable-next-line react/jsx-key
                                return <div>
                                    <div className={styles.faveProductHolder}>
                                        <div className={`${styles.faveitemsFormat} ${styles.faveitemsFormatMain}`}>
                                            <img src={e.image} className={styles.faveIconProductIcon} />
                                            <div>
                                            <p className={styles.faveProductName}>{e.name}</p>
                                            <p className={styles.faveProductDesc}>{e.desc}</p>
                                            <p>${e.price}</p>
                                            </div>
                                            <img className={styles.faveIconRemove} src={removeIcon} onClick={()=>{removeFromFave(e.id)}}/>
                                        </div>
                                    </div>

                                    <div className={styles.faveHolderMobile}>
                                        <div className={`${styles.faveitemsFormat} ${styles.faveitemsFormatMobile}`}>
                                            <img src={e.image} className={styles.faveIconProductIcon} />
                                            <div className={styles.namePrice}>
                                                <p>{e.name}</p>
                                                <p>${e.price}</p>
                                            </div>
                                            <button className={styles.faveRemoveBtn} onClick={()=>{removeFromFave(e.id)}}>Remove</button>
                                        </div>
                                    </div>

                                    <div className={styles.faveHolderMobile}>
                                        <div className={`${styles.faveitemsFormatSmall} ${styles.faveitemsFormatSmallMobile}`}>
                                            <img src={e.image} className={styles.faveIconProductIconSmall} />
                                            <div className={styles.namePrice}>
                                                <p>{e.name}</p>
                                                <div className={styles.price}>
                                                    <p>${e.price}</p>
                                                </div>
                                            </div>
                                            <div className={styles.totalRemove}>
                                                <button className={styles.faveRemoveBtn} onClick={()=>{removeFromFave(e.id)}}>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            }
                            return null;
                        })}
                        
                    </div>
                </div>
    }
}
export default FaveItems