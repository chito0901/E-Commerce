import styles from './Showcase.module.css'
import { Link } from 'react-router-dom';

function Showcase(props){


    return(
        <div className={styles.showcaseItem}>
            <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
            <h2>{props.name}</h2>
            <div className={styles.showcaseItemPrices}>
                <p>{props.desc}</p>
                $ {props.price}
            </div>
        </div>
    )
}

export default Showcase