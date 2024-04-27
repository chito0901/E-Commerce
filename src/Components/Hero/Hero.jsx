import styles from './Hero.module.css'
import nikeAd from '../Assets/NikeAd.mp4'


function Hero(){

    return(
        <div className={styles.Hero}>
            <video autoPlay loop muted>
                <source src={nikeAd} type='video/mp4'></source>
            </video>
        </div>
    )
}
export default Hero