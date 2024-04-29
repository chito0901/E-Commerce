import { useContext, useState } from 'react';
import styles from './Navbar.module.css'
import logo from '../Assets/nikeLogo.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

function Navbar() {

    const [clicked, setClicked] = useState(false);
    const {getTotalCartItems} = useContext(ShopContext);
    const [menu, setMenu] = useState("shop");

    const resetMenu = () => {
        setMenu(null);
    };
    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <div className={styles.navbar}>
            <div className={styles.navLogo}>
                    <Link to='/' onClick={() => { setMenu("shop") }}><img src={logo} alt="" /></Link>
                    Hello World
            </div>
            <ul className={styles.navMenu}>
                <li onClick={() => { setMenu("shoesAndSlides") }}>
                    <Link to="/shoesAndSlides" className={menu === "shoesAndSlides" ? "active" : ""} style={menu === "shoesAndSlides" ? { color: 'black' } : {}}>Shoes & Slides</Link>
                        {menu === "shoesAndSlides" ? <div className={styles.menuUnderline}></div> : null}
                </li>
                <li onClick={() => { setMenu("topsAndTees") }}>
                    <Link to="/topsAndTees" className={menu === "men" ? "topsAndTees" : ""} style={menu === "topsAndTees" ? { color: 'black'} : {}}>Tops & T-Shirts</Link>
                        {menu === "topsAndTees" ? <div className={styles.menuUnderline}></div> : null}
                </li>
                <li onClick={() => { setMenu("hoodiesAndPullovers") }}>
                    <Link to="/hoodiesAndPullovers" className={menu === "hoodiesAndPullovers" ? "active" : ""} style={menu === "hoodiesAndPullovers" ? { color: 'black' } : {}}>Hoodies & Pullovers</Link>
                        {menu === "hoodiesAndPullovers" ? <div className={styles.menuUnderline}></div> : null}
                </li>
                <li onClick={() => { setMenu("shorts") }}>
                    <Link to="/shorts" className={menu === "shorts" ? "active" : ""} style={menu === "shorts" ? { color: 'black' } : {}}>Shorts</Link>
                        {menu === "shorts" ? <div className={styles.menuUnderline}></div> : null}
                </li>
                <li onClick={() => { setMenu("accessoriesAndEquip") }}>
                    <Link to="/accessoriesAndEquip" className={menu === "accessoriesAndEquip" ? "active" : ""} style={menu === "accessoriesAndEquip" ? { color: 'black' } : {}}>Accessories & Equipments</Link>
                        {menu === "accessoriesAndEquip" ? <div className={styles.menuUnderline}></div> : null}
                </li>
            </ul>
            <div className={styles.navLoginCart}>
                <Link to='/login' onClick={resetMenu}><button>Login</button></Link>
                <Link to='/cart' onClick={resetMenu}><i className="fa-solid fa-cart-shopping"></i></Link>
                <div className={styles.navCartCount}>{getTotalCartItems()}</div> 
                <Link to='/fave' onClick={resetMenu}><i className="fa-solid fa-heart"></i></Link>
            </div>
            <div className={styles.navButton}>
                <i onClick={handleClick} className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

 
            {clicked ? 
            <div className={styles.navMenuMobile}>
                <ul className={styles.navMobile}>
                    <li onClick={() => { setMenu("shoesAndSlides") }}>
                        <Link to="/shoesAndSlides" className={menu === "shoesAndSlides" ? "active" : ""} style={menu === "shoesAndSlides" ? { color: 'black' } : {}}>Shoes & Slides</Link>
                    </li>
                    <li onClick={() => { setMenu("topsAndTees") }}>
                        <Link to="/topsAndTees" className={menu === "men" ? "topsAndTees" : ""} style={menu === "topsAndTees" ? { color: 'black'} : {}}>Tops & T-Shirts</Link>
                    </li>
                    <li onClick={() => { setMenu("hoodiesAndPullovers") }}>
                        <Link to="/hoodiesAndPullovers" className={menu === "hoodiesAndPullovers" ? "active" : ""} style={menu === "hoodiesAndPullovers" ? { color: 'black' } : {}}>Hoodies & Pullovers</Link>
                    </li>
                    <li onClick={() => { setMenu("shorts") }}>
                        <Link to="/shorts" className={menu === "shorts" ? "active" : ""} style={menu === "shorts" ? { color: 'black' } : {}}>Shorts</Link>
                    </li>
                    <li onClick={() => { setMenu("accessoriesAndEquip") }}>
                        <Link to="/accessoriesAndEquip" className={menu === "accessoriesAndEquip" ? "active" : ""} style={menu === "accessoriesAndEquip" ? { color: 'black' } : {}}>Accessories & Equipments</Link>
                    </li>
                    <hr />
                    <li>
                        <div className={styles.cartNotif}>
                            <Link to='/cart' onClick={resetMenu}>Cart</Link>
                            <div className={styles.navCartCountSmall}>{getTotalCartItems()}</div>
                        </div>
                    </li>
                    <li>
                        <Link to='/fave' onClick={resetMenu}>Favourites</Link>
                    </li>
                    <li>
                        <Link to='/login' onClick={resetMenu}>Login</Link>
                    </li>
                </ul>
            </div> : null }
        </div>
    )
}

export default Navbar