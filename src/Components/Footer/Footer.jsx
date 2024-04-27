import { useState } from 'react'
import styles from './Footer.module.css'

function Footer(){
    const [helpClicked, setHelpClicked] = useState(false);
    const [aboutClicked, setAboutClicked] = useState(false);
    const handleHelpClick = () => {
        setHelpClicked(!helpClicked);
    };
    const handleAboutClick = () => {
        setAboutClicked(!aboutClicked);
    };

    return(
        <div className={styles.footer}>
            <div className={styles.footLinks}>
                <div className={styles.footerLinks}>
                <ul>
                    <li>FIND A STORE</li>
                    <li>BECOME A MEMBER</li>
                    <li>STUDENT DISCOUNT</li>
                    <li>Send Us Feedback</li>
                </ul>
                </div>
                <div className={styles.getHelp}>
                    <p>GET HELP</p> 
                    <ul className={styles.aboutLinks}>
                        <li>Order Status</li>
                        <li>Delivery</li>
                        <li>Returns</li>
                        <li>Payment Options</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className={styles.about}>
                    <p>ABOUT NIKE</p>
                    <ul className={styles.aboutLinks}>
                        <li>News</li>
                        <li>Careers</li>
                        <li>Investors</li>
                        <li>Sustainability</li>
                    </ul>
                </div>

                <div className={styles.getAbout}>
                    <div className={styles.getHelpMin}>
                        <div className={styles.helpButton}>
                            <p>GET HELP</p>
                            <div className={styles.btnHolder}>
                                <i onClick={handleHelpClick} className={helpClicked ? "fas fa-minus" : "fas fa-plus"}></i>
                            </div>
                        </div>
                        {helpClicked ?      
                        <ul className={styles.aboutLinks}>
                            <li>Order Status</li>
                            <li>Delivery</li>
                            <li>Returns</li>
                            <li>Payment Options</li>
                            <li>Contact Us</li>
                        </ul> : null}
                    </div>    
                    <div className={styles.aboutMin}>
                        <div className={styles.aboutButton}>
                            <p>ABOUT NIKE</p>
                            <div className={styles.btnHolder}>
                                <i onClick={handleAboutClick} className={aboutClicked ? "fas fa-minus" : "fas fa-plus"}></i>
                            </div>
                        </div> 
                        {aboutClicked ?
                        <ul className={styles.aboutLinks}>
                            <li>News</li>
                            <li>Careers</li>
                            <li>Investors</li>
                            <li>Sustainability</li>
                        </ul> : null }
                    </div>
                </div>
            </div>
            <div className={styles.footerCopyrights}>
                <p>Copyright @ 2024 - All Right Reserved.</p>
            </div>
        </div>
    )
}
export default Footer