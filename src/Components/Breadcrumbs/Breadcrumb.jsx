import styles from './Breadcrumb.module.css'

const categoryDisplayNames = {
    shoesAndSlides: 'Shoes & Slides',
    topsAndTees: 'Tops & T-Shirts',
    hoodiesAndPullovers: 'Hoodies & Pullovers',
    shorts: 'Shorts',
    accessoriesAndEquip: 'Accessories & Equipments'
};
function Breadcrumb(props) {
    const {product} = props;

    return(
        <div className={styles.breadcrumb}>
            Home &#8250; Shop &#8250; {categoryDisplayNames[product.category]} &#8250; {product.name}
        </div>
    )
}

export default Breadcrumb