import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './CartItems.module.css'
import { ShopContext } from '../../Context/ShopContext'
import removeIcon from '../Assets/removeIcon.svg'
import addCart from '../Assets/AddtoCart.svg'

function CartItems() {

    const { getTotalCartAmount, allProducts, similarProducts, dataArrivals, cartItems, removeFromCart, totalItem } = useContext(ShopContext);
    const listedProducts = [...allProducts, ...similarProducts, ...dataArrivals];
    const [isEmpty, setIsEmpty] = useState(totalItem === 0);


    
    useEffect(() => {
        setIsEmpty(totalItem === 0);
    }, [totalItem]);

    if (isEmpty) {
        return  <div>
                    <div className={styles.emptyCart}>
                        <img src={addCart} alt='' />
                        <p>Your cart is empty. <Link to='/'>Shop now!</Link></p>
                    </div>
                </div>
    } 
    else {
        return <div>
                    <div className={styles.cartitemsHolder}>
                        <div className={styles.cartitemsFormatMain}>
                            <p>Products</p>
                            <p>Title</p>
                            <p>Price</p>
                            <p>Quantity</p>
                            <p>Total</p>
                            <p>Remove</p>
                        </div>
                        <div className={styles.cartitemsFormatMobile}>
                            <p>Products</p>
                            <p>Description</p>
                            <p>Quantity</p>
                            <p>Total</p>
                            <p>Remove</p>
                        </div>
                        <div className={styles.cartitemsFormatSmallMobile}>
                            <p>Products</p>
                            <p>Description</p>
                        </div>
                        <hr />
                        {listedProducts.map((e)=>{
                            if(cartItems[e.id]>0)
                            {
                                // eslint-disable-next-line react/jsx-key
                                return <div>
                                    <div className={styles.cartProductHolder}>
                                        <div className={`${styles.cartitemsFormat} ${styles.cartitemsFormatMain}`}>
                                            <img src={e.image} className={styles.cartIconProductIcon} />
                                            <p>{e.name}</p>
                                            <p>${e.price}</p>
                                            <button className={styles.cartItemsQuantity}>{cartItems[e.id]}</button>
                                            <p>$ {e.price*cartItems[e.id]}</p>
                                            <img className={styles.cartIconRemove} src={removeIcon} onClick={()=>{removeFromCart(e.id)}}/>
                                        </div>
                                    </div>

                                    <div className={styles.cartHolderMobile}>
                                        <div className={`${styles.cartitemsFormat} ${styles.cartitemsFormatMobile}`}>
                                            <img src={e.image} className={styles.cartIconProductIcon} />
                                            <div className={styles.namePrice}>
                                                <p>{e.name}</p>
                                                <p>${e.price}</p>
                                            </div>
                                            <button className={styles.cartItemsQuantity}>{cartItems[e.id]}</button>
                                            <p>$ {e.price*cartItems[e.id]}</p>
                                            <img className={styles.cartIconRemove} src={removeIcon} onClick={()=>{removeFromCart(e.id)}}/>
                                        </div>
                                    </div>

                                    <div className={styles.cartHolderMobile}>
                                        <div className={`${styles.cartitemsFormatSmall} ${styles.cartitemsFormatSmallMobile}`}>
                                            <img src={e.image} className={styles.cartIconProductIconSmall} />
                                            <div className={styles.namePriceQuantity}>
                                                <p>{e.name}</p>
                                                <div className={styles.priceQuantity}>
                                                    <p>${e.price}</p>
                                                    <button className={styles.cartItemsQuantitySmall}>{cartItems[e.id]}</button>
                                                </div>
                                            </div>
                                            <div className={styles.totalRemove}>
                                                <p className={styles.computedTotal}>$ {e.price*cartItems[e.id]}</p>
                                                <button className={styles.cartRemoveBtn} onClick={()=>{removeFromCart(e.id)}}>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            }
                            return null;
                        })}
                        <div className={styles.cartitemsDown}>
                            <div className={styles.cartitemsTotal}>
                                <h1>Cart Total</h1>
                                <div>
                                    <div className={styles.cartitemsTotalItem}>
                                        <p>Sub Total:</p>
                                        <p>${getTotalCartAmount()}</p>
                                    </div>
                                    <hr />
                                    <div className={styles.cartitemsTotalItem}>
                                        <p>Shipping Fee:</p>
                                        <p>Free</p>
                                    </div>
                                    <div className={styles.cartitemsTotalItem}>
                                        <h3>Total:</h3>
                                        <h3>${getTotalCartAmount()}</h3>
                                    </div>
                                </div>
                                    <button>Proceed to Checkout</button>
                            </div>
                            <div className={styles.cartitemsPromoCode}>
                                <p>If you have a promocode, Enter it here:</p>
                                <div className={styles.cartitemsPromoBox}>
                                    <input type='text' placeholder='Promo Code'/>
                                    <button>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    }
}
export default CartItems