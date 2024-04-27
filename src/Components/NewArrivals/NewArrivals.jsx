import styles from './NewArrivals.module.css'
import dataArrivals from '../Assets/NewArrivals.js'
import Showcase from '../Showcase/Showcase'

function NewArrivals() {


    return (
        <div className={styles.newArrivals}>
            <h1>New Arrivals</h1>
            <hr />
            <div className={styles.newArrivalsItems}>
                {dataArrivals.map((item, i)=>{
                    return <Showcase key={i} id={item.id} name={item.name} desc={item.desc} image={item.image} price={item.price}/>
                })}
            </div>
        </div>
    )
}

export default NewArrivals