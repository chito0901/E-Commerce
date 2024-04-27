import styles from './Items.module.css';
import { Link } from 'react-router-dom';

function Items(props) {
    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className={styles.items}>
            <Link to={`/product/${props.id}`} onClick={handleLinkClick}>
                <img src={props.image} alt="" />
            </Link>
            <h1>{props.name}</h1>
            <p>{props.desc}</p>
            <div className={styles.itemPrices}>
                $ {props.price}
            </div>
        </div>
    );
}

export default Items;
