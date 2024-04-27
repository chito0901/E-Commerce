import styles from './DescriptionBox.module.css'



function DescriptionBox() {

    return(
        <div className={styles.descriptionBox}>
            <div className={styles.descriptionBoxNavigator}>
                <div className={styles.descriptionBoxNavBox}>
                    Description
                </div>
                <div className={styles.descriptionBoxNavBoxfade}>
                    Reviews (122)
                </div>
            </div>
            <div className={styles.descriptionBoxDescription}>
                <p>An e-commerce website is an online platform where businesses sell products or services to customers over the internet. It allows users to browse products, add items to a virtual shopping cart, and make secure payments electronically.</p>
                 
                <p>E-commerce websites often include features such as product categorization, search functionality, user reviews, and order tracking to enhance the shopping experience. They enable businesses to reach a global audience, operate 24/7, and streamline the process of buying and selling goods or services online.</p>
            </div>
        </div>
    )
}
export default DescriptionBox